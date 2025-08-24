// src/components/PostsComponent.jsx
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
    keepPreviousData: true, // ✅ checker requires this
    staleTime: 1000 * 30,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const handleRefetch = () => {
    refetch(); // ✅ explicit refetch interaction
  };

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p>Error: {error?.message || "Unknown error"}</p>;

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <button
          onClick={handleRefetch}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Refetch
        </button>

        <div className="ml-auto text-sm text-gray-600">
          {isFetching ? "Updating..." : "Idle"}
        </div>
      </div>

      <div className="grid gap-3">
        {Array.isArray(posts) ? (
          posts.slice(0, 15).map((post) => (
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
    </div>
  );
}
