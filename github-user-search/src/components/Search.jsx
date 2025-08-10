import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div className="border rounded p-4">
          <img src={userData.avatar_url} alt={userData.login} className="w-20 rounded-full" />
          <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
