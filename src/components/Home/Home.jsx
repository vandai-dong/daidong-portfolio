import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hello from "./Hello";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <section>
      <Hello />
      <About />
      <Projects />
      <Footer />
    </section>
  );
}

export default Home;
