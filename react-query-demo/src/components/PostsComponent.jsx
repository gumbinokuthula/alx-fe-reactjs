import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPosts } from "../services/api";

export default function PostsComponent() {
  const queryClient = useQueryClient();

  // useQuery key must be stable. Here we use ["posts"]
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
    // options can also be in App's QueryClient defaultOptions
    // staleTime: 1000 * 30,
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p>Error: {error.message}</p>;

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
          onClick={() => {
            // show how to prefetch using QueryClient
            queryClient.prefetchQuery(["posts"], fetchPosts);
            alert("Prefetch triggered (check devtools/network)");
          }}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Prefetch
        </button>

        <div className="ml-auto text-sm text-gray-600">
          {isFetching ? "Updating..." : "Idle"}
        </div>
      </div>

      <div className="grid gap-3">
        {posts.slice(0, 20).map((post) => (
          <div
            key={post.id}
            className="p-3 bg-white rounded shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{post.body}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Note: React Query caches results — navigate away and return to see cached
        data load instantly (staleTime controls freshness).
      </p>
    </div>
  );
}
