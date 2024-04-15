import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { Container } from "../../../../components";

export const PostHeaderContainer = styled(Container)`
  margin-top: -72px;

  @media screen and (min-width: 1024px) {
    margin-top: -96px;
  }
`;

export const PostHeaderContent = styled.div`
  background-color: ${({ theme }) => theme["blue-800"]};
  border-radius: 0.5rem;
  padding: 1.5rem;

  h1 {
    font-size: 1rem;
    color: ${({ theme }) => theme["blue-50"]};
  }

  p {
    font-size: 0.75rem;
  }

  @media screen and (min-width: 1024px) {
    border-radius: 1rem;
    padding: 2rem 2.5rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Flex = styled.div`
  margin-bottom: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialMedia = styled.aside`
  padding-top: 0.5rem;

  color: ${({ theme }) => theme["blue-400"]};
  font-size: 0.875rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme["blue-500"]};
      width: 18px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 0.25rem 2rem;

    font-size: 1rem;
  }
`;

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme["blue-300"]};
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media screen and (min-width: 1024px) {
  }
`;
