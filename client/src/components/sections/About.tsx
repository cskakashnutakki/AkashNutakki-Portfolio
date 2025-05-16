import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "B.TECH in Computer Science Engineering-AIML",
      institution: "DRK Institute of Science and Technology",
      period: "08/2020 - 06/2024",
      score: "CGPA: 7.08/10.00",
    },
    {
      degree: "Intermediate Education",
      institution: "BHASHYAM IIT JEE JR.COLLEGE",
      period: "06/2018 - 05/2020",
      score: "Percentage: 90.7%",
    },
    {
      degree: "Secondary School Education",
      institution: "BHASHYAM HIGH SCHOOL",
      period: "06/2017 - 05/2018",
      score: "GPA: 9.50/10.00",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            About Me
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Get to know more about my background, education, and what drives me in the 
            world of tech.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=450"
              alt="Developer coding on laptop"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 md:pl-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading font-semibold text-2xl mb-4 text-primary">
              Who am I?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a Python Full Stack Developer with a passion for building robust web
              applications. With a background in Computer Science Engineering with a
              specialization in AI and Machine Learning, I bring a unique perspective to
              development projects.
            </p>

            <h3 className="font-heading font-semibold text-2xl mb-4 text-primary">
              Education
            </h3>
            <div className="space-y-4 mb-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-secondary pl-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <h4 className="font-heading font-medium text-lg">{item.degree}</h4>
                  <p className="text-gray-600">{item.institution}</p>
                  <p className="text-gray-500 text-sm">
                    {item.period} | {item.score}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-heading font-medium text-lg mb-2 text-primary">
                  Location
                </h4>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="text-secondary mr-2" size={18} />
                  Hyderabad, India
                </p>
              </div>

              <div>
                <h4 className="font-heading font-medium text-lg mb-2 text-primary">
                  Languages
                </h4>
                <p className="text-gray-600">English (Fluent)</p>
                <p className="text-gray-600">Telugu (Advanced)</p>
                <p className="text-gray-600">Hindi (Basic)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
