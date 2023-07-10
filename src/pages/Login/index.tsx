import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { Container, UserCard, UserPicture, UserName } from "./styles"
import { Content } from "../../components/Content"

export function Login() : React.ReactElement {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const handleLogin = async () => {
        const request = {
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify({ "username" : "Sebastian", "passphrase" : "1234" })
        }
    
        const response = await fetch('http://localhost:8080/user/login', request)
    
        if(response.ok) {
            const session = await response.text()
            localStorage.setItem('TOKEN', session)
            setLoggedIn(true)
        } else {
            alert("alles scheiße")
        }
    }

    const imageStyle = {
        backgroundImage: `url(/profile_placeholder.png) `
    }

    if(loggedIn) {
        window.location.reload()             // not pretty
        return <Navigate to = "/" replace /> // dummy
    } else {
        return <Container>
                    <img src="/logo.png" />
                    <UserCard onClick={handleLogin}>
                        <UserPicture style={imageStyle}></UserPicture>
                        <UserName><span>Sebastian</span></UserName>
                    </UserCard>
                </Container>
    }
}