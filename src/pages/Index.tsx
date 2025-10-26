import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
