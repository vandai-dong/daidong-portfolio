import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hello from "./Hello";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Resume from "../Resume/Resume";

function Home() {
  return (
    <section>
      <Hello />
      <About />
      <Projects />
    </section>
  );
}

export default Home;
