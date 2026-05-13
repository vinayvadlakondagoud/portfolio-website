import React from "react";

function Hero() {
  return (
    <section className="hero">
      <h1>
        Hi, I'm <span>Vinay Vadlakonda</span>
      </h1>
      <p>
        Full Stack Developer crafting modern, scalable, and user-friendly web applications.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn outline">Hire Me</a>
      </div>
    </section>
  );
}

export default Hero;
