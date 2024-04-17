import styled from "styled-components";

import { Container } from "../../../../components";

export const ProfileContainer = styled(Container)`
  margin-top: -72px;

  @media screen and (min-width: 1024px) {
    margin-top: -96px;
  }
`;

export const ProfileContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme["blue-800"]};
  border-radius: 0.5rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

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

    flex-direction: row;
    gap: 2rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Avatar = styled.div`
  min-width: 6rem;
  min-height: 6rem;
  max-width: 6rem;
  max-height: 6rem;

  margin-bottom: 0.5rem;

  border-radius: 0.5rem;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    min-width: 9.25rem;
    min-height: 9.25rem;
    max-width: 9.25rem;
    max-height: 9.25rem;

    margin-bottom: 0;
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const SocialMedia = styled.aside`
  padding-top: 1rem;

  color: ${({ theme }) => theme["blue-50"]};
  font-size: 0.875rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem 0.5rem;
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
    padding-top: 1.5rem;
    font-size: 1rem;
  }
`;

export const GithubLink = styled.a`
  padding-top: 1rem;

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
    position: absolute;
    top: 2rem;
    right: 2.5rem;

    padding-top: 0;
  }
`;
