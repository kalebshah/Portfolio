import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Home.css';

// Re-using projects data here or import it if it was in a separate file. 
// For now, defining it here to ensure it works immediately.
const projectsData = [
    {
        id: 1,
        title: 'Exploring Segregation in NYC',
        image: '/assets/project-1-kaleb.png',
        github: 'https://github.com/kalebshah/New-York-Segregation-Explorer',
        demo: 'https://2q1xt4-kalebshah.shinyapps.io/Segregation_in_NYC/',
        description: 'An interactive Shiny app exploring segregation patterns in New York City.'
    },
    {
        id: 2,
        title: 'NBA Shot Tracker',
        image: '/assets/project-2-kaleb.png',
        github: 'https://github.com/kalebshah/NBA_shot_tracker',
        demo: 'https://2q1xt4-kalebshah.shinyapps.io/NBA_Shot_Tracker/',
        description: 'Visualizing and tracking NBA player shot data.'
    },
    {
        id: 3,
        title: 'Learning Outcomes at Grinnell',
        image: '/assets/project-3-kaleb.png',
        github: 'https://github.com/CSC322-Grinnell/SP24-CTLA',
        demo: 'https://2q1xt4-kalebshah.shinyapps.io/CTLA_Educational_Outcomes/',
        description: 'Assessing educational outcomes and learning patterns at Grinnell College.'
    },
    {
        id: 4,
        title: 'Product Location Visualizer',
        image: '/assets/project-4-kaleb.png',
        github: null,
        demo: './projects/project_4.html',
        description: 'Internship project visualizing locations of closest product offerings.'
    }
];

const Home = () => {
    const navigate = useNavigate();
    const projectScrollRef = useRef(null);
    const blogScrollRef = useRef(null);
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const { current } = ref;
            const scrollAmount = 350; // Width of card + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section" ref={heroRef}>
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ y, opacity }}
                    >
                        <p className="greeting">Hello, I'm</p>
                        <h1 className="hero-title">Kaleb Shah</h1>
                        <h2 className="hero-subtitle">Software Engineer and Data Enthusiast</h2>
                        <p className="hero-description">
                            I'm a software engineer with a background in computer science, economics, and statistics,
                            currently pursuing an M.S. in Computer Science (Machine Learning) at Georgia Tech.
                            I enjoy building software that supports investing and financial decision-making.
                            <br /><br />
                            I'm especially interested in data science, machine learning, and financial technology.
                            Outside of work, I follow soccer, F1 racing, world politics, high fantasy novels,
                            and I rarely turn down a game of FIFA.
                        </p>

                        <div className="hero-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => window.open('/assets/Kaleb_Resume_public_2025.pdf')}
                            >
                                Download CV
                            </button>
                            <button
                                className="btn"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Contact Info
                            </button>
                        </div>

                        <div className="social-links">
                            <a href="https://linkedin.com/in/kalebshah" target="_blank" rel="noreferrer">
                                <Linkedin size={30} />
                            </a>
                            <a href="https://github.com/kalebshah" target="_blank" rel="noreferrer">
                                <Github size={30} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
                    >
                        <img src="/assets/profile-pic-kaleb-2.jpg" alt="Kaleb Shah" className="hero-image" />
                    </motion.div>
                </div>

                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ opacity }}
                >
                    <ArrowDown size={30} />
                </motion.div>
            </section>

            {/* Projects Carousel */}
            <section className="section projects-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="title">Recent Projects</h2>
                        <div className="scroll-controls">
                            <button onClick={() => scroll(projectScrollRef, 'left')}><ChevronLeft /></button>
                            <button onClick={() => scroll(projectScrollRef, 'right')}><ChevronRight /></button>
                        </div>
                    </motion.div>

                    <div className="carousel-container" ref={projectScrollRef}>
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="carousel-card project-card-mini"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={project.image} alt={project.title} className="card-img" />
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="card-actions">
                                        {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>}
                                        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Carousel */}
            <section className="section blog-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="title">Latest Thoughts</h2>
                        <div className="scroll-controls">
                            <button onClick={() => scroll(blogScrollRef, 'left')}><ChevronLeft /></button>
                            <button onClick={() => scroll(blogScrollRef, 'right')}><ChevronRight /></button>
                        </div>
                    </motion.div>

                    <div className="carousel-container" ref={blogScrollRef}>
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="carousel-card blog-card-mini"
                                onClick={() => navigate(`/blog/${post.id}`)}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={post.image} alt={post.title} className="card-img" />
                                <div className="card-content">
                                    <span className="date">{post.date}</span>
                                    <h3>{post.title}</h3>
                                    <div className="tags">
                                        {post.tags.slice(0, 2).map(tag => <span key={tag} className="tag">{tag}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="section contact-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="title">Get In Touch</h2>
                    <p style={{ textAlign: 'center' }}>kalebshah@yahoo.com</p>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
