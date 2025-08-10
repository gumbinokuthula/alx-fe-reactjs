import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// queryObj example: { username: 'john', location: 'usa', minRepos: 10 }
export async function fetchUserData({ username, location, minRepos }) {
  try {
    // Build the search query string with optional filters
    let query = '';

    if (username) {
      query += `${username} `;
    }
    if (location) {
      query += `location:${location} `;
    }
    if (minRepos) {
      query += `repos:>=${minRepos} `;
    }

    // Trim any trailing spaces
    query = query.trim();

    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items; // Array of users matching criteria
  } catch (error) {
    throw error;
  }
}
