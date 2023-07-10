import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: OpenSans, sans-serif;
    color: ${props => props.theme['foreground-primary']}
  }

  html, body, #root {
    height: 100%;
  }
`

export const Container = styled.div `
  display: flex;  
  height: 100%;

  flex-direction: column;
`