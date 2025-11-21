import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

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
        github: null, // No github link in original
        demo: './projects/project_4.html', // Kept local link or update if needed
        description: 'Internship project visualizing locations of closest product offerings.'
    }
];

const Projects = () => {
    return (
        <div className="projects-page section">
            <div className="container">
                <motion.h1
                    className="title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Recent Projects
                </motion.h1>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Github">
                                                <Github size={24} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                                                <ExternalLink size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-actions">
                                    {project.github && (
                                        <button
                                            className="btn btn-sm"
                                            onClick={() => window.open(project.github, '_blank')}
                                        >
                                            Github
                                        </button>
                                    )}
                                    {project.demo && (
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => window.open(project.demo, '_blank')}
                                        >
                                            Demo
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
