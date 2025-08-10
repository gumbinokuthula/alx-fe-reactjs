import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Advanced search users by query string
export async function fetchUserData(query) {
  try {
    // Using search API endpoint, returns multiple users
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items; // array of user results
  } catch (error) {
    throw error;
  }
}
