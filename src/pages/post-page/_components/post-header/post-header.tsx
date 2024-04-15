import {
  ArrowUpRightIcon,
  BuildingIcon,
  GithubIcon,
  UserGroupIcon,
} from "../../../../components";

import {
  Flex,
  Link,
  PostHeaderContainer,
  PostHeaderContent,
  SocialMedia,
} from "./styles";

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostHeaderContent>
        <Flex>
          <Link to="/">
            <ArrowUpRightIcon />
            Voltar
          </Link>

          <Link
            to="https://github.com/marcelopoars"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no Github
            <ArrowUpRightIcon />
          </Link>
        </Flex>

        <h1>Boas páticas de acessibilidade na web</h1>

        <SocialMedia>
          <ul>
            <li>
              <GithubIcon />
              marcelopoars
            </li>
            <li>
              <BuildingIcon />
              Há 1 dia
            </li>
            <li>
              <UserGroupIcon />8 comentários
            </li>
          </ul>
        </SocialMedia>
      </PostHeaderContent>
    </PostHeaderContainer>
  );
}
