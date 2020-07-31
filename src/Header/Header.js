import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="Header">
            <h1>
                {/* Link in case we'd like to make the App bigger 
                and need to nav back to Home */}
                <Link to="/">Star Wars Search</Link>
            </h1>
        </header>
    );
}