import { useEffect } from "react"
import { useState } from "react"

export const useSession = (token : string | null, dependencies : Array<boolean>) => {
    const [result, setResult] = useState<string>("")

    useEffect(() => {
        const request = {
            method : 'GET',
            headers: { 'TOKEN': token == null ? "placeholder" : token }
        }
    
        fetch('http://localhost:8080/user/session', request)
        .then(response => {
            if(response.ok) return response.text()
            else return ""
        })
        .then(data => setResult(data))
    }, [dependencies])

    return result;
}

export const useUser = ()  => {
    const [result, setResult] = useState()

    useEffect(() => {
        const request = {
            method : 'GET',
            headers: { 'TOKEN': localStorage.getItem("TOKEN")! }
        }
    
        fetch('http://localhost:8080/user', request)
        .then(response => {
            if(response.ok) return response.json()
            else throw new Error("fehler")
        })
        .then(data => setResult(data))
        .catch((error) => {
            console.error("irgendwas ist passeirt")
        })
    }, [])

    return [result];
}



export const handleLogin = async () => {
    const request = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify({ "username" : "Sebastian", "passphrase" : "1234" })
    }

    const response = await fetch('http://localhost:8080/user/login', request)

    if(response.ok) {
        const session = await response.text()
        localStorage.setItem('TOKEN', session)
        window.location.reload()  // not pretty
    } else {
        alert("alles scheiße")
    }
}