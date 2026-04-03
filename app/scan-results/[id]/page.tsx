import { getDb } from '@/lib/db';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import ScanResultsClient from './ScanResultsClient';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ScanResultsPage({ params }: Props) {
  const { id } = await params;
  const scanId = decodeURIComponent(id);

  const db = getDb();
  const scan = db
    .prepare('SELECT * FROM scans WHERE id = ?')
    .get(scanId) as any;

  if (!scan) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Scan not found</h1>
          <p className="text-white/60 mb-6">This scan may have expired or doesn't exist.</p>
          <Link href="/" className="px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-glow transition-all">
            Scan another website
          </Link>
        </div>
      </div>
    );
  }

  // Decompress result if available
  let result = null;
  if (scan.result_json) {
    try {
      const decompressed = require('zlib')
        .gunzipSync(Buffer.from(scan.result_json, 'base64'))
        .toString('utf8');
      result = JSON.parse(decompressed);
    } catch {
      result = null;
    }
  }

  return (
    <ScanResultsClient
      scanId={scanId}
      url={scan.url}
      email={scan.email}
      status={scan.status}
      result={result}
    />
  );
}
