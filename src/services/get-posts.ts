import { QueryClientConfig, useQuery } from "@tanstack/react-query";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await res.json()) as Post[];
  return data;
}

export function useGetPosts({
  config,
  initialData,
}: {
  config?: QueryClientConfig;
  initialData?: Post[];
}) {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData,
    ...config,
  });
}
