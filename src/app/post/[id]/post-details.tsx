"use client";

import { useGetPost } from "@/services/get-post";

export default function PostDetails({ id }: { id: string }) {
  const { data, isLoading } = useGetPost(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) return null;
  return (
    <>
      <h1>Post Details</h1>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </>
  );
}
