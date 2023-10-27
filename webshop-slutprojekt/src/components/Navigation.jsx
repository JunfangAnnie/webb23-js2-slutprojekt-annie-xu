import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar">
            <div>
                <h1>
                    <Link to="/" className="logo">
                        ZooMinus
                    </Link>
                </h1>
            </div>

            <div className="nav-links">
                <ul>
                    <li>
                        <Link className="prod-link" to="/">Produkter</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="cart-link" to="/shopping-cart">Varukorg</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
  
export default Navigation;