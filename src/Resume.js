import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science – Computing Option, Business (Accounting and Finance focus) Minor",
      school: "New Jersey Institute of Technology – NJIT",
      year: "Expected May 2026",
      gpa: "Dean's List (Since 2022) | NJIT Academic Excellence Scholarship",
      location: "Newark, NJ"
    },
    {
      degree: "Master of Science in Artificial Intelligence",
      school: "New Jersey Institute of Technology – NJIT",
      year: "Expected May 2027",
      gpa: "BS-MS Program",
      location: "Newark, NJ"
    }
  ];

  const experience = [
    {
      title: "Financial Data Analyst Intern",
      company: "New Jersey Courts",
      period: "May 2025 – Present",
      location: "Morristown, NJ",
      responsibilities: [
        "Built and deployed an interactive financial analytics dashboard using Pandas, Dash and Streamlit, enabling automated CSV/Excel ingestion, dynamic visualizations, analysis, and user-upload capabilities; reduced manual processing time by 30%",
        "Used Excel (Power Query, pivot tables, LOOKUPs) and SQL to identify a financial mismatch, preventing a $50,000 fiscal loss and improving reconciliation procedures",
        "Managed financial transactions operations by validating 500+ weekly court payments through SQL queries, Excel cross-checks and internal financial systems (eCourts, ACMS, CAPS, NJ Kids), reducing discrepancies by 15%",
        "Produced KPI dashboards using Power BI, incorporating DAX measures for trend analysis, cost variance, and department-level performance reporting to senior leadership",
        "Conducted quarterly budgeting using forecasting models in Python and scenario analysis in Excel, supporting institutional planning and resource allocation"
      ]
    },
    {
      title: "Chief Classroom Assistant",
      company: "Kumon Math and Reading Center",
      period: "July 2022 – Present",
      location: "East Hanover, NJ",
      responsibilities: [
        "Delivered personalized instruction using digital learning platforms (Kumon Connect, grading systems), improving overall student math performance by 30% through targeted guidance and structured progression",
        "Designed individualized learning roadmaps for 150+ students using Excel forecasting models (progress deltas, pacing curves, mastery projections) to optimize learning outcomes and pacing decisions",
        "Created Power BI dashboards and Tableau visualizations to communicate progress trends to parents and management; leveraged KPIs, slicers, and interactive drilldowns to highlight growth, forecast mastery dates, and identify skill gaps",
        "Built and maintained an SQL-based student performance dashboard, integrating automated Python (Pandas) scripts to clean and merge weekly performance data; tracked accuracy, completion time, and concept mastery",
        "Implemented an AI-powered recommendation system using Python to suggest personalized practice worksheets and difficulty adjustments based on student behavior patterns"
      ]
    },
    {
      title: "Project Manager and Technical Lead",
      company: "Project Elevate (Startup)",
      period: "January 2025 – May 2025",
      location: "Newark, NJ",
      responsibilities: [
        "Architected an AI/ML-driven educational chatbot using Python, PyTorch, Hugging Face Transformers, and LangChain, enabling personalized K–12 learning recommendations and adaptive content generation",
        "Developed cloud-based ML infrastructure using AWS SageMaker for model training, AWS Lambda for inference workloads, and S3 for dataset storage, improving scalability and reducing local compute constraints",
        "Authored technical sections of NSF, SBIR, and EDA grants, detailing cloud architecture (AWS EC2, SageMaker, S3), MLOps pipelines, security requirements, and long-term system evolution strategy",
        "Implemented project management and engineering workflows using JIRA, Confluence, and GitHub Actions CI/CD, ensuring federal compliance and alignment with multi-stakeholder deliverables",
        "Designed and fine-tuned NLP models (BERT-family, sequence classification, token classification) using PyTorch + SageMaker training jobs, and built evaluation pipelines using F1, ROUGE, and BLEU metrics",
        "Built early-stage ETL pipelines in Python deployed on AWS Lambda, automating preprocessing, tokenization and metadata extraction for chatbot model updates"
      ]
    },
    {
      title: "Python Instructor",
      company: "New Jersey Institute of Technology Pre-College Programs",
      period: "October 2024 – September 2025",
      location: "Newark, NJ",
      responsibilities: [
        "Developed and taught a full Python curriculum using Jupyter Notebook, VS Code, and Replit, covering data types, OOP, APIs, and introductory machine learning",
        "Guided 50+ students in building full-stack final projects using Flask, HTML/CSS, and GitHub, teaching best practices in debugging, version control, and deployment",
        "Organized hands-on labs integrating Git/GitHub, including branching, pull requests and collaborative coding workflows",
        "Demonstrated real-world applications such as web scraping (BeautifulSoup, Requests), data visualization (Matplotlib, Plotly), and basic ML models (scikit-learn)"
      ]
    },
    {
      title: "Chairman",
      company: "Highlander Integrity Council",
      period: "September 2022 – Present",
      location: "NJIT",
      responsibilities: [
        "Led a campus-wide initiative with the Dean of Students to promote academic integrity and student conduct awareness",
        "Reviewed conduct violations and collaborated with faculty during hearings to ensure fair and consistent enforcement",
        "Represented student interests in university-level meetings, contributing to policy and decision-making discussions",
        "Collaborated with NJIT's Provost in making improvements on the academic policies and curriculum for the Data Science department"
      ]
    },
    {
      title: "President, Treasurer and Social Media Manager",
      company: "Google Developer Groups on Campus",
      period: "January 2023 – August 2024",
      location: "NJIT",
      responsibilities: [
        "Managed a 700+ member technical organization and hosted 20+ workshops with average attendance of ~500 students",
        "Oversaw budgeting, sponsorships, and event merchandising, ensuring financial sustainability",
        "Hosted a 24-hour hackathon with more than 1000+ attendees and collaborated with 5 sponsors including Salesforce and Google",
        "Partnered with five Newark public schools to teach coding for free to high school students and run technology outreach programs",
        "Co-designed Python curriculum for NJIT's Pre-College Program (Power Up With Python) for grades 11–12"
      ]
    }
  ];

  const projects = [
    {
      name: "Retrieval Augmented Generation (RAG) Project",
      highlights: [
        "Led end-to-end development of a production-ready RAG pipeline combining Qdrant vector search, LLM inference, and scalable embedding workflows to deliver domain-specific responses across 10,000+ vectorized documents",
        "Fine-tuned Ollama LLMs on domain corpora and engineered vector-guided generation to increase accuracy and reduce hallucinations in agent responses",
        "Architected and containerized a Gradio-based UI with an integrated REST API, supporting 500+ concurrent real-time queries with <200ms latency under load",
        "Optimized Qdrant index configurations, async batching, and retrieval parameters, improving vector search latency by 40%",
        "Oversaw cross-functional alignment between model design, API development, and deployment workflows"
      ]
    },
    {
      name: "Weather Forecasting Research with Professor Chase Wu",
      highlights: [
        "Directed computational research to enhance solar irradiance forecasting using the WRF-Solar-BNL atmospheric physics model across multi-domain nested simulations",
        "Containerized the full WRF-Solar-BNL installation using Docker + Ubuntu 20.04, enabling portable, reproducible multi-hour simulations across HPC and local environments",
        "Developed automated scripts to tune and run parameter combinations (vdis, beta_con, entrmix, radiation schemes), reducing manual experimentation time by 60%",
        "Designed workflows for Bayesian Optimization and RL-based steering, improving model parameter search efficiency vs. baseline BO approaches",
        "Built a Python-based evaluation pipeline to extract ground-truth (NetCDF) and compute MSE/MAPE for multi-domain (d01/d02) irradiance outputs",
        "Presented results to research advisors and collaborated with BNL scientists to troubleshoot microphysics configurations, radiation schemes (RRTMG), and aerosol modeling"
      ]
    },
    {
      name: "Fashion Dashboard",
      highlights: [
        "Built an intelligent fashion-styling application using Streamlit, enabling users to upload clothing images and receive automated outfit recommendations",
        "Developed a color-analysis subsystem using K-Means clustering (scikit-learn) to extract dominant colors and convert them into interpretable hex palettes",
        "Implemented a hybrid recommendation engine combining rule-based fashion logic (color harmony, proportions, outfit completeness) with AI-generated styling advice from Google Gemini models",
        "Designed the LLM pipeline to format extracted CV features into structured prompts for Gemini, generating actionable, personalized styling insights aligned with user-selected goals (smart casual, minimalist, party, office)",
        "Integrated image preprocessing and feature extraction using OpenCV, Pillow, and scikit-image, ensuring consistent performance across various lighting and backgrounds"
      ]
    },
    {
      name: "Revenue Forecasting",
      highlights: [
        "Built a full business intelligence and forecasting platform with 6 modules (Forecasting, Insights, Statistics, Database, KPI Analysis, Scenario Simulation)",
        "Developed ML forecasting models using XGBoost and Prophet, engineering 30+ time-series and lag features; achieved 25%+ reduction in MAPE vs baseline models",
        "Implemented real-time scenario simulation for promotions, oil price fluctuations, and macroeconomic impacts, enabling stakeholders to make data-driven decisions",
        "Created a multi-sheet Excel and CSV export engine for automated reporting using OpenPyXL",
        "Integrated a persistent SQLite database for storing forecasts, models, and user-generated scenarios",
        "Applied statistical techniques—hypothesis testing, correlation analysis, confidence intervals—to validate business assumptions and quantify revenue drivers",
        "Built a Streamlit UI with custom Plotly dashboards for intuitive exploration of trends, KPIs, seasonality, and variance explanations"
      ]
    }
  ];

  const skills = {
    "Programming & ML": ["Python (Pandas, NumPy, Scikit-learn, PyTorch, Matplotlib)", "SQL", "Java", "JavaScript/TypeScript", "R", "HTML/CSS", "Bash"],
    "AI Tools & Cloud": ["Google Gemini APIs", "Streamlit", "TensorFlow", "Google Cloud Platform (BigQuery, Cloud Functions)", "AWS/Azure"],
    "Data & Visualization": ["Power BI", "Tableau", "React", "MongoDB", "BigQuery", "Git", "Docker", "Ubuntu"],
    "Business & ERP Systems": ["SAP", "Oracle", "NetSuite", "Workday", "Accounts Payable systems"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}{edu.location ? ` · ${edu.location}` : ''}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period}){exp.location ? ` · ${exp.location}` : ''}</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="resume-block">
            <h3 className="section-title">Projects</h3>
            <div className="projects-list">
              {projects.map((project, index) => (
                <div key={index} className="project-item">
                  <h4 className="project-name">{project.name}</h4>
                  <ul className="responsibilities">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;