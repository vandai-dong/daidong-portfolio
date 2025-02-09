import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hello from "./Hello";
import About from "../About/About";
import Projects from "../Projects/Projects";

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
