import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Akash Nutakki | Python Full Stack Developer</title>
        <meta name="description" content="Akash Nutakki is a Python Full Stack Developer with expertise in Django, JavaScript, and Machine Learning. View portfolio, projects, and get in touch." />
        <meta property="og:title" content="Akash Nutakki | Python Full Stack Developer" />
        <meta property="og:description" content="Portfolio website showcasing skills, projects, and professional experience in full stack development and machine learning." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
