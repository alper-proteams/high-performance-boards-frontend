const API_URL =
  process.env.API_URL || 'https://highperformanceboards.proteams.com/api';

// // axios apiClient
// const apiClient = async ({ method, endpoint, headers, data }) => {
//   const res = await axios({
//     url: `${API_URL}${endpoint}`,
//     method: method.toLowerCase(),
//     headers: {
//       'Content-type': 'application/json',
//       ...headers
//     },
//     data: data,
//   });
//   return res.json();
// };

// fetch apiClient
export default async function apiClient({
  method = 'GET',
  endpoint,
  headers,
  data,
}) {
  const req = await fetch(`${API_URL}${endpoint}`, {
    method: method.toUpperCase(),
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(data),
  });
  const res = await req.json();
  if (res.error) {
    throw res.error;
  }
  return res;
}
