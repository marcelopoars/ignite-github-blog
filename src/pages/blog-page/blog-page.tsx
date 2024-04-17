import { useEffect, useState } from "react";

import { PostType } from "../../@types";
import { api } from "../../lib";

import { Posts, Profile, Search } from "./_components";

export function Blog() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchPosts(query: string = "") {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:marcelopoars/ignite-github-blog`
    );

    setPosts(response.data.items);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const totalPosts = posts.length;

  return (
    <>
      <Profile />
      <Search totalPosts={totalPosts} fetchPosts={fetchPosts} />
      <Posts posts={posts} isLoading={isLoading} />
    </>
  );
}
