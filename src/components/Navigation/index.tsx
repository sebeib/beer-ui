
import { Container } from './styles'
import { faHouse, faKey } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

export function Navigation() {
    return  <Container>
                <Link to="/"><FontAwesomeIcon icon={faHouse}/>  Home</Link>
                <Link onClick={handleLogout} to="/"><FontAwesomeIcon icon={faKey}/>  Logout</Link>
            </Container>
}

export const handleLogout = async () => {
    const request = {
        method : 'GET',
        headers: { 'TOKEN': localStorage.getItem("TOKEN")! }
    }

    const response = await fetch('http://localhost:8080/user/logout', request)
    localStorage.clear()
    window.location.reload() // not pretty
}