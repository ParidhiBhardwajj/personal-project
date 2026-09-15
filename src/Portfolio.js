import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Revenue Forecasting Dashboard",
          description: "Business intelligence app for revenue forecasting and scenario analysis, with XGBoost/Prophet models, Plotly charts, and SQL-backed reporting.",
          technologies: ["Python", "Streamlit", "XGBoost", "Prophet", "Plotly"],
          source: "https://github.com/ParidhiBhardwajj/revenue-forecasting",
          demo: null
        },
        {
          title: "Student Performance Index",
          description: "Data mining pipeline that predicts exam scores and clusters students using regression models and K-Means on 6,600+ records.",
          technologies: ["Python", "scikit-learn", "pandas", "Jupyter"],
          source: "https://github.com/ParidhiBhardwajj/Student-Performance-Index",
          demo: null
        },
        {
          title: "MNIST Neural Network Analysis",
          description: "Compares shallow and deeper TensorFlow networks on MNIST, then analyzes misclassifications where the correct digit was the model's second choice.",
          technologies: ["TensorFlow", "Keras", "Python", "NumPy"],
          source: "https://github.com/ParidhiBhardwajj/Neural-Network-Architectures-and-Error--Analysis-on-MNIST",
          demo: null
        },
        {
          title: "Interactive Word Cloud",
          description: "React + D3 visualization that maps the most frequent words in pasted text, with animated size and position updates.",
          technologies: ["React", "D3.js", "JavaScript"],
          source: "https://github.com/ParidhiBhardwajj/word-cloud",
          demo: "https://paridhibhardwajj.github.io/word-cloud"
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h2 className="portfolio-title">Portfolio</h2>
        <div className="portfolio-grid">
          {this.state.projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-card-image">
                <div className="portfolio-image-placeholder">{project.title}</div>
              </div>
              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-description">{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="portfolio-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="portfolio-card-buttons">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="portfolio-btn portfolio-btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      className="portfolio-btn portfolio-btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
