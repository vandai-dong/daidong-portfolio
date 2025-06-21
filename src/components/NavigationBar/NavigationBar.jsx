import { useState } from "react";
import "../../style.css";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center bg-gray-200 p-2 shadow-md md:min-h-15">
      <h1 className="text-2xl md:text-3xl font-bold">Dai Dong</h1>

      <button className="ml-auto md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className={`h-7 w-7 ${isOpen ? "hidden" : "flex"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          className={`h-7 w-7 ${!isOpen ? "hidden" : "flex"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ul
        className={`w-full md:w-auto gap-1 ${
          isOpen ? "flex flex-col mt-2 items-center text-center" : "hidden"
        } md:flex md:flex-row md:gap-x-2 md:ml-auto md:text-xl`}
      >
        {["Home", "About", "Projects", "Resume"].map((text) => (
          <li key={text}>
            <a href="#" className="block px-2 py-1">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
