import styled from "styled-components";

import { Container } from "../../../../components";
import { Link } from "react-router-dom";

export const PostsContainer = styled(Container)`
  padding-top: 2rem;

  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    padding-top: 3rem;

    grid-template-columns: 1fr 1fr;
  }
`;

export const PostCardLink = styled(Link)`
  background-color: ${({ theme }) => theme["blue-700"]};
  border: 2px solid ${({ theme }) => theme["blue-700"]};

  padding: 1.5rem;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    border-color: ${({ theme }) => theme["blue-500"]};
  }

  @media screen and (min-width: 768px) {
    padding: 2rem;

    border-radius: 0.5rem;
  }
`;

export const PostHeader = styled.header`
  color: ${({ theme }) => theme["blue-50"]};
  margin-bottom: 1.25rem;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    color: ${({ theme }) => theme["blue-400"]};
    font-size: 0.75rem;
    white-space: nowrap;
  }

  @media screen and (min-width: 768px) {
  }
`;
