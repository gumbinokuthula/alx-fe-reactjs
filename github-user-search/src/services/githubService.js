import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// For advanced search (e.g., location, repo count), you might add:
// export async function fetchUsersByCriteria(query) {
//   try {
//     const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
//     return response.data.items;
//   } catch (error) {
//     throw error;
//   }
// }
