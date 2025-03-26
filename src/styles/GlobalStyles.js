import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`