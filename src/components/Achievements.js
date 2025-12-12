import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      year: "2023",
      title: "RSSP Scholarship Recipient",
      description: "Awarded the prestigious Regional Scholarship and Support Program scholarship for academic excellence.",
      category: "Education"
    },
    {
      id: 2,
      year: "2023",
      title: "YouTube Channel Milestone",
      description: "Reached significant subscriber milestone sharing refugee and student experiences.",
      category: "Content Creation"
    },
    {
      id: 3,
      year: "2022",
      title: "Community Leadership Award",
      description: "Recognized for outstanding community service and youth mentorship programs.",
      category: "Community"
    },
    {
      id: 4,
      year: "2022",
      title: "Engineering Program Admission",
      description: "Successfully enrolled in Civil Engineering program despite challenges.",
      category: "Education"
    }
  ];

  return (
    <section className="achievements">
      <div className="container">
        <h1>My Achievements</h1>
        <p className="achievements-intro">
          Every milestone represents a step forward in breaking barriers and building dreams. 
          These achievements reflect not just personal success, but the support of an amazing community.
        </p>
        
        <div className="achievements-timeline">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-item">
              <div className="achievement-year">{achievement.year}</div>
              <div className="achievement-content">
                <div className="achievement-category">{achievement.category}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="achievements-stats">
          <div className="stat">
            <h3>4+</h3>
            <p>Major Achievements</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>Lives Inspired</p>
          </div>
          <div className="stat">
            <h3>3+</h3>
            <p>Years of Content Creation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
