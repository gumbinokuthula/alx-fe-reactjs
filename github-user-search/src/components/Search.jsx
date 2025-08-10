import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchUserData(query);
      if (results.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setUsers(results);
      }
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
          placeholder="Search GitHub users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {users.map((user) => (
          <div key={user.id} className="border rounded p-4 mb-4 flex items-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold"
              >
                {user.login}
              </a>
              {/* Note: location and repos count require extra API calls per user if you want exact data */}
              {/* You can display basic info from search result only */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
