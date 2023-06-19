import { getPost } from "@/services/get-post";

import { getQueryClient } from "@/utils/get-query-client";
import { Hydrate } from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import PostDetails from "./post-details";

export default async function PostPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["post", id], () => getPost(id));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PostDetails id={id} />
    </Hydrate>
  );
}
