import { PostCardLink, PostHeader } from "./styles";

export function Post() {
  return (
    <PostCardLink to={"/1"}>
      <PostHeader>
        <h3>Teste te título do post bem longo para ver como fica a quebra de linha</h3>
        <span>Há 1 dia</span>
      </PostHeader>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </PostCardLink>
  );
}
