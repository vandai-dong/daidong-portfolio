// import { useEffect } from "react";
// import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Hello from "./Hello";
// import About from "../About/About";
// import Projects from "../Projects/Projects";

// function Home() {
//   useEffect(() => {
//     // Allow scrolling on the body and html (remove any previous locks)
//     document.body.style.overflow = "auto";
//     document.documentElement.style.overflow = "auto";
//   }, []);

//   return (
//     <section
//       style={{
//         height: "100vh",
//         overflowY: "scroll",
//         scrollSnapType: "y mandatory",
//         scrollBehavior: "smooth",
//       }}
//     >
//       <div
//         style={{
//           minHeight: "100vh",
//           scrollSnapAlign: "start",
//         }}
//       >
//         <Hello />
//       </div>
//       <div
//         style={{
//           minHeight: "100vh",
//           scrollSnapAlign: "start",
//         }}
//       >
//         <About />
//       </div>
//       <div
//         style={{
//           minHeight: "100vh",
//           overflowY: "auto",
//           scrollSnapAlign: "start",
//         }}
//       >
//         <Projects />
//       </div>
//     </section>
//   );
// }

// Home.propTypes = {
//   darkMode: PropTypes.bool.isRequired,
// };

// export default Home;
