import styled from "styled-components";

import { Container } from "../container";

import bgImage from "../../assets/bg-header.png";

export const Cover = styled.header`
  background: url(${bgImage}) center;
  background-size: cover;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;

  padding-top: 2rem;
  padding-bottom: 96px;

  img {
    width: 112px;
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 3rem;
    padding-bottom: 134px;

    > img {
      width: 148px;
      height: 98px;
    }
  }
`;
