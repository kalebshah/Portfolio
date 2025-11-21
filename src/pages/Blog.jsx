import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, Clock } from 'lucide-react';

import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
    const navigate = useNavigate();
    const [selectedTag, setSelectedTag] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTag && matchesSearch;
    });

    return (
        <div className="blog-page section">
            <div className="container">
                <motion.div
                    className="blog-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="title">My Blog</h1>
                    <p className="blog-subtitle">Thoughts, tutorials, and insights on tech.</p>
                </motion.div>

                <div className="blog-controls">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="tags-filter">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
                                onClick={() => setSelectedTag(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="blog-grid">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="blog-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            onClick={() => navigate(`/blog/${post.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="blog-card-content">
                                <div className="blog-meta">
                                    <span className="blog-date">
                                        <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                                    </span>
                                    <span className="blog-read-time">
                                        <Clock size={14} /> {post.readTime}
                                    </span>
                                </div>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-tags">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="blog-tag">
                                            <Tag size={12} /> {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="read-more-btn">Read More →</button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="no-results">
                        <p>No posts found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
