import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="container section text-center">
                <h2>Post not found</h2>
                <button className="btn" onClick={() => navigate('/blog')}>Back to Blog</button>
            </div>
        );
    }

    return (
        <div className="blog-post-page section">
            <div className="container">
                <button className="back-btn" onClick={() => navigate('/blog')}>
                    <ArrowLeft size={20} /> Back to Blog
                </button>

                <motion.article
                    className="blog-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="post-header">
                        <div className="post-meta">
                            <span><Calendar size={16} /> {post.date}</span>
                            <span><Clock size={16} /> {post.readTime}</span>
                        </div>
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-tags">
                            {post.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="post-image-container">
                        <img src={post.image} alt={post.title} className="post-image" />
                    </div>

                    <div className="post-body">
                        {post.content.split('\n').map((paragraph, index) => (
                            paragraph.trim() && <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.article>
            </div>
        </div>
    );
};

export default BlogPost;
