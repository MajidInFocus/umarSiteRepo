import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const blogPosts = [
    {
      id: 1,
      title: "My Journey from Refugee to Student",
      excerpt: "Sharing the challenges and triumphs of transitioning from refugee status to pursuing higher education in Civil Engineering.",
      category: "Journey",
      date: "2023-12-15",
      readTime: "5 min read",
      image: "/images/blog-1.jpg"
    },
    {
      id: 2,
      title: "Building Community Through Content",
      excerpt: "How creating content on YouTube and social media has helped me connect with others and build a supportive community.",
      category: "Community",
      date: "2023-12-10",
      readTime: "3 min read",
      image: "/images/blog-2.jpg"
    },
    {
      id: 3,
      title: "Finding Strength in Education",
      excerpt: "The transformative power of education and how scholarships like RSSP are changing lives.",
      category: "Inspiration",
      date: "2023-12-05",
      readTime: "4 min read",
      image: "/images/blog-3.jpg"
    },
    {
      id: 4,
      title: "Daily Routines of a Student",
      excerpt: "A glimpse into my daily life as an engineering student, balancing studies, content creation, and community work.",
      category: "Daily Life",
      date: "2023-12-01",
      readTime: "2 min read",
      image: "/images/blog-4.jpg"
    }
  ];

  const categories = ['All', 'Journey', 'Inspiration', 'Community', 'Daily Life'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="blog">
      <div className="container">
        <h1>My Blog</h1>
        <p className="blog-intro">
          Welcome to my blog where I share stories, insights, and daily experiences. 
          Join me on this journey of growth, learning, and community building.
        </p>

        <div className="blog-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                  onError={(e) => {
                    e.target.src = '/images/blog-placeholder.jpg';
                  }}
                />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <a href={`#blog-${post.id}`} className="read-more">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
