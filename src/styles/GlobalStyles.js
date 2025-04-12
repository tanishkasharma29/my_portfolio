import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
    animation: fadeIn 0.7s ease-in;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
