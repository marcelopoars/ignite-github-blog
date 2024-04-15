import styled from "styled-components";

import { Container } from "../../../../components";

export const SearchContainer = styled(Container)`
  padding-top: 2rem;

  @media screen and (min-width: 1024px) {
    padding-top: 4.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  
  background-color: ${({ theme }) => theme["blue-950"]};
  border: 1px solid ${({ theme }) => theme["blue-600"]};
  border-radius: 6px;

  &::placeholder {
    color: ${({ theme }) => theme["blue-500"]};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h2 {
    color: ${({ theme }) => theme["blue-100"]};
    font-size: 18px;
  }

  span {
    font-size: 0.875rem;
  }
`;
