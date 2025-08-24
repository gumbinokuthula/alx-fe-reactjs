import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // keep data fresh a while (milliseconds)
      staleTime: 1000 * 30, // 30s
      cacheTime: 1000 * 60 * 5, // 5 minutes in cache
      refetchOnWindowFocus: true, // revalidate on focus
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-4">React Query Demo — Posts</h1>
        <PostsComponent />
      </div>

      {/* Devtools are optional but very helpful */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
