import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    img {
        width: 50%;
        max-width: 800px;
    }

    @media ${device.desktop} {
        gap: 80px;
    }
`

export const UserCard = styled.div `
    display: flex;
    flex-direction: row;

    height: 50px;
    width: 80%;
    
    max-width: 800px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    @media ${device.desktop} {
        width: 50%;
        height: 100px;
    }

    :hover {
        cursor: pointer;
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 ${props => props.theme['highlight-purple']};
    }
`

export const UserPicture = styled.div `
    overflow: hidden;
    background-position: center;
    background-size: cover;


    flex-grow: 1;
`

export const UserName = styled.div `
    align-self: center;
    padding-left: 10px;
    font-size: 1.5;

    flex-grow: 2;

    @media ${device.desktop} {
        font-size: 1.8em;
        font-weight: bold;
    }
`