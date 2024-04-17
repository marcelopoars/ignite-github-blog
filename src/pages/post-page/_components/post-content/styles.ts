import styled from "styled-components";

import { Container } from "../../../../components";

export const PostContentContainer = styled(Container)`
  max-width: 800px;
  padding: 2.5rem 1.5rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    color: ${({ theme }) => theme["blue-300"]};
    font-size: 1.25rem;
    font-weight: 700 !important;
  }

  pre > div {
    background-color: ${({ theme }) => theme["blue-700"]}!important;
    font-family: 'Courier New', Courier, monospace!important;
  }

  pre + p {
    margin-top: 2rem;
  }

  li {
    list-style: disc;
    margin-left: 1rem;
  }

  li + li {
    margin-top: 0.25rem;
  }
`;
