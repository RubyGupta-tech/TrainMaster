import React from 'react';
import { ArrowRight, Download, Award, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Elevating Teams &<br />
                        <span className="text-accent">Careers</span> through Expert<br />
                        <span className="text-gradient">Project Management</span>
                    </h1>
                    <p className="hero-subtitle">
                        Professional training, masterclasses, and proven project execution strategies to help individuals and organizations thrive in competitive markets.
                    </p>
                    <div className="hero-actions">
                        <Link to="/courses" className="btn-primary">
                            Explore Courses <ArrowRight size={18} />
                        </Link>
                        <Link to="/resume" className="btn-outline">
                            View My Resume
                        </Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="glass-panel visual-card">
                        <div className="visual-badge"><Award size={32} className="text-accent" /></div>
                        <h3>Certified PMP Trainer</h3>
                        <p className="text-muted">Over 10 years of successfully delivering high-stakes projects.</p>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="about-section glass-panel">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p className="text-muted mb-4">
                            I specialize in bridging the gap between strategic vision and flawless execution. My focus is on empowering professionals and organizations through practical, hands-on training via Zoom, Google Meet, and on-site masterclasses.
                        </p>
                        <a href="/resume.pdf" download="My_Resume.pdf" className="btn-outline" style={{ textDecoration: 'none' }}>
                            <Download size={18} /> Download Resumé
                        </a>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card glass-panel">
                            <Target size={28} className="text-accent mb-2" />
                            <h3>50+</h3>
                            <p className="text-muted">Projects Delivered</p>
                        </div>
                        <div className="stat-card glass-panel">
                            <Users size={28} className="text-accent mb-2" />
                            <h3>1000+</h3>
                            <p className="text-muted">Students Trained</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
