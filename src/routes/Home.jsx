import { NavLink } from "react-router-dom";

function Home() {
    return (
        <main>
            <h1>Take a look at my Data Structure App</h1>
            <nav>
                <ul>
                    <li><NavLink to="/stack">Stack DS App</NavLink></li>

                    <li><NavLink to="/bubble">Bubble sort App</NavLink></li>
                    <li><NavLink to="/palindrome">Palindrome App</NavLink></li>
                </ul>
            </nav>
        </main>);
}

export default Home