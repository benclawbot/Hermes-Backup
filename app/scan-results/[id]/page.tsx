import Link from "next/link";
import { getDb, parseResultJson } from "@/lib/env";

interface Props {
  params: Promise<{ id: string }>;
}

// Strip free-scan result to a limited preview:
// - Cap each severity group at 5 issues
// - Remove fix field (paywall)
// - Remove AI analysis (paywall)
function toLimitedPreview(result: any): any {
  if (!result) return result;
  const ISSUE_CAP = 5;
  const stripFix = (issue: any) => ({ rule: issue.rule, message: issue.message });
  const stripChecks = (checks: any[] | undefined) =>
    (checks || []).slice(0, ISSUE_CAP).map(stripFix);
  return {
    ...result,
    ruleChecks: stripChecks(result.ruleChecks),
    aiAnalysis: null,
  };
}

export default async function ScanResultsPage({ params }: Props) {
  const { id } = await params;
  const scanId = decodeURIComponent(id);

  const db = getDb();
  const scan = db.prepare("SELECT * FROM scans WHERE id = ?").get(scanId) as any;

  if (!scan) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Scan not found</h1>
          <p className="text-white/60 mb-6">This scan may have expired or doesn&apos;t exist.</p>
          <Link href="/" className="px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-glow transition-all">
            Scan another website
          </Link>
        </div>
      </div>
    );
  }

  let result = null;
  if (scan.result_json) {
    result = await parseResultJson(scan.result_json);
  }

  const preview = toLimitedPreview(result);

  return (
    <ScanResultsClient
      scanId={scanId}
      url={scan.url || ""}
      email={scan.email || null}
      status={scan.status}
      result={preview}
      isLimitedPreview={true}
    />
  );
}
