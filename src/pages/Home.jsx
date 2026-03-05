import React from 'react';
import { ArrowRight, Download, Award, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
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
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="glass-panel visual-card">
                        <div className="visual-badge"><Award size={32} className="text-accent" /></div>
                        <h3>Certified PMP Trainer</h3>
                        <p className="text-muted">Over 10 years of successfully delivering high-stakes projects.</p>
                    </div>
                </motion.div>
            </section>

            {/* About Me Section */}
            <section className="about-section glass-panel">
                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>About Me</h2>
                        <p className="text-muted mb-4">
                            I specialize in bridging the gap between strategic vision and flawless execution. My focus is on empowering professionals and organizations through practical, hands-on training via Zoom, Google Meet, and on-site masterclasses.
                        </p>
                        <a href="/resume.pdf" download="My_Resume.pdf" className="btn-outline" style={{ textDecoration: 'none' }}>
                            <Download size={18} /> Download Resumé
                        </a>
                    </motion.div>
                    <div className="about-stats">
                        <motion.div
                            className="stat-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Target size={28} className="text-accent mb-2" />
                            <h3>50+</h3>
                            <p className="text-muted">Projects Delivered</p>
                        </motion.div>
                        <motion.div
                            className="stat-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Users size={28} className="text-accent mb-2" />
                            <h3>1000+</h3>
                            <p className="text-muted">Students Trained</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />
        </div>
    );
};

export default Home;
