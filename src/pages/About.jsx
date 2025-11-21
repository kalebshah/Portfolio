import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Code, Database, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page section">
            <div className="container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="title">About Me</h1>
                    <p className="about-subtitle">My journey, education, and experience.</p>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/assets/about-pic-kaleb-new.jpg" alt="Kaleb Shah" className="about-image" />
                    </motion.div>

                    <div className="about-text-content">
                        <motion.div
                            className="bio-section"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2>Who I Am</h2>
                            <p>
                                Hi, I'm Kaleb Shah. I have a strong foundation in computer science and data science, with
                                practical experience in Ruby on Rails, Python, R and other data and software
                                related technologies. My work spans through full-stack development, machine learning
                                and data visualizations. I'm keen on applying tech to answer real-world questions using
                                data.
                            </p>
                        </motion.div>

                        <motion.div
                            className="skills-section"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2>Expertise</h2>
                            <div className="skills-list">
                                <div className="skill-item">
                                    <Code size={20} />
                                    <span>Frontend: React, HTML, CSS, JS</span>
                                </div>
                                <div className="skill-item">
                                    <Terminal size={20} />
                                    <span>Backend: Node.js, Rails, SpringBoot, AWS</span>
                                </div>
                                <div className="skill-item">
                                    <Database size={20} />
                                    <span>Data: Python, R, SQL, ML</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="timeline-section">
                    <motion.div
                        className="about-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="section-header-icon">
                            <Briefcase size={28} />
                            <h2>Experience</h2>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-date">Present</div>
                                <div className="timeline-content">
                                    <h3>Application Engineer</h3>
                                    <h4>Vanguard Investment Group</h4>
                                    <p>Working with AWS and SpringBoot Services to build robust financial applications.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">Previous</div>
                                <div className="timeline-content">
                                    <h3>Junior Software Engineer</h3>
                                    <h4>Merchants Bonding Company</h4>
                                    <p>Full Stack Development, contributing to core business applications.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="section-header-icon">
                            <BookOpen size={28} />
                            <h2>Education</h2>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-date">Ongoing</div>
                                <div className="timeline-content">
                                    <h3>M.S. Computer Science</h3>
                                    <h4>Georgia Institute of Technology</h4>
                                    <p>Specialization in Machine Learning</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">Graduated</div>
                                <div className="timeline-content">
                                    <h3>B.A. Computer Science, Economics, Statistics</h3>
                                    <h4>Grinnell College</h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
