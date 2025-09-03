import NavigationBar from './components/NavigationBar/NavigationBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="font-serif bg-[#f5f5f5] text-[#2c323f]">
      <NavigationBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
