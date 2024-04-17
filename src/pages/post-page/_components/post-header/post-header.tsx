import { PostType } from "../../../../@types";

import {
  ArrowUpRightIcon,
  CalendarIcon,
  CommentIcon,
  GithubIcon,
  Spinner,
} from "../../../../components";

import { formatDistanceToNow } from "../../../../utils";

import {
  Flex,
  Link,
  PostHeaderContainer,
  PostHeaderContent,
  SocialMedia,
} from "./styles";

type PostHeaderProps = PostType & {
  isLoading: boolean;
};

export function PostHeader({
  title,
  created_at,
  comments,
  html_url,
  isLoading,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderContent>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Flex>
              <Link to="/">
                <ArrowUpRightIcon />
                Voltar
              </Link>

              <Link to={html_url} target="_blank" rel="noopener noreferrer">
                Ver no Github
                <ArrowUpRightIcon />
              </Link>
            </Flex>

            <h1>{title}</h1>

            <SocialMedia>
              <ul>
                <li>
                  <GithubIcon />
                  marcelopoars
                </li>
                <li>
                  <CalendarIcon />
                  {formatDistanceToNow(created_at)}
                </li>
                <li>
                  <CommentIcon />
                  {comments} comentários
                </li>
              </ul>
            </SocialMedia>
          </>
        )}
      </PostHeaderContent>
    </PostHeaderContainer>
  );
}
