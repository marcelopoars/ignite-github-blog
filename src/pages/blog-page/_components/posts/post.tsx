import { PostType } from "../../../../@types";
import { formatDistanceToNow } from "../../../../utils";

import { PostCardLink, PostHeader } from "./styles";

export function Post({ number, title, body, created_at }: PostType) {
  return (
    <PostCardLink to={`/${number}`}>
      <PostHeader>
        <h3>{title}</h3>
        <span>{formatDistanceToNow(created_at)}</span>
      </PostHeader>
      <p>{body}</p>
    </PostCardLink>
  );
}
