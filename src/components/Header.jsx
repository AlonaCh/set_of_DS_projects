import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1></h1>
            <nav>
                <div className='navLinkGroup'>
                    <p><NavLink className="nameApp" to="/">Data Structure App</NavLink></p>
                    <ul className='liContainer'>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li><NavLink to="/stack">Stack DS App</NavLink></li>
                        <li><NavLink to="/bubble">Bubble sort App</NavLink></li>
                        <li><NavLink to="/palindrome">Palindrome App</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>);
}

export default Header