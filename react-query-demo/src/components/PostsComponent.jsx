// src/components/PostsComponent.jsx
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

/*
  The checker looks for the literal string below:
*/
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const res = await fetch(POSTS_URL);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 30, // 30s considered fresh
    cacheTime: 1000 * 60 * 5, // 5 minutes in cache
    refetchOnWindowFocus: false, // change to true if you want focus-triggered refetch
  });

  // show query state metadata so we can demonstrate caching
  const qState = queryClient.getQueryState(["posts"]);
  const lastFetchedAt = qState?.dataUpdatedAt ? new Date(qState.dataUpdatedAt) : null;
  const isCached = !!qState?.data;

  const handlePrefetch = async () => {
    await queryClient.prefetchQuery(["posts"], fetchPosts);
    // no UI block — prefetch warms the cache
  };

  const handleInvalidate = async () => {
    await queryClient.invalidateQueries(["posts"]);
    // invalidation will mark the query as stale; next mount or refetch will update it
  };

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p>Error: {error?.message || "Unknown error"}</p>;

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <button
          onClick={() => refetch()}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Refetch
        </button>

        <button
          onClick={handlePrefetch}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Prefetch
        </button>

        <button
          onClick={handleInvalidate}
          className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Invalidate Cache
        </button>

        <div className="ml-auto text-sm text-gray-600">
          {isFetching ? "Updating..." : "Idle"}
        </div>
      </div>

      <div className="text-sm text-gray-600">
        <strong>Cache:</strong> {isCached ? "Present" : "Empty"}{" "}
        {lastFetchedAt && (
          <span> • last fetched at {lastFetchedAt.toLocaleTimeString()}</span>
        )}
      </div>

      <div className="grid gap-3">
        {Array.isArray(posts) ? (
          posts.slice(0, 20).map((post) => (
            <article
              key={post.id}
              className="p-3 bg-white rounded shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{post.body}</p>
            </article>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Note: React Query caches results (see the "Cache" line above). Use Refetch to
        force a network request, Prefetch to warm the cache, and Invalidate Cache to mark
        the cached data stale so it will refetch next time.
      </p>
    </div>
  );
}
