'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={(e) => scrollToSection(e, 'hero')}>
                    NH
                </div>
                <ul className={styles.navLinks}>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                    <li><a href="#publications" onClick={(e) => scrollToSection(e, 'publications')}>Publications</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
