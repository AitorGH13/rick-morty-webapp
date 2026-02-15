import { fetchWithRetry } from './fetchWithRetry';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchAllCharacters() {
  const allChars = [];
  let url = BASE_URL;
  while (url) {
    const res = await fetchWithRetry(url);
    if (!res.ok) break;
    const data = await res.json();
    allChars.push(...data.results);
    url = data.info.next;
  }
  return allChars;
}

export async function fetchCharactersPage(url) {
  const res = await fetchWithRetry(url);
  if (!res.ok) return { results: [], info: {} };
  return res.json();
}

export async function fetchCharactersWithSearch(searchText) {
  const url = `${BASE_URL}${searchText ? `?name=${encodeURIComponent(searchText)}` : ''}`;
  const result = [];
  let current = url;
  while (current) {
    const res = await fetchWithRetry(current);
    if (!res.ok) break;
    const data = await res.json();
    result.push(...data.results);
    current = data.info.next;
  }
  return result;
}

export async function bulkFetchCharacterNames(urls) {
  if (!urls.length) return [];
  const ids = urls.map((u) => u.split('/').pop()).join(',');
  const res = await fetchWithRetry(`${BASE_URL}/[${ids}]`);
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data.map((p) => p.name) : [data.name];
}

export async function fetchCharactersByOrigin(originName) {
  let url = BASE_URL;
  const names = [];
  while (url) {
    const res = await fetchWithRetry(url);
    if (!res.ok) break;
    const data = await res.json();
    const matching = data.results
      .filter((p) => p.origin.name === originName)
      .map((p) => p.name);
    names.push(...matching);
    url = data.info.next;
  }
  return names;
}

export { BASE_URL };
