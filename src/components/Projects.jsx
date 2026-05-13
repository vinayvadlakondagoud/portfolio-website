import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <h3>🏨 Hostel Management System</h3>
          <p className="project-desc">
            A full-stack web application designed to streamline hostel operations 
            and enhance communication between students and administration.
          </p>

          <ul>
            <li>Efficient room allocation and student record management</li>
            <li>Complaint & feedback system for issue tracking</li>
            <li>Real-time messaging between students and warden</li>
            <li>Secure backend with optimized database queries</li>
          </ul>

          <span className="tech">Tech: HTML, CSS, Node.js, MySQL</span>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>🏠 Rental Management System</h3>
          <p className="project-desc">
            A robust property management platform to handle rental operations, 
            tenant tracking, and financial records efficiently.
          </p>

          <ul>
            <li>Manage tenant details and rental property listings</li>
            <li>Automated rent tracking and payment monitoring</li>
            <li>Secure authentication and admin dashboard</li>
            <li>Clean UI for seamless user experience</li>
          </ul>

          <span className="tech">Tech: HTML, CSS, Flask, MySQL</span>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>🎬 MoviesWeb</h3>
          <p className="project-desc">
            A modern movie browsing application with dynamic content fetched 
            from APIs, delivering a smooth and engaging user experience.
          </p>

          <ul>
            <li>Displays movie posters, ratings, and descriptions via API</li>
            <li>Responsive UI with fast loading performance</li>
            <li>Search and explore trending & popular movies</li>
            <li>Optimized frontend rendering using React</li>
          </ul>

          <span className="tech">Tech: React.js, Node.js, MongoDB</span>
        </div>

      </div>
    </section>
  );
}

export default Projects;