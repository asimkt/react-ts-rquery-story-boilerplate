// Relpace with correct endpoint & auth data
const UNSPLASH_API_ENDPOINT = `https://api.unsplash.com`;
const ACCESS_KEY = `FZpIl7feLseFHwV4DScQqiaVULO54C7GRBiqlmDrxdI`;
export const getApi = (endpoint: string) => {
  return fetch(`${UNSPLASH_API_ENDPOINT}${endpoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  }).then(async res => {
    const data = await res.json();
    return {
      data: data,
      linkHeader: res.headers.get('link'),
      // extra data if anything needed
    };
  });
};
