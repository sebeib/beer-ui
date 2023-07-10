import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.div `
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @media ${device.desktop} {
        justify-content: space-between;
        flex-direction: row;
    }
`

export const Left = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    img {
        height: 100px;
    }
`

export const Right = styled.div `
    @media ${device.desktop} {
        padding-right: 100px;
    }
`