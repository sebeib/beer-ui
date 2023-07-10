import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Container, GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import {
    Routes,
    Route,
    BrowserRouter as Router
  } from "react-router-dom";

import "./App.css"
import { Protected } from "./components/Protected";
import ErrorBoundary from "./components/ReactErrorBoundary";

export function App() {
    const userId = localStorage.getItem("userId")
    
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle></GlobalStyle>
            <Container>
                <Router>
                    <ErrorBoundary>
                        <Protected element={
                            <>
                                <Header/>
                                <Content user_id={userId!}/>
                            </>
                        }/>                
                    </ErrorBoundary>
                </Router>
            </Container>
        </ThemeProvider>
    );
}