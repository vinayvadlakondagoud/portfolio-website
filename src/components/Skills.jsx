import React from "react";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "Python", "Java", "MySQL",
    "Spring Boot", "GitHub"
  ];

  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>

      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
