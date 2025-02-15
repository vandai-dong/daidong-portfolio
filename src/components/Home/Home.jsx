import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Hello from "./Hello";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

function Home({ darkMode }) {
  useEffect(() => {
    // Prevent scrolling on body and html
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Clean up: allow scrolling when component is unmounted
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        <Hello />
      </div>
      <div
        style={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        <About />
      </div>
      <div
        style={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        <Projects />
        <Footer darkMode={darkMode} />
      </div>
    </section>
  );
}

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Home;
