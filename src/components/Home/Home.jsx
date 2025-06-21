import Typewriter from "typewriter-effect";

function Home() {
  return (
    <container className="grid grid-cols-1 gap-4 px-8 pt-10 md:grid-cols-2 md:px-25 md:pt-30">
      <div className="flex flex-col gap-5 text-3xl md:gap-10 md:text-6xl">
        <div>Hello!</div>
        <div>
          I am <strong className="text-[#b078c7]">Dai Dong</strong>
        </div>
        <div className="text-2xl md:text-3xl text-[#b078c7]">
          <Typewriter
            options={{
              strings: ["Junior Software Developer", "Technology Enthusiast"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div
          aria-hidden="true"
          className="mt-5 flex items-center justify-start text-9xl md:hidden"
        >
          <div role="img" className="wave">
            👋🏻
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="hidden items-center justify-center text-[250px] md:flex"
      >
        <div role="img" className="wave">
          👋🏻
        </div>
      </div>
    </container>
  );
}

export default Home;
