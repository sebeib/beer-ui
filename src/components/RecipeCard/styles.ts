import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div `
    background-color: white;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    transition: ease-in-out 0.1s;

    :hover {
        scale: 1.02;
        transition: ease-in-out 0.1s;
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 ${props => props.theme['highlight-purple']};
    }
`

export const Image = styled.div `
    height: 200px;
    width: 100%;
    overflow: hidden;
    background-position: center;
    background-size: cover;
`



export const Title = styled.div `
    padding: 5px;
    font-size: 1.2em;
    font-weight: bold;
`

export const Description = styled.div `
    padding: 0 5px 5px 5px;
`

export const StyledLink = styled(Link) `
    text-decoration: none;

    :visited {
        text-decoration: none;
    }
`