import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo">
                            <span className="text-accent">PM</span><span className="text-gradient">Portfolio</span>
                        </Link>
                        <p className="footer-mission">
                            Empowering project managers and delivery teams with structured training and expert insights for high-impact execution.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Mail size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-title">Expertise</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Overview</Link></li>
                            <li><Link to="/courses">Training Catalog</Link></li>
                            <li><Link to="/insights">Resources</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-col">
                        <h4 className="footer-title">Connect</h4>
                        <ul className="footer-links">
                            <li><Link to="/contact">Contact Me</Link></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-col">
                        <h4 className="footer-title">Newsletter</h4>
                        <p className="footer-mission" style={{ marginBottom: '1rem' }}>
                            Get the latest insights on Agile and Delivery directly.
                        </p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Email Address" className="newsletter-input" />
                            <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', width: 'fit-content' }}>
                                Subscribe <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} TrainMaster Portfolio. All rights reserved.</p>
                    <p>Designed with Excellence & Efficiency</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
