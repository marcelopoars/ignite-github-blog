import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme["blue-300"]};
  border-radius: 6px;
}

body {
  background-color: ${({ theme }) => theme["blue-900"]};
  color: ${({ theme }) => theme["blue-200"]};
}

button {
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: all 0.2s;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;

  transition: all 0.2s;
}

body, input, textarea, button {
  font-family: 'Nunito', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${({ theme }) => theme["blue-200"]};
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 
`;
