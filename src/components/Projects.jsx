import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Hostel Management System</h3>
          <ul>
            <li>Full-stack system to manage student records</li>
            <li>Room allocation & fee management</li>
            <li>UI built with HTML & CSS</li>
            <li>Database implemented using MySQL</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>MoviesWeb</h3>
          <ul>
            <li>React-based movie browsing application</li>
            <li>Displays posters, ratings & descriptions</li>
            <li>Modern responsive UI design</li>
            <li>Optimized for smooth performance</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Projects;
