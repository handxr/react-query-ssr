import { useQuery } from "@tanstack/react-query";
import { Post } from "./get-posts";

export async function getPost(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = (await res.json()) as Post;
  return data;
}

export function useGetPost(postId: string) {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
  });
}
