import React, { Component } from 'react';
import './About.css';
import paridhiPhoto from './assets/paridhi.png';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: ['Python', 'SQL', 'JavaScript/TypeScript', 'React', 'Power BI', 'Tableau', 'PyTorch', 'AWS', 'Git', 'MongoDB', 'Streamlit', 'Pandas']
    };
  }

  render() {
    return (
      <div className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src={paridhiPhoto} alt="Paridhi" className="about-photo" />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I'm a Senior pursuing my B.S. in Data Science (Computing Option) with a Business minor in Accounting and Finance at NJIT, and part of the BS-MS program where I'll earn my M.S. in Artificial Intelligence by 2027. Dean's List since 2022 and NJIT Academic Excellence Scholarship recipient.
            </p>
            <p className="about-description">
              I'm passionate about the intersection of data, technology, and finance — leveraging analytics to drive smarter, more efficient business decisions. As a Financial Data Analyst Intern with the New Jersey Courts, I've built dashboards, reconciled large transactional datasets, and streamlined operations through data-driven insights.
            </p>
            <p className="about-description">
              Beyond finance, I've led AI and data engineering projects — from NLP chatbots and RAG pipelines to ML forecasting — and I enjoy turning complex data into actionable intelligence. I'm excited about opportunities in data analytics, financial analytics, business intelligence, and data engineering. Feel free to browse my portfolio and get in touch.
            </p>
            <div className="about-skills">
              <h3 className="about-skills-title">Skills & Technology</h3>
              <div className="about-skills-list">
                {this.state.skills.map((skill, index) => (
                  <span key={index} className="about-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
