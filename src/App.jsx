import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  // Load dark mode preference from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const themeStyles = {
    backgroundColor: darkMode ? "#333" : "#f8f9fa",
    color: darkMode ? "#fff" : "#333",
    minHeight: "100vh",
    transition: "0.3s",
  };

  return (
    <div style={themeStyles}>
      <Router>
        <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects darkMode={darkMode} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </div>
  );
}

export default App;
