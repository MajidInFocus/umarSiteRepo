import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1>About Umar Sadique</h1>
        
        <div className="about-hero">
          <div className="about-image">
            <img 
              src="/images/profileImage.png" 
              alt="Umar Sadique"
              className="about-profile-image"
              loading="lazy"
              onError={(e) => {
                console.log('About image failed to load');
              }}
            />
          </div>
          
          <div className="about-intro">
            <h2>Breaking Barriers. Building Dreams.</h2>
            <p className="lead">
              My name is Umar Sadique Mohd Shafi, and my journey represents the power of 
              determination, education, and community support in overcoming life's greatest challenges.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="story-section">
            <h3>My Journey</h3>
            <p>
              Born into circumstances beyond my control, I began life as a refugee, facing 
              uncertainties that many cannot imagine. But within every challenge, I discovered 
              an opportunity to grow, learn, and inspire others facing similar struggles.
            </p>
            <p>
              Through the support of programs like the Regional Scholarship and Support Program (RSSP), 
              I've been able to pursue my dreams of becoming a Civil Engineer. Education became my 
              bridge from uncertainty to opportunity, from surviving to thriving.
            </p>
          </div>

          <div className="mission-section">
            <h3>My Mission</h3>
            <p>
              Today, as a Civil Engineering student, I'm not just building my future – I'm laying 
              the foundation for others to follow. Through content creation, community engagement, 
              and sharing my story, I aim to show that our circumstances don't define our potential.
            </p>
            <p>
              Whether through YouTube videos, social media, or direct community work, I believe 
              in the power of storytelling to create connection, understanding, and hope.
            </p>
          </div>

          <div className="values-section">
            <h3>What Drives Me</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>🎓 Education</h4>
                <p>Believing in education as the most powerful tool for transformation and empowerment.</p>
              </div>
              <div className="value-item">
                <h4>🤝 Community</h4>
                <p>Building bridges between communities and supporting others on their journey.</p>
              </div>
              <div className="value-item">
                <h4>💪 Resilience</h4>
                <p>Turning challenges into stepping stones and inspiring others to do the same.</p>
              </div>
              <div className="value-item">
                <h4>🎯 Purpose</h4>
                <p>Living with intention to create positive impact and meaningful change.</p>
              </div>
            </div>
          </div>

          <div className="future-section">
            <h3>Looking Forward</h3>
            <p>
              As I continue my studies in Civil Engineering, I'm excited about the possibilities 
              ahead. My goal is not just to build infrastructure, but to build a better future 
              for communities that need it most.
            </p>
            <p>
              Every day is an opportunity to break another barrier, to build another dream, 
              and to inspire someone else to believe in the power of their own potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
