import { motion } from "framer-motion";
import { 
  Code, Server, Brain, Bolt 
} from "lucide-react";

const technicalSkills = [
  { name: "Python", percentage: 95 },
  { name: "Django", percentage: 85 },
  { name: "HTML/CSS", percentage: 90 },
  { name: "JavaScript", percentage: 80 },
  { name: "SQL", percentage: 85 },
  { name: "Machine Learning", percentage: 75 },
];

const expertiseAreas = [
  {
    title: "Frontend Development",
    icon: <Code className="h-8 w-8" />,
    skills: ["HTML, CSS", "JavaScript", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8" />,
    skills: ["Python", "Django", "SQL Database Integration", "API Development"],
  },
  {
    title: "Machine Learning",
    icon: <Brain className="h-8 w-8" />,
    skills: ["NumPy, Pandas", "Matplotlib", "Data Preprocessing", "Model Development"],
  },
  {
    title: "Bolt & Deployment",
    icon: <Bolt className="h-8 w-8" />,
    skills: ["Git/GitHub", "Vercel", "Railway", "Database Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column: Technical skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-2xl mb-6 text-primary">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-secondary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column: Skill categories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-2xl mb-6 text-primary">
              Expertise Areas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="text-secondary text-3xl mb-4">{area.icon}</div>
                  <h4 className="font-heading font-medium text-xl mb-2">{area.title}</h4>
                  <ul className="text-gray-600 space-y-1">
                    {area.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>• {skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
