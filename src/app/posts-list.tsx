"use client";
import { useGetPosts } from "@/services/get-posts";
import Link from "next/link";

export function PostsList() {
  const { data, isLoading } = useGetPosts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) return null;

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
