export async function fetchWrapper<T>(url: string, cache?: RequestCache ) {
  const response = await fetch(url, { cache: cache || 'no-cache' });

  if(!response.ok) {
    throw new Error('Failed to fetch data');
  };

  const data = await response.json();

  return data as T
};