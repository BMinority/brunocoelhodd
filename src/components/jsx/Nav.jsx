import React, { useState } from 'react';
import '../css/Nav.css';
import Logo from "../../assets/logo_branco_bcoelho.svg";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='bc-nav-container'>
            <nav className='bc-nav'>
                <div className='bc-nav-logo'>
                    <img src={Logo} alt="Logo" />
                    <h1 className='bc-logo-text'>Bruno Coelho</h1>
                </div>
                <ul className={`bc-nav-links ${menuOpen ? 'bc-nav-links-mobile active' : ''}`}>
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Início</a></li>
                    <li><a href="#galery" onClick={() => setMenuOpen(false)}>Galeria</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a></li>
                </ul>
                <div className='bc-nav-toggle' onClick={toggleMenu}>
                    <i className={`fa-solid fa-bars ${menuOpen ? 'hidden' : ''}`}></i>
                    <i className={`fa-solid fa-xmark ${menuOpen ? '' : 'hidden'}`}></i>
                </div>
            </nav>
        </div>
    );
}

export default Nav;