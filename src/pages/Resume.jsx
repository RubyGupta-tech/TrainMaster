import React from 'react';
import { Download, ExternalLink, Github, FolderGit2 } from 'lucide-react';
import './Resume.css';

const projects = [
    {
        id: 1,
        name: 'Agile-Board-Sync',
        desc: 'An automated CLI tool to sync Jira tickets to Trello boards for offline tracking.',
        tech: ['Node.js', 'Jira API', 'Trello API'],
        link: '#'
    },
    {
        id: 2,
        name: 'Project-Risk-Analyzer',
        desc: 'A Python-based script to analyze Monte Carlo simulations for project risks.',
        tech: ['Python', 'Pandas', 'Matplotlib'],
        link: '#'
    },
    {
        id: 3,
        name: 'TrainMaster-Portfolio',
        desc: 'This very portfolio application built to showcase PM training.',
        tech: ['React', 'Vite', 'Lucide'],
        link: '#'
    }
];

const Resume = () => {
    return (
        <div className="resume-page">
            <div className="resume-header text-center mb-4">
                <h1 className="mb-2">My <span className="text-accent">Experience</span></h1>
                <p className="text-muted">A blend of hands-on project management and technical proficiency.</p>
                <a href="/resume.pdf" download="My_Resume.pdf" className="btn-primary mt-4" style={{ textDecoration: 'none' }}>
                    <Download size={18} /> Download Full PDF Resume
                </a>
            </div>

            <div className="resume-grid">
                {/* Experience Timeline */}
                <div className="experience-section glass-panel">
                    <h2 className="mb-4 text-gradient">Professional Journey</h2>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h3>Senior Agile Coach</h3>
                        <span className="text-accent text-sm">TechCorp Inc. | 2020 - Present</span>
                        <p className="text-muted mt-2">Spearheaded the Agile transformation for a 500-person engineering department, improving delivery speeds by 30%.</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h3>Project Manager</h3>
                        <span className="text-accent text-sm">Innovate Solutions | 2016 - 2020</span>
                        <p className="text-muted mt-2">Managed $5M+ software implementation projects from inception to enterprise deployment.</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h3>Scrum Master</h3>
                        <span className="text-accent text-sm">StartUp X | 2013 - 2016</span>
                        <p className="text-muted mt-2">Facilitated daily standups, sprint planning, and retrospectives for 3 cross-functional teams.</p>
                    </div>
                </div>

                {/* GitHub Showcase */}
                <div className="github-section glass-panel">
                    <h2 className="mb-4 text-gradient" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Github size={28} /> GitHub Projects
                    </h2>
                    <p className="text-muted mb-4">Technical tools and scripts I've built to streamline project management.</p>

                    <div className="projects-grid">
                        {projects.map(proj => (
                            <div key={proj.id} className="project-card glass-panel">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FolderGit2 className="text-accent" size={24} />
                                    <a href={proj.link} className="text-muted" aria-label="View Project"><ExternalLink size={20} /></a>
                                </div>
                                <h3 className="mt-2 mb-2">{proj.name}</h3>
                                <p className="text-muted text-sm mb-4">{proj.desc}</p>
                                <div className="tech-stack">
                                    {proj.tech.map((t, i) => (
                                        <span key={i} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#" className="btn-outline w-100 mt-4" style={{ display: 'flex' }}>
                        View All on GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
