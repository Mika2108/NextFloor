// A small ZIP reader for importing plans from other programs (a Sweet Home 3D .sh3d file is a ZIP): finds the entries through the
// central directory and inflates them with the browser's own DecompressionStream. Stored and deflated entries only.

export interface ZipEntry {
  name: string;
  /** 0 = stored, 8 = deflated. */
  method: number;
  compressedSize: number;
  offset: number;
}

const u16 = (b: DataView, at: number) => b.getUint16(at, true);
const u32 = (b: DataView, at: number) => b.getUint32(at, true);

/** The entries of a ZIP file, read from its central directory. */
export function zipEntries(data: Uint8Array): ZipEntry[] {
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  // the end-of-central-directory record sits in the last 64 KiB + 22 bytes
  let end = -1;
  for (let i = data.length - 22; i >= Math.max(0, data.length - 65557); i--) {
    if (u32(view, i) === 0x06054b50) {
      end = i;
      break;
    }
  }
  if (end < 0) throw new Error("not_zip");
  const count = u16(view, end + 10);
  let at = u32(view, end + 16);
  const entries: ZipEntry[] = [];
  const names = new TextDecoder();
  for (let n = 0; n < count; n++) {
    if (u32(view, at) !== 0x02014b50) throw new Error("not_zip");
    const method = u16(view, at + 10);
    const compressedSize = u32(view, at + 20);
    const nameLength = u16(view, at + 28);
    const extraLength = u16(view, at + 30);
    const commentLength = u16(view, at + 32);
    const localHeader = u32(view, at + 42);
    const name = names.decode(data.subarray(at + 46, at + 46 + nameLength));
    // the data starts after the local header, whose name and extra field may differ in length from the central one
    const offset = localHeader + 30 + u16(view, localHeader + 26) + u16(view, localHeader + 28);
    entries.push({ name, method, compressedSize, offset });
    at += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

/** The bytes of one entry, inflated. */
export async function zipRead(data: Uint8Array, entry: ZipEntry): Promise<Uint8Array> {
  const raw = data.subarray(entry.offset, entry.offset + entry.compressedSize);
  if (entry.method === 0) return raw;
  if (entry.method !== 8) throw new Error("zip_method");
  const stream = new Blob([raw.slice() as Uint8Array<ArrayBuffer>]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
