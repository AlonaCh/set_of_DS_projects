import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li><NavLink to="/stack">Stack DS App</NavLink></li>
                    <li><NavLink to="/bubble">Bubble sort App</NavLink></li>
                    <li><NavLink to="/palindrome">Palindrome App</NavLink></li>
                </ul>
            </nav>
        </header>);
}

export default Header