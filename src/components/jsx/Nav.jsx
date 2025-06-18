import React, { useState } from 'react';
import '../css/Nav.css';
import ImgPerfil from "../../assets/perfil/foto-de-perfil.png";
import Social from './Social';


function Nav({ onNavigate }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleNavigation = (section) => {
        onNavigate(section);
        setActiveSection(section);
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
                        <li className={activeSection === 'home' ? 'active' : ''}
                            onClick={() => handleNavigation('home')}>
                            <i class="fa-solid fa-house-chimney-user"></i> Início
                        </li>
                        <li className={activeSection === 'galery' ? 'active' : ''}
                            onClick={() => handleNavigation('galery')}>
                            <i class="fa-solid fa-image"></i> Galeria
                        </li>
                        <li className={activeSection === 'projects' ? 'active' : ''}
                            onClick={() => handleNavigation('projects')}>
                            <i class="fa-solid fa-globe"></i> Projetos
                        </li>
                        <li className={activeSection === 'contact' ? 'active' : ''}
                            onClick={() => handleNavigation('contact')}>
                            <i class="fa-solid fa-paper-plane"></i> Contato
                        </li>
                    </ul>

                    <Social />
                </nav>
            </aside>
        </>
    );
}

export default Nav;
