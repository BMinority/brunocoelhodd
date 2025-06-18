import React, { useState } from 'react';
import '../css/Nav.css';
import Logo from "../../assets/logo_branco_bcoelho.svg";
import ImgPerfil from "../../assets/perfil/foto-de-perfil.png";


function Nav({ onNavigate }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (section) => {
        onNavigate(section);
        setMenuOpen(false);
    };

    return (
        <>
            <div className='bc-nav-toggle' onClick={() => setMenuOpen(!menuOpen)}>
                <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>
            <aside className={`bc-nav-container ${menuOpen ? 'open' : ''}`}>

                <nav className='bc-nav'>
                    <div className='bc-nav-user'>
                        <div className='bc-nav-user-image'>
                            <img src={ImgPerfil} alt="Imagem de Bruno Coelho" />
                        </div>
                        <div className='bc-nav-title' id='bc-nav-title'>
                            <p>Bruno Coelho</p>
                            <h1>Designer gráfico e
                                Desenvolvedor web
                            </h1>
                        </div>

                    </div>

                    <ul className='bc-nav-links'>
                        <li onClick={() => handleNavigation('home')}>Início</li>
                        <li onClick={() => handleNavigation('galery')}>Galeria</li>
                        <li onClick={() => handleNavigation('projects')}>Projetos</li>
                        <li onClick={() => handleNavigation('contact')}>Contato</li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Nav;
