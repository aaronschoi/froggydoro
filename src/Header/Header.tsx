import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="header-container">
            <Link className="header-link header-link-main" to="/">Froggy Doro</Link>
            <Link className="header-link header-link-sub" to="/Form">Set the Timer</Link>
        </nav>
    )
}