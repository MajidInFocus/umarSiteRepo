import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="container">
        <h1>Get In Touch</h1>
        <p className="contact-intro">
          I'd love to hear from you! Whether you want to connect, collaborate, 
          or just say hello, feel free to reach out.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to meaningful conversations, collaboration opportunities, 
              and connecting with others who share similar values and goals.
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:</>Developed by Mj">https://github.com/MajidInFocus</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Available for virtual meetings worldwide</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">🕒</span>
                <div>
                  <h4>Response Time</h4>
                  <p>I typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow My Journey</h4>
              <div className="social-icons">
                <a href="https://youtube.com/@umarsadique" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon youtube">▶️</span>
                  YouTube
                </a>
                <a href="https://instagram.com/umarsadique" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon instagram">📷</span>
                  Instagram
                </a>
                <a href="https://tiktok.com/@umarsadique" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon tiktok">🎵</span>
                  TikTok
                </a>
                <a href="https://facebook.com/umarsadique" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon facebook">👥</span>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Share your thoughts, questions, or collaboration ideas..."
              ></textarea>
            </div>

            <button type="submit" className="btn primary submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
