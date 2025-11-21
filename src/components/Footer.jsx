import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/kalebshah" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/kalebshah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:kalebshah@yahoo.com" aria-label="Email">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="copyright">
                    Copyright &#169; {new Date().getFullYear()} Kaleb Shah. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
