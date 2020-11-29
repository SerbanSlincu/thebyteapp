import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-head">
            <nav>
                <h1 id="logo"><Link to="/">The Byte App</Link></h1>
                <ul>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
