import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "VP of Engineering, InnovateTech",
        quote: "The Agile transformation leadership provided was exceptional. Our delivery speed increased by 40% within just two quarters."
    },
    {
        id: 2,
        name: "Marcus Thorne",
        role: "Scrum Master Graduate",
        quote: "Her online masterclass was eye-opening. The practical, real-world examples bridging the gap between theory and execution made all the difference."
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Director of Operations, StartUpX",
        quote: "Incredible risk management seminar. The actionable templates and crisis simulations directly saved our Q3 product launch."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section glass-panel mt-5 mb-5 p-4">
            <div className="text-center mb-4">
                <h2 className="mb-2">What <span className="text-accent">Clients</span> Say</h2>
                <p className="text-muted">Trusted by industry leaders and ambitious professionals.</p>
            </div>

            <div className="testimonials-grid">
                {testimonialsData.map((t, idx) => (
                    <motion.div
                        key={t.id}
                        className="testimonial-card glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                        <Quote size={32} className="text-accent mb-3 opacity-50" />
                        <p className="testimonial-quote mb-4">"{t.quote}"</p>
                        <div className="testimonial-author">
                            <h4 className="mb-1">{t.name}</h4>
                            <span className="text-muted text-sm">{t.role}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
