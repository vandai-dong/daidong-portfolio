import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Hello from "./Hello";
import About from "../About/About";

function Home() {
  const components = [
    Hello,
    About,
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentIndex < components.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (currentScrollY < lastScrollY && currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, currentIndex]);

  const CurrentComponent = components[currentIndex];
  return <CurrentComponent />;

  // return (
  //   <section>
  //     <Hello />
  //     <About />
  //   </section>
  // );
}

export default Home;