import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 2rem;
    padding: 6px;

    @media ${device.desktop} {
        grid-template-columns: repeat(3,1fr);
    }
`