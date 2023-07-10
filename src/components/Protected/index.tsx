import { Login } from "../../pages/Login";
import { useState } from "react";
import { LoadingPage } from "../../pages/LoadingPage";
import { useEffect } from "react";
import { ErrorPage } from "../../pages/ErrorPage";

type Params = {
    element : React.ReactElement
}

enum LoginState {
    LOGGED_IN,
    NOT_LOGGED_IN,
    PENDING,
    ERROR
}

export function Protected (props : Params) : React.ReactElement {
    const [loginState, setLoginState] = useState<LoginState>(LoginState.PENDING)

    const data = useEffect(() => {
        const request = {
            method : 'GET',
            headers: { 'TOKEN': localStorage.getItem("TOKEN")! }
        }
        console.log("fetchi fetchi")
        fetch('http://localhost:8080/user/session', request)
        .then(response => {
            if(response.ok) return response.json()
            else throw new Error("placeholder")
        })
        .then(session => {
            if(session.active) setLoginState( LoginState.LOGGED_IN )
            else setLoginState( LoginState.NOT_LOGGED_IN )
        })
        .catch((error) => {
            setLoginState( LoginState.ERROR )
        })
    }, [loginState])

    switch(loginState) {
        case LoginState.LOGGED_IN:
            return props.element
        case LoginState.NOT_LOGGED_IN:
            return <Login />
        case LoginState.PENDING:
            return <LoadingPage />
        case LoginState.ERROR:
            return <ErrorPage />
    }

}