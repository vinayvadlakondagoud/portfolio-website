import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Hostel Management System</h3>
          <ul>
            <li>Full-stack system to manage student records and hostel operations</li>
            <li>Includes room allocation, complaint & feedback system</li>
            <li>Messaging system between students and warden</li>
            <li>Built using Html & Css, Node.js, and MySQL</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Rental Management System</h3>
          <ul>
            <li>Web application to manage rental properties and tenants</li>
            <li>Tracks rent payments, tenant details, and property records</li>
            <li>Includes authentication and dashboard for management</li>
            <li>Built using Html & Css, Python Flask (Django), and MySQL</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>MoviesWeb</h3>
          <ul>
            <li>React-based movie browsing application</li>
            <li>Displays posters, ratings & descriptions using API</li>
            <li>Modern responsive UI design</li>
            <li>Optimized for smooth performance</li>
            <li>Built using React, Node.js, and MongoDB</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Projects;