import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem';
import './style.css';

function Header(){
    return (
        <header className="Portfolio-header">
            <nav className="Portfolio-header-logoBar navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/" >
                    Eduardo Sánchez Villafán's portfolio
                </Link>
            </nav>
            <nav className="Portfolio-header-menuBar navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <NavItem routes={['/about', '/']} text="About" />
                    <NavItem routes={['/portfolio']} text="Portfolio" />
                    <NavItem routes={['/contact']} text="Contact" />
                </ul>
            </nav>
        </header>
    );
}

export default Header;