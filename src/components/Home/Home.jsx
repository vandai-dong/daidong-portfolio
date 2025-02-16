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

  // Scrollbar styles based on darkMode
  const scrollbarStyles = {
    "::webkit-scrollbar": {
      width: "12px",
      height: "12px",
    },
    "::webkit-scrollbar-track": {
      backgroundColor: darkMode ? "#333" : "#f1f1f1",
      borderRadius: "10px",
    },
    "::webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: "10px",
      border: `3px solid ${darkMode ? "#333" : "#f1f1f1"}`,
    },
    "::webkit-scrollbar-thumb:hover": {
      backgroundColor: darkMode ? "#555" : "#333",
    },
  };

  // Inject scroll bar styles into the document body
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      ::-webkit-scrollbar {
        width: ${scrollbarStyles["::webkit-scrollbar"].width};
        height: ${scrollbarStyles["::webkit-scrollbar"].height};
      }
      ::-webkit-scrollbar-track {
        background-color: ${scrollbarStyles["::webkit-scrollbar-track"].backgroundColor};
        border-radius: ${scrollbarStyles["::webkit-scrollbar-track"].borderRadius};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${scrollbarStyles["::webkit-scrollbar-thumb"].backgroundColor};
        border-radius: ${scrollbarStyles["::webkit-scrollbar-thumb"].borderRadius};
        border: ${scrollbarStyles["::webkit-scrollbar-thumb"].border};
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${scrollbarStyles["::webkit-scrollbar-thumb:hover"].backgroundColor};
      }
    `;
    document.head.appendChild(style);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, [darkMode]);

  return (
    <section
      style={{
        height: "90vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <div
        style={{
          minHeight: "100vh", // Each section takes full height of the viewport
          scrollSnapAlign: "start", // Ensure each section snaps to the start
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Ensures Footer is at the bottom
          scrollSnapAlign: "start",
        }}
      >
        <Projects darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </section>
  );
}

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Home;
