import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import './Blog.css';

const blogPosts = [
    {
        id: 1,
        title: 'The Real Difference Between Agile and Scrum',
        excerpt: 'Many teams confuse Agile philosophy with the Scrum framework. Here is how keeping them distinct can save your next software project.',
        date: 'March 15, 2026',
        category: 'Methodology'
    },
    {
        id: 2,
        title: 'Top 5 Monte Carlo Simulation Mistakes in PM',
        excerpt: 'Risk analysis is crucial, but garbage-in equals garbage-out when running Monte Carlo simulations. Avoid these common data anti-patterns.',
        date: 'February 28, 2026',
        category: 'Risk Management'
    },
    {
        id: 3,
        title: 'Scaling Remote Team Communication Asynchronously',
        excerpt: 'Zoom fatigue is real. How to transition your delivery teams to an async-first culture while still hitting every sprint goal.',
        date: 'January 10, 2026',
        category: 'Leadership'
    }
];

const Blog = () => {
    return (
        <div className="blog-page">
            <motion.div
                className="blog-header text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="mb-2">Insights & <span className="text-gradient">Articles</span></h1>
                <p className="text-muted">Thoughts on Agile, Leadership, and building resilient projects.</p>
            </motion.div>

            <div className="blog-grid">
                {blogPosts.map((post, idx) => (
                    <motion.div
                        key={post.id}
                        className="blog-card glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                    >
                        <div className="blog-meta text-muted mb-2">
                            <span className="blog-category"><BookOpen size={14} /> {post.category}</span>
                            <span className="blog-date"><Calendar size={14} /> {post.date}</span>
                        </div>
                        <h3 className="blog-title mb-2">{post.title}</h3>
                        <p className="text-muted mb-4">{post.excerpt}</p>
                        <a href="#" className="read-more text-accent">
                            Read Article <ArrowRight size={16} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
