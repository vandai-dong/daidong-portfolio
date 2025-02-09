import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./components/About/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Footer />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
