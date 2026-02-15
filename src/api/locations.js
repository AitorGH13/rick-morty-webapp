import { fetchWithRetry } from './fetchWithRetry';

const BASE_URL = 'https://rickandmortyapi.com/api/location';

export async function fetchLocationsPage(page, search, type, dimension) {
  const params = [`page=${page}`];
  if (search) params.push(`name=${encodeURIComponent(search)}`);
  if (type) params.push(`type=${encodeURIComponent(type)}`);
  if (dimension) params.push(`dimension=${encodeURIComponent(dimension)}`);
  const url = `${BASE_URL}/?${params.join('&')}`;
  const res = await fetchWithRetry(url);
  return res.json();
}

export async function fetchAllLocationFilters() {
  let url = BASE_URL;
  const types = [];
  const dimensions = [];
  const relations = [];

  while (url) {
    const res = await fetchWithRetry(url);
    const data = await res.json();
    data.results.forEach((loc) => {
      types.push(loc.type);
      dimensions.push(loc.dimension);
      relations.push({ type: loc.type, dimension: loc.dimension });
    });
    url = data.info.next;
  }

  return { types, dimensions, relations };
}

export async function fetchLocationByName(name) {
  const res = await fetchWithRetry(
    `${BASE_URL}?name=${encodeURIComponent(name)}`
  );
  return res.json();
}

export { BASE_URL };
