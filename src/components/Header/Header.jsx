import personalPic from '../../assets/img/About/dai-pic.jpg';
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <header className="text-charcoal h-screen bg-[#b078c7] py-16 text-center shadow-lg snap-start md:py-24">
      <div className="container mx-auto px-4">
        <img
          src={personalPic}
          alt="Dai Dong"
          className="rounded-full mx-auto w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-md mb-6"
        />
        <h1 className="text-3xl md:text-7xl font-bold font-sans mb-2">
          Dai Dong
        </h1>
        <p className="text-lg md:text-3xl font-serif">
          <Typewriter
          options={{
            strings: [
              "Junior Software Developer",
              "Junior AI Engineer",
              "Technology Enthusiast",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-8 py-3 bg-[#a0d8c0] text-white font-sans font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-[#89c9ac]"
        >
          View My Projects
        </a>
      </div>
    </header>
  );
}
