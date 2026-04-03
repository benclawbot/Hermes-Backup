import OpenAI from 'openai';

function getOpenAI(): OpenAI {
  const key = process.env.OPENAI_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN || process.env.MINIMAX_API_KEY;
  if (!key) {
    throw new Error('No API key set (OPENAI_API_KEY, ANTHROPIC_AUTH_TOKEN, or MINIMAX_API_KEY)');
  }
  return new OpenAI({
    apiKey: key,
    baseURL: process.env.OPENAI_BASE_URL || 'https://api.minimax.io/v1',
  });
}

export interface AiAnalysisResult {
  summary: string;
  riskLevel: 'low' | 'medium' | 'high';
  issues: Array<{
    title: string;
    description: string;
    severity: 'critical' | 'warning' | 'info';
    fix: string;
  }>;
  positives: string[];
  gdprScore: number;
}

/** Escape HTML to unicode entities so it cannot break the prompt string or corrupt JSON generation */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validateResult(obj: unknown): obj is AiAnalysisResult {
  if (!obj || typeof obj !== 'object') return false;
  const o = obj as Record<string, unknown>;
  return (
    typeof o.summary === 'string' &&
    ['low', 'medium', 'high'].includes(o.riskLevel as string) &&
    Array.isArray(o.issues) &&
    Array.isArray(o.positives) &&
    typeof o.gdprScore === 'number'
  );
}

export async function analyzeWithAI(crawlResult: any, ruleBasedChecks: any[]): Promise<AiAnalysisResult> {
  // Strip large/binary fields and HTTP response headers — these are already analyzed
  // by rule-based checks and confuse the LLM when it comments on them in plain text.
  const { securityHeaders, screenshots: _s, ...rest } = crawlResult ?? {};
  void securityHeaders; // already excluded

  // Deep-clone and JSON-escape all string fields so they can't break the LLM's JSON output
  function jsonEscape(val: unknown): unknown {
    if (typeof val === 'string') {
      return val
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t')
        .slice(0, 5000);
    }
    if (Array.isArray(val)) return val.map(jsonEscape);
    if (val && typeof val === 'object') {
      const out: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
        out[k] = jsonEscape(v);
      }
      return out;
    }
    return val;
  }

  const truncated = {
    ...rest,
    html: rest.html ? rest.html.substring(0, 3000) + '...[truncated]' : '',
    screenshots: [], // Exclude screenshots from AI analysis
  };
  const escaped = jsonEscape(truncated) as typeof truncated;

  const prompt = `You are a GDPR compliance expert. Analyze this website scan data and provide a structured GDPR compliance assessment.

SCAN DATA:
${JSON.stringify(escaped, null, 2)}

RULE-BASED CHECKS ALREADY PERFORMED:
${JSON.stringify(ruleBasedChecks, null, 2)}

Return a JSON object with this exact structure:
{
  "summary": "2-3 sentence executive summary of compliance posture",
  "riskLevel": "low | medium | high",
  "issues": [
    {
      "title": "Issue title",
      "description": "What the problem is and why it matters under GDPR",
      "severity": "critical | warning | info",
      "fix": "Specific action to fix this issue"
    }
  ],
  "positives": ["List of things done well from a GDPR perspective"],
  "gdprScore": 0-100
}

Be specific. Generic advice is not helpful. Focus on actionable fixes.`;

  const response = await getOpenAI().chat.completions.create({
    model: 'MiniMax-M2.5',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
  });

  let content = response.choices[0].message.content || '{}';
  // Strip thinking/reasoning tags if present (MiniMax sometimes prefixes with these)
  content = content.replace(/<thinking>[\s\S]*?<\/thinking>/gi, '').trim();
  content = content.replace(/<think>[\s\S]*?<\/thinking>/gi, '').trim();
  // Remove any leading markdown code fences
  content = content.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').trim();
  // Extract JSON from potentially malformed response (e.g. with thinking text before/after)
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    content = jsonMatch[0];
  }

  // ── Defensive parse with validation ────────────────────────────────────────
  // Fix \u followed by single non-hex character (MiniMax sometimes generates \x instead of proper escapes)
  content = content.replace(/\\u([0-9a-fA-F](?![0-9a-fA-F]{3}))/g, (_, c) => c);
  // Remove trailing commas before } or ]
  content = content.replace(/,(\s*[}\]])/g, '$1');
  // Remove any control characters
  content = content.replace(/[\x00-\x1F\x7F]/g, '');

  // ── Robust JSON repair ──────────────────────────────────────────────────────
  // Unescaped quotes inside strings break JSON.parse (e.g. "says "hello" there")
  // Strategy: walk the string and fix unescaped inner quotes by escaping them.
  function repairJson(raw: string): string {
    let result = '';
    let inString = false;
    let i = 0;
    while (i < raw.length) {
      const ch = raw[i];
      if (!inString) {
        if (ch === '"') {
          inString = true;
          result += ch;
        } else if (ch === '\\' && raw[i + 1] === '"') {
          // escaped quote outside string — malformed, skip backslash
          result += raw[i + 1];
          i += 2;
          continue;
        } else {
          result += ch;
        }
      } else {
        // inside string
        if (ch === '\\') {
          const next = raw[i + 1];
          if (next === '"' || next === '\\' || next === '/' || next === 'n' || next === 'r' || next === 't' || next === 'u') {
            // valid escape sequence — keep as-is
            result += ch + next;
            i += 2;
            continue;
          }
          // Invalid escape — keep the backslash but drop the next char
          result += ch;
          i++;
          continue;
        }
        if (ch === '"') {
          // End of string
          inString = false;
          result += ch;
        } else {
          result += ch;
        }
      }
      i++;
    }
    return result;
  }

  content = repairJson(content);

  // Try parse with recovery: strip obvious malformed suffix after final }
  let parsed: AiAnalysisResult;
  try {
    parsed = JSON.parse(content) as AiAnalysisResult;
  } catch (parseErr: unknown) {
    const errMsg = parseErr instanceof Error ? parseErr.message : String(parseErr);
    throw new Error(`AI response JSON parse failed: ${errMsg} | content preview: ${content.substring(0, 200)}`);
  }

  if (!validateResult(parsed)) {
    throw new Error(
      `AI response validation failed — missing required fields. ` +
      `Got: ${JSON.stringify(Object.keys(parsed || {}))}`
    );
  }

  return parsed;
}
