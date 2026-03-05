import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ marginTop: '4rem', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                    <a href="#" aria-label="LinkedIn" className="text-muted"><Linkedin size={24} /></a>
                    <a href="#" aria-label="GitHub" className="text-muted"><Github size={24} /></a>
                    <a href="#" aria-label="Email" className="text-muted"><Mail size={24} /></a>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>
                    &copy; {new Date().getFullYear()} Project Management Portfolio. Elevated by Modern Design.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
