import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.div `
    display: flex;
    flex-direction: column;

    align-items: center;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media ${device.desktop} {
        margin:  0 5% 0 5%;
    }

    hr {
        width: 98%;
        color: ${props => props.theme['highlight-purple']};
        opacity: 0.5;
        margin: 20px 0 20px 0;
    }

    > div {
        align-self: flex-start;
        width: 100%;
        padding: 0 15px 0 15px;
    }

    > div:nth-child(2) {
        padding-top: 15px;
    }

    > div:last-child {
        padding-bottom: 15px;
    }
    
`

export const Navigation = styled.div `

`

export const Image = styled.div `
    height: 200px;
    width: 100%;
    overflow: hidden;
    background-position: center;
    background-size: cover;

    @media ${device.desktop} {
        height: 500px;
    }
`

export const Title = styled.div `
`

export const Description = styled.div `
    
`

export const Ingredients = styled.div `
    ul {
        list-style: inside;
    }
` 

export const Steps = styled.div `
    ul {
        list-style: none;
    }

    li:not(:last-child) {
        margin-bottom: 20px;
    }

` 