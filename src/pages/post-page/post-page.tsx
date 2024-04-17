import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib";
import { PostType } from "../../@types";

import { PostContent, PostHeader } from "./_components";

export function Post() {
  const { id } = useParams<{ id: string }>();

  const [postDetails, setPostDetails] = useState<PostType>({} as PostType);
  const [isLoading, setIsloading] = useState(true);

  const fetchPostDetails = useCallback(async () => {
    const response = await api.get(
      `/repos/marcelopoars/ignite-github-blog/issues/${id}`
    );

    setPostDetails(response.data);
    setIsloading(false);
  }, [id]);

  useEffect(() => {
    fetchPostDetails();
  }, [fetchPostDetails]);

  return (
    <>
      <PostHeader {...postDetails} isLoading={isLoading} />
      <PostContent content={postDetails.body} isLoading={isLoading} />
    </>
  );
}
