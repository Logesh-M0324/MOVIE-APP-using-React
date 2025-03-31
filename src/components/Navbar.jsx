import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar futuristic-navbar">
            <div className="navbar-brand neon-text">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link futuristic-link">Home</Link>
                <Link to="/favourite" className="nav-link futuristic-link">Favourite</Link>
            </div>
        </nav>
    );
};

export default Navbar;
