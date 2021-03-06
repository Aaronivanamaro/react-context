import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"


const Navbar = () => {
    const { themeStyles } = useContext(ThemeContext)
    return (
        <nav style={themeStyles}>
            <h1>Bookstore</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar