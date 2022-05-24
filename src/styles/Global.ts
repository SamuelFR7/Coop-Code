import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

const GlobalStyle = createGlobalStyle`
    *, #__next {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }
        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background-color: ${theme.colors.bg};
        color: ${theme.colors.text}
    }

    body, input, textarea, button, select {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
`

export { GlobalStyle, Container }
