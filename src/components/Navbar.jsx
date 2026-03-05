import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase, GraduationCap, FileText, Mail, Moon, Sun, BookOpen } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const getLinkClass = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <nav className="navbar glass-panel">
            <div className="container nav-container">
                <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
                    <span className="text-accent">PM</span><span className="text-gradient">Portfolio</span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={isOpen ? 'nav-menu active glass-panel' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className={getLinkClass('/')} onClick={toggleMenu}>
                            <Briefcase size={18} className="nav-icon" /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses" className={getLinkClass('/courses')} onClick={toggleMenu}>
                            <GraduationCap size={18} className="nav-icon" /> Courses
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className={getLinkClass('/resume')} onClick={toggleMenu}>
                            <FileText size={18} className="nav-icon" /> Resume / GitHub
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={getLinkClass('/contact')} onClick={toggleMenu}>
                            <Mail size={18} className="nav-icon" /> Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/insights" className={getLinkClass('/insights')} onClick={toggleMenu}>
                            <BookOpen size={18} className="nav-icon" /> Insights
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginLeft: '1rem' }}>
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
