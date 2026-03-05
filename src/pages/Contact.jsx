import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <motion.div
                className="contact-header text-center mb-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="mb-2">Let's <span className="text-gradient">Connect</span></h1>
                <p className="text-muted">Reach out for corporate training, private coaching, or freelance project management.</p>
            </motion.div>

            <div className="contact-container">
                <motion.div
                    className="contact-info glass-panel"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="mb-4">Contact Information</h2>
                    <div className="info-item mb-4">
                        <Mail className="text-accent" size={24} />
                        <div>
                            <h3>Email</h3>
                            <p className="text-muted">hello@pmportfolio.com</p>
                        </div>
                    </div>
                    <div className="info-item mb-4">
                        <Phone className="text-accent" size={24} />
                        <div>
                            <h3>Phone/WhatsApp</h3>
                            <p className="text-muted">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="info-item mb-4">
                        <MapPin className="text-accent" size={24} />
                        <div>
                            <h3>Location</h3>
                            <p className="text-muted">Available Worldwide for Remote.<br />On-site across North America.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <form className="contact-form glass-panel" action="https://formsubmit.co/hello@pmportfolio.com" method="POST">
                        <h2 className="mb-4">Send a Message</h2>
                        <div className="form-group mb-4">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder="John Doe" required />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="john@company.com" required />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="subject">Inquiry Type</label>
                            <select id="subject" name="_subject" className="form-control">
                                <option>Corporate Training</option>
                                <option>Private Coaching</option>
                                <option>Project Management Consulting</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" className="form-control" placeholder="Tell me about your team or project needs..." required></textarea>
                        </div>
                        {/* FormSubmit config */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value={window.location.origin + "/contact"} />

                        <button type="submit" className="btn-primary w-100">
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
