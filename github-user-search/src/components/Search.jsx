import { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await searchUsers({ username, location, minRepos });
      setResults(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-4 flex flex-col gap-3"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      <div className="mt-4 grid gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 bg-gray-100 p-3 rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="font-bold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
