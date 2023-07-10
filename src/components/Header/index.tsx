import { Container } from "./styles";
import { Navigation } from "../Navigation";
import { Left, Right } from "./styles";
import { Protected } from "../Protected";
import { useState, useEffect } from "react";
import { useUser } from "../../backendClient";

type UserInfo = {
    name : string
}

export function Header() {
    const data = useUser()
    let user : UserInfo = data[0] as unknown as UserInfo    

    return <Container>
                <Left>
                    <img src="/logo.png" alt="logo"/>
                    <span>Hallo <b>{user?.name}</b>!</span>
                </Left>
                <Right>
                    <Navigation/>
                </Right>
            </Container>
}