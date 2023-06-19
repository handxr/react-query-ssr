"use client";
import { Post, useGetPosts } from "@/services/get-posts";

export function PostsList({ posts }: { posts: Post[] }) {
  const { data, isLoading } = useGetPosts({ initialData: posts });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) return null;

  return (
    <>
      <h1>Posts</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
