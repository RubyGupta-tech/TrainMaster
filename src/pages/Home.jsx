import React from 'react';
import { ArrowRight, Download, Award, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';
import './Home.css';

const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay-bg">
                    <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
                        alt="Hero Background" 
                        className="hero-img"
                    />
                </div>
                
                <motion.div
                    className="hero-content"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Elevating Teams &<br />
                        <span className="text-accent">Careers</span> through Expert<br />
                        <span className="text-gradient">Project Management</span>
                    </motion.h1>
                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        Professional training, masterclasses, and proven project execution strategies to help individuals and organizations thrive in competitive markets.
                    </motion.p>
                    <motion.div className="hero-actions" variants={itemVariants}>
                        <Link to="/courses" className="btn-primary">
                            Explore Courses <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn-outline">
                            Consultation
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
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
                        className="about-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=688" 
                            alt="Professional Project Manager" 
                            className="about-img"
                        />
                        <div className="image-accent-glow"></div>
                    </motion.div>
                    
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>About <span className="text-gradient">Me</span></h2>
                        <p className="text-muted mb-4">
                            I specialize in bridging the gap between strategic vision and flawless execution. My focus is on empowering professionals and organizations through practical, hands-on training via Zoom, Google Meet, and on-site masterclasses.
                        </p>
                        <div className="about-stats mb-4">
                            <motion.div
                                className="stat-card glass-panel"
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Target size={28} className="text-accent mb-2" />
                                <h3 className="text-gradient">50+</h3>
                                <p className="text-muted">Projects Delivered</p>
                            </motion.div>
                            <motion.div
                                className="stat-card glass-panel"
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Users size={28} className="text-accent mb-2" />
                                <h3 className="text-gradient">1000+</h3>
                                <p className="text-muted">Students Trained</p>
                            </motion.div>
                        </div>
                        <a href="/resume.pdf" download="My_Resume.pdf" className="btn-outline" style={{ textDecoration: 'none' }}>
                            <Download size={18} /> Download Resumé
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />
        </div>
    );
};

export default Home;
