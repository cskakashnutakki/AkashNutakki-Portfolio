import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "E-Learning Website",
    period: "Nov-Dec 2024",
    description: "An interactive e-learning platform focused on coding education with structured content and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["HTML & CSS", "JavaScript", "Python", "Django"],
    details: [
      "Designed and developed an interactive e-learning platform focused on coding education.",
      "Implemented structured content with HTML & CSS, added dynamic features with JavaScript, and managed backend with Python & Django.",
      "Created a seamless, beginner-friendly learning experience tailored for aspiring developers."
    ],
    githubLink: "#"
  },
  {
    title: "Basic Calculator",
    period: "Aug 2024",
    description: "A lightweight browser-based calculator application with an intuitive interface for performing basic arithmetic operations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["HTML", "CSS", "JavaScript"],
    details: [
      "Developed a lightweight browser-based calculator for performing basic arithmetic operations.",
      "Designed an intuitive and visually appealing UI with HTML & CSS.",
      "Implemented real-time calculations and button interactions using JavaScript."
    ],
    githubLink: "#"
  },
  {
    title: "Stress Detection System for IT Professionals",
    period: "2023-2024",
    description: "An image processing and machine learning based system to detect and analyze stress levels in IT professionals to improve workplace wellness.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300",
    technologies: ["Python", "Machine Learning", "Image Processing", "NumPy", "Pandas"],
    details: [
      "Developed during my internship at DATAPOINT IT, this project utilized image processing and machine learning techniques to detect stress in IT professionals.",
      "Implemented data preprocessing using NumPy and Pandas to prepare high-quality datasets for analysis.",
      "Created algorithms to analyze facial expressions and physical indicators to determine stress levels.",
      "Designed a user-friendly interface to display results and provide wellness recommendations."
    ],
    githubLink: "#",
    fullWidth: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            Projects
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Showcasing my work and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                project.fullWidth ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-heading font-semibold text-xl text-primary">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-gray-600 space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="flex gap-2">
                      <span>•</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary font-medium transition-colors flex items-center"
                  >
                    <Github className="mr-2" size={18} />
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
