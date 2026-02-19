/**
 * Enrichr — utility API wrapper
 * Generates URL-safe slugs, validates emails, and more.
 *
 * Setup: add ENRICHR_API_KEY to your .env
 * Get a free key at https://enrichrapi.dev (1,000 calls/month free)
 */

const BASE = process.env.ENRICHR_BASE_URL ?? 'https://enrichrapi.dev';

/**
 * Generate a URL-safe slug from any string.
 * Handles Unicode, accents, and special characters (e.g. "Café & More" → "cafe-more").
 * Returns null if ENRICHR_API_KEY is not set (graceful degradation).
 *
 * @example
 * const slug = await generateSlug('My First Post — Café Style!');
 * // → "my-first-post-cafe-style"
 */
export async function generateSlug(
  text: string,
  separator = '-'
): Promise<string | null> {
  const key = process.env.ENRICHR_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch(`${BASE}/v1/generate/slug`, {
      method: 'POST',
      headers: { 'X-Api-Key': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, separator }),
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json.data as { slug: string; length: number }).slug;
  } catch {
    return null;
  }
}
