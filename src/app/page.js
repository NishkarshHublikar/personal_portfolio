import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}

