/**
 * Compression utilities using Web APIs (CompressionStream/DecompressionStream)
 * Works in: Cloudflare Workers, Browser, Bun, Deno
 * Does NOT work in: Node.js < 19 (for those, fall back to zlib)
 */

/**
 * Compress a string to gzip base64 using CompressionStream (browser-native).
 * Returns the compressed result wrapped as base64.
 */
export async function compressGzip(text: string): Promise<string> {
  const encoded = new TextEncoder().encode(text);
  const cs = new CompressionStream('gzip');
  const writer = cs.writable.getWriter();
  writer.write(encoded);
  writer.close();
  const reader = cs.readable.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    total += value.byteLength;
  }
  // Merge chunks
  const merged = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return btoa(String.fromCharCode(...merged));
}

/**
 * Decompress a gzip base64 string back to plain text.
 */
export async function decompressGzip(base64: string): Promise<string> {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const ds = new DecompressionStream('gzip');
  const writer = ds.writable.getWriter();
  writer.write(bytes);
  writer.close();
  const reader = ds.readable.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    total += value.byteLength;
  }
  const merged = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(merged);
}

// Sync version using the same API — works on Workers runtime (no threads needed)
export { compressGzip as gzipSync, decompressGzip as gunzipSync };

// Wrapper for reading gzip+base64 result_json from DB and parsing it
export async function decompressResultJson(resultJson: string): Promise<any> {
  try {
    const decoded = Buffer.from(resultJson, 'base64');
    const isGzip = decoded[0] === 0x1f && decoded[1] === 0x8b;
    if (isGzip) {
      return decompressGzip(resultJson).then(t => JSON.parse(t));
    }
    return JSON.parse(resultJson);
  } catch (err) {
    console.error('decompressResultJson failed:', err);
    return null;
  }
}