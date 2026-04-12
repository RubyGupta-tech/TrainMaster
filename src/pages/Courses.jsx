import React, { useState } from 'react';
import { Video, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Courses.css';

const coursesData = [
    {
        id: 1,
        type: 'online',
        title: 'Agile & Scrum Mastery (Online)',
        description: 'A comprehensive 4-week bootcamp delivered via remote Zoom sessions. Perfect for aspiring Scrum Masters.',
        duration: '4 Weeks',
        features: ['Live Interactive Sessions', 'Real-world Case Studies', 'Certification Prep', 'Access to Recordings'],
        icon: <Video size={24} />,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        type: 'online',
        title: 'Project Management Fundamentals',
        description: 'Learn the core principles of PMBOK in this intensive 2-week Google Meet masterclass.',
        duration: '2 Weeks',
        features: ['Interactive Meetups', 'Downloadable Resources', 'Q&A Sessions', 'Certificate of Completion'],
        icon: <Video size={24} />,
        image: 'https://images.unsplash.com/photo-1454165833767-027ffea70250?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        type: 'offline',
        title: 'Corporate Leadership & Execution',
        description: 'On-site workshop designed for mid-level managers. Focuses on team alignment and delivery.',
        duration: '2 Days (Intensive)',
        features: ['In-person Collaboration', 'Hands-on Workshops', 'Networking', 'Custom Tailored Content'],
        icon: <MapPin size={24} />,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        type: 'offline',
        title: 'Advanced Risk Management Seminar',
        description: 'A masterclass held at dedicated venues covering risk mitigation and crisis management.',
        duration: '1 Day',
        features: ['Expert Guest Speakers', 'Live Crisis Simulations', 'Catered Event', 'Networking Mixer'],
        icon: <MapPin size={24} />,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
];

const Courses = () => {
    const [filter, setFilter] = useState('all');

    const filteredCourses = filter === 'all'
        ? coursesData
        : coursesData.filter(c => c.type === filter);

    return (
        <div className="courses-page">
            <motion.div
                className="courses-header text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="mb-2">Training <span className="text-gradient">Masterclasses</span></h1>
                <p className="text-muted">Explore my expert-led courses available both online and in-person.</p>
            </motion.div>

            <motion.div
                className="filter-controls glass-panel mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <button
                    className={filter === 'all' ? 'btn-primary' : 'btn-outline'}
                    onClick={() => setFilter('all')}>
                    All Courses
                </button>
                <button
                    className={filter === 'online' ? 'btn-primary' : 'btn-outline'}
                    onClick={() => setFilter('online')}>
                    Online (Zoom/Meet)
                </button>
                <button
                    className={filter === 'offline' ? 'btn-primary' : 'btn-outline'}
                    onClick={() => setFilter('offline')}>
                    Offline / On-site
                </button>
            </motion.div>

            <motion.div layout className="courses-grid">
                <AnimatePresence>
                    {filteredCourses.map((course, idx) => (
                        <motion.div
                            key={course.id}
                            className="course-card glass-panel"
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="course-card-visual">
                                <img src={course.image} alt={course.title} className="course-img" />
                                <div className="course-card-overlay"></div>
                                <div className="course-badge">{course.type === 'online' ? 'Virtual' : 'In-Person'}</div>
                                <div className="course-icon">{course.icon}</div>
                            </div>
                            <div className="course-card-content">
                                <h3 className="mb-2">{course.title}</h3>
                                <p className="text-muted mb-4">{course.description}</p>

                            <div className="course-meta mb-4 text-muted">
                                <span className="meta-item"><Clock size={16} /> {course.duration}</span>
                                <span className="meta-item"><Calendar size={16} /> Next: TBA</span>
                            </div>

                            <ul className="course-features mb-4 text-muted">
                                {course.features.map((feat, i) => (
                                    <li key={i}><CheckCircle size={14} className="text-accent" /> {feat}</li>
                                ))}
                            </ul>

                            <button className="btn-primary w-100">Reserve Spot</button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Courses;
