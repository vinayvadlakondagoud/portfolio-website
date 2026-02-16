import React from "react";

function Skills() {
  const skills = [
    
    "HTML", "CSS","JavaScript", "Bootstrap","C", "C++", "Python", "Java (Basic)",
    "MySQL", "GitHub"
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
