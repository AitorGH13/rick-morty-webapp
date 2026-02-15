import { fetchWithRetry } from './fetchWithRetry';

const BASE_URL = 'https://rickandmortyapi.com/api/episode';

export async function fetchAllEpisodes(params = []) {
  let url = BASE_URL;
  if (params.length) url += `?${params.join('&')}`;
  const first = await fetchWithRetry(url).then((r) => r.json());
  let all = first.results || [];
  const pages = first.info?.pages || 1;

  if (pages > 1) {
    const promises = [];
    for (let p = 2; p <= pages; p++) {
      const pageUrl = url + (params.length ? `&page=${p}` : `?page=${p}`);
      promises.push(fetchWithRetry(pageUrl).then((r) => r.json()));
    }
    const rest = await Promise.all(promises);
    rest.forEach((d) => {
      if (d.results) all = all.concat(d.results);
    });
  }
  return all;
}

export { BASE_URL };
