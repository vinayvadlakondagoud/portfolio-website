import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h2 className="loading">Loading...</h2>}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
