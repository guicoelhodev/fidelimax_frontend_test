export async function fetchWFideliMax<T>(url: string, cache?: RequestCache) {
  const response = await fetch(`${process.env.FIDELIXMAX_API}${url}`, {
    cache: cache || "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data as T;
}
