import { PostType } from "../../../../@types";

import { Container, Spinner } from "../../../../components";
import { Post } from "./post";

import { PostsContainer } from "./styles";

interface PostsProps {
  posts: PostType[];
  isLoading: boolean;
}

export function Posts({ posts, isLoading }: PostsProps) {
  return (
    <>
      {isLoading ? (
        <Container>
          <Spinner />
        </Container>
      ) : (
        <PostsContainer>
          {posts.map((post) => (
            <Post key={post.number} {...post} />
          ))}
        </PostsContainer>
      )}
    </>
  );
}
