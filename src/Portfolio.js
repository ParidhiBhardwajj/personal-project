import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "",
          title: "Retrieval Augmented Generation (RAG) Project ",
          description: "A production-ready RAG pipeline featuring high-concurrency vector search and fine-tuned LLMs for domain-specific accuracy",
          technologies: ["Qdrant", "Ollama", "Gradio", "Docker", "Python", "Rest API"]
        },
        {
          project_image: "",
          title: "Weather Forecasting Research",
          description: "A computational research framework for solar irradiance forecasting using containerized atmospheric physics models and Bayesian Optimzation",
          technologies: ["WRF-Solar-BNL", "NetCDF", "HPC", "Reinforcement Learning"]
        },
        {
          project_image: "",
          title: "AI Fashion Dashboard",
          description: "An intelligent styling application that uses computer vision and LLMs to provide personalized outfit recommendations based on image analysis",
          technologies: ["Streamlit", "Google Gemini", "OpenCV", "Scikit-learn", "K-Means"]
        },
        {
          project_image: "",
          title: "Revenue Forecasting and BI Platform",
          description: "A comprehensive business intelligence suite for time-series forecasting and real-time scenario simulation of macroeconomic impacts",
          technologies: ["XGBoost", "Prophet", "SQLite", "Plotly", "OpenPyXL"]
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
                {project.project_image ? (
                  <img src={project.project_image} alt={project.title} />
                ) : (
                  <div className="portfolio-image-placeholder">Project Image</div>
                )}
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
                  <button type="button" className="portfolio-btn portfolio-btn-primary">Live Demo</button>
                  <button type="button" className="portfolio-btn portfolio-btn-secondary">Source Code</button>
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
