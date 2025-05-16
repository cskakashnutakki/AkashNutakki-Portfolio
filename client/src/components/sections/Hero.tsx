import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-primary to-primary/80 text-white"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-secondary mb-3">Hello, I'm</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Akash Nutakki
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">Python Full Stack Developer</h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Motivated and detail-oriented graduate with a strong foundation in Computer
              Science Engineering-AIML, seeking to leverage academic knowledge and
              technical skills in a dynamic, growth-oriented environment.
            </p>

            <div className="flex space-x-4">
              <a href="#contact">
                <Button className="bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Get in Touch
                </Button>
              </a>
              <a href="#" download>
                <Button variant="outline" className="text-white hover:text-secondary border-white hover:border-secondary transition-colors">
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex mt-8 space-x-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-white hover:text-secondary transition-colors"
                aria-label="Email Me"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
              alt="Tech workspace with code on screen"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-secondary shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
