import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
    padding: 10px;
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    a, a:visited {
        text-decoration: none;
    }

    a {
        padding: 5px 10px 5px 10px;
        border-radius:10px;

        font-size: 1.1em;
        
        transition: ease-in-out 0.5s;
    }

    a:hover {

        transition: ease-in-out 0.2s;
        
        background-color: ${props => props.theme['highlight-purple']};

        border-color: white;
    }
`