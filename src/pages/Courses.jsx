import React, { useState } from 'react';
import { Video, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';
import './Courses.css';

const coursesData = [
    {
        id: 1,
        type: 'online',
        title: 'Agile & Scrum Mastery (Online)',
        description: 'A comprehensive 4-week bootcamp delivered via remote Zoom sessions. Perfect for aspiring Scrum Masters.',
        duration: '4 Weeks',
        features: ['Live Interactive Sessions', 'Real-world Case Studies', 'Certification Prep', 'Access to Recordings'],
        icon: <Video size={24} className="text-accent" />
    },
    {
        id: 2,
        type: 'online',
        title: 'Project Management Fundamentals',
        description: 'Learn the core principles of PMBOK in this intensive 2-week Google Meet masterclass.',
        duration: '2 Weeks',
        features: ['Interactive Meetups', 'Downloadable Resources', 'Q&A Sessions', 'Certificate of Completion'],
        icon: <Video size={24} className="text-accent" />
    },
    {
        id: 3,
        type: 'offline',
        title: 'Corporate Leadership & Execution',
        description: 'On-site workshop designed for mid-level managers. Focuses on team alignment and delivery.',
        duration: '2 Days (Intensive)',
        features: ['In-person Collaboration', 'Hands-on Workshops', 'Networking', 'Custom Tailored Content'],
        icon: <MapPin size={24} className="text-accent" />
    },
    {
        id: 4,
        type: 'offline',
        title: 'Advanced Risk Management Seminar',
        description: 'A masterclass held at dedicated venues covering risk mitigation and crisis management.',
        duration: '1 Day',
        features: ['Expert Guest Speakers', 'Live Crisis Simulations', 'Catered Event', 'Networking Mixer'],
        icon: <MapPin size={24} className="text-accent" />
    }
];

const Courses = () => {
    const [filter, setFilter] = useState('all');

    const filteredCourses = filter === 'all'
        ? coursesData
        : coursesData.filter(c => c.type === filter);

    return (
        <div className="courses-page">
            <div className="courses-header text-center mb-4">
                <h1 className="mb-2">Training <span className="text-gradient">Masterclasses</span></h1>
                <p className="text-muted">Explore my expert-led courses available both online and in-person.</p>
            </div>

            <div className="filter-controls glass-panel mb-4">
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
            </div>

            <div className="courses-grid">
                {filteredCourses.map(course => (
                    <div key={course.id} className="course-card glass-panel">
                        <div className="course-card-header mb-2">
                            <div className="course-icon">{course.icon}</div>
                            <span className="course-badge">{course.type === 'online' ? 'Virtual' : 'In-Person'}</span>
                        </div>
                        <h3 className="mb-2">{course.title}</h3>
                        <p className="text-muted mb-4">{course.description}</p>

                        <div className="course-meta mb-4 text-muted">
                            <span className="meta-item"><Clock size={16} /> {course.duration}</span>
                            <span className="meta-item"><Calendar size={16} /> Next: TBA</span>
                        </div>

                        <ul className="course-features mb-4 text-muted">
                            {course.features.map((feat, idx) => (
                                <li key={idx}><CheckCircle size={14} className="text-accent" /> {feat}</li>
                            ))}
                        </ul>

                        <button className="btn-primary w-100">Reserve Spot</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
