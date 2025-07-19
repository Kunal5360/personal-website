import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Kunal Nagdawane</h1>
      <p className="subtitle">Data Engineer | Azure | Databricks | Python</p>
      <div className="links">
        <a href="mailto:kunalnagdawane11@gmail.com">Email</a>
        <a href="https://linkedin.com/in/kunalnagdawane" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Kunal5380" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </header>
  );
}

function Home() {
  return (
    <section id="home">
      <h2>About Me</h2>
      <p>
        Results-driven Data Engineer with 3 years of experience in designing, building, and maintaining scalable data pipelines and ETL workflows. 
        Proficient in SQL, Python, Spark, and cloud platforms (AWS, Azure, GCP). Strong expertise in data modeling, warehousing, and optimizing data infrastructure for performance and reliability.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Formula1 Racing Analytics with Azure Technologies</h3>
        <ul>
          <li>Built a real-world data engineering solution using <b>Azure Databricks</b> and <b>Apache Spark</b> to analyze Formula 1 racing data.</li>
          <li>Ingested raw data into <b>Azure Data Lake Gen2</b>, processed it using <b>PySpark</b> and <b>Spark SQL</b>, and stored curated data in Delta Lake for analytics.</li>
          <li>Implemented <b>Lakehouse architecture</b> with Delta Lake for scalable, reliable data processing and governance.</li>
          <li>Created and scheduled <b>Azure Data Factory</b> pipelines to orchestrate Databricks notebooks and automate workflows.</li>
          <li>Integrated <b>Unity Catalog</b> for data governance, access control, and metadata management.</li>
          <li>Connected <b>Power BI</b> to Databricks for interactive reporting and visualization.</li>
        </ul>
      </div>
      <div className="project">
        <h3>COVID-19 Trends Analytics with Azure Data Engineering</h3>
        <ul>
          <li>Designed and implemented a real-time data pipeline using <b>Azure Data Factory</b> to ingest COVID-19 data from APIs and flat files.</li>
          <li>Processed and stored raw data in <b>Azure Data Lake Gen2</b>, transformed it using <b>Azure Databricks (PySpark)</b>, and loaded it into <b>Azure SQL Database</b> and Power BI for reporting.</li>
          <li>Automated pipeline execution with <b>ADF triggers</b>, and implemented monitoring and alerting via <b>Azure Monitor</b> and <b>Log Analytics</b>.</li>
          <li>Deployed managed CI/CD workflows using <b>Azure DevOps</b>, ensuring version control and streamlined releases.</li>
        </ul>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="job">
        <h3>Senior System Engineer</h3>
        <span>Cognizant Technology Private Solutions | Apr 2022 - Present | Pune, Maharashtra</span>
        <ul>
          <li>Designed and implemented end-to-end data pipelines using Azure Data engineering solutions, resulting in a 30% reduction in data processing time.</li>
          <li>Delivered high-quality solutions exceeding customer expectations, achieving a 25% increase in customer satisfaction scores.</li>
          <li>Demonstrated expertise in SQL, Python, PySpark, Azure Databricks, ADLS, Azure Data Lake architecture, and Azure Data Factory.</li>
          <li>Managed datasets that improved data retrieval efficiency by 40%.</li>
          <li>Constructed streamlined ETL pipelines for Business Intelligence, facilitating actionable insights and improving decision-making speed.</li>
          <li>Implemented end-to-end data quality checks in Databricks using PySpark and ADF, achieving a 95% accuracy rate in data validation and anomaly detection.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Customer Representative, Operations</h3>
        <span>Concentrix Services India Pvt Ltd | Jan 2021 - Jan 2022 | Pune, India</span>
        <ul>
          <li>Handled 500+ daily customer queries via Salesforce/Zendesk, ensuring accurate data capture and workflow efficiency.</li>
          <li>Achieved 98% SLA compliance through optimized ticket routing and escalation processes.</li>
          <li>Analyzed 300+ weekly customer interactions to identify trends, reducing repeat complaints by 15%.</li>
          <li>Extracted and structured CRM data for reporting, supporting insights through basic ETL workflows and dashboards.</li>
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div>
          <h4>Programming Languages</h4>
          <p>Python, SQL, PySpark</p>
        </div>
        <div>
          <h4>Data Tools</h4>
          <p>Azure Databricks, Snowflake, Apache Spark, Airflow</p>
        </div>
        <div>
          <h4>Cloud Platforms</h4>
          <p>Azure (Data Factory, Synapse, Databricks, Delta Lake, SQL Database, Monitor, Log Analytics), AWS (Redshift, S3, Glue, Athena, IAM), Lambda</p>
        </div>
        <div>
          <h4>CI/CD Tools</h4>
          <p>Git, Docker, Jenkins, Kubernetes</p>
        </div>
        <div>
          <h4>Other</h4>
          <p>Analytical Skill, Problem Solving, Communication, Technical Documentation, Agile, Detail Oriented</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Want to connect or discuss a project? Reach out via <a href="mailto:kunalnagdawane11@gmail.com">email</a> or connect on <a href="https://linkedin.com/in/kunalnagdawane" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Kunal Nagdawane</span>
    </footer>
  );
}

export default App;
