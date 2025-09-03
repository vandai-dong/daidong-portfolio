function NavigationBar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white shadow-lg p-4 font-sans"
    >
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="font-bold sm:text-2xl text-[#2c323f] text-lg">Dai Dong</a>
            <div className="flex space-x-6 sm:text-xl text-base">
                <a href="#about" className="text-[#2c323f] hover:text-[#b078c7] transition-colors">About</a>
                <a href="#projects" className="text-[#2c323f] hover:text-[#b078c7] transition-colors">Projects</a>
                <a href="#skills" className="text-[#2c323f] hover:text-[#b078c7] transition-colors">Skills</a>
            </div>
        </div>
    </nav>
  );
}

export default NavigationBar;