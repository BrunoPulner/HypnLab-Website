import React, { useState, useEffect } from 'react';
import './css/Header.css';
import logoimg from '../img/Logo/logohorifundoescuro.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'ourteam'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Controla o overflow do corpo quando o menu está aberto ou fechado
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]); // Dependência para acionar a mudança sempre que o estado isMenuOpen for alterado

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="header">
      <div className="header-content">
        <img src={logoimg} alt="Logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
              <a href="#home">Home</a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
              <a href="#about">About Us</a>
            </li>
            <li className={activeSection === 'ourteam' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
              <a href="#ourteam">Our Team</a>
            </li>
            <div className='button-contact' onClick={() => setIsMenuOpen(false)}>
              <a href="mailto:HypnLab@gmail.com" className="email-link">
                Contact Us
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Header;
