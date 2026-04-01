import { getDb } from '@/lib/db';
import { generateReportHtml } from '@/lib/report';

export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getDb();

  const scan = db.prepare('SELECT * FROM scans WHERE id = ?').get(id) as any;

  if (!scan) {
    return <div className="min-h-screen bg-midnight flex items-center justify-center text-white">Report not found</div>;
  }

  if (scan.status !== 'completed') {
    return <div className="min-h-screen bg-midnight flex items-center justify-center text-white">Report not ready yet</div>;
  }

  let result: any;
  if (scan.result_json) {
    const decoded = Buffer.from(scan.result_json, 'base64');
    if (decoded[0] === 0x1f && decoded[1] === 0x8b) {
      result = JSON.parse(require('zlib').gunzipSync(decoded).toString('utf8'));
    } else {
      result = JSON.parse(scan.result_json);
    }
  }
  const html = generateReportHtml(scan.url, result);

  return (
    <div className="min-h-screen bg-midnight py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <a href="/dashboard" className="text-white/50 hover:text-white text-sm mb-6 inline-block">
          ← Back to Dashboard
        </a>
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <iframe
            srcDoc={html}
            className="w-full"
            style={{ height: '80vh', border: 'none' }}
            title="GDPR Report"
          />
        </div>
      </div>
    </div>
  );
}
