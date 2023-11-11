import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Container, GlobalStyle } from "./styles/global";

import "./App.css"
import { Discounts } from "./pages/Discounts";
import { Table } from "./components/Table";



export function App() {
    
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle></GlobalStyle>
            
            <Discounts/>

        </ThemeProvider>
    );
}