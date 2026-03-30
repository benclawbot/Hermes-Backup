import OpenAI from 'openai';

function getOpenAI(): OpenAI {
  const key = process.env.OPENAI_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN;
  if (!key) {
    throw new Error('No API key set (OPENAI_API_KEY or ANTHROPIC_AUTH_TOKEN)');
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

export async function analyzeWithAI(crawlResult: any, ruleBasedChecks: any[]): Promise<AiAnalysisResult> {
  const prompt = `You are a GDPR compliance expert. Analyze this website scan data and provide a structured GDPR compliance assessment.

SCAN DATA:
${JSON.stringify(crawlResult, null, 2)}

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
    response_format: { type: 'json_object' },
    temperature: 0.3,
  });

  const content = response.choices[0].message.content || '{}';
  return JSON.parse(content) as AiAnalysisResult;
}
