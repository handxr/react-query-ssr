import { getQueryClient } from "@/utils/get-query-client";
import { Hydrate } from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import { PostsList } from "./posts-list";
import { getPosts } from "@/services/get-posts";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["posts"], getPosts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PostsList posts={[]} />
    </Hydrate>
  );
}
