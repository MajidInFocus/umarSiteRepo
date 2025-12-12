import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/background.png" 
            alt="Hero Background" 
            className="hero-bg-image"
            loading="eager"
            onError={(e) => {
              e.target.src = '/images/background2.0.png';
            }}
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="profile-photo-container">
            <img 
              src="/images/profileImage.png" 
              alt="Umar Sadique" 
              className="profile-photo"
              loading="lazy"
              onError={(e) => {
                console.log('Profile image failed to load');
              }}
            />
          </div>
          
          <h1 className="hero-name">Umar Sadique</h1>
          <p className="hero-tagline">Breaking barriers. Building dreams.</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Welcome to My Journey</h2>
            <p className="intro-text">
              I'm Umar Sadique Mohd Shafi, a passionate Civil Engineering student and content creator 
              dedicated to breaking barriers and building dreams. My journey from refugee to scholar 
              represents the power of determination, education, and community support.
            </p>
            <p className="intro-text">
              Through my story, I aim to inspire others facing challenges and demonstrate that 
              with perseverance and the right opportunities, anything is possible.
            </p>
            <div className="intro-cta">
              <Link to="/about" className="btn primary">Learn My Story</Link>
              <Link to="/blog" className="btn secondary">Read My Blog</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <div className="container">
          <h2>Explore</h2>
          <div className="links-grid">
            <Link to="/about" className="link-card">
              <h3>About Me</h3>
              <p>Discover my background, journey, and mission</p>
            </Link>
            <Link to="/achievements" className="link-card">
              <h3>Achievements</h3>
              <p>Educational milestones and community impact</p>
            </Link>
            <Link to="/blog" className="link-card">
              <h3>Blog</h3>
              <p>Stories, insights, and daily inspirations</p>
            </Link>
            <Link to="/contact" className="link-card">
              <h3>Connect</h3>
              <p>Get in touch and follow my social media</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
