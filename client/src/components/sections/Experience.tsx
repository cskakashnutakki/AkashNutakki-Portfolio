import { motion } from "framer-motion";

const experiences = [
  {
    title: "Python with Machine Learning Intern",
    company: "DATAPOINT IT - HARDWARE TECH PVT. LTD",
    period: "Aug 2023 - Feb 2024",
    responsibilities: [
      "Developed proficiency in backend development by integrating Python with SQL databases, learning to design and optimize queries transferable to SQL and Oracle environments.",
      "Mastered data preprocessing and wrangling techniques using NumPy and Pandas, gaining skills in preparing high-quality datasets for database storage and management.",
      "Acquired hands-on experience by developing a project on Stress detection in IT professionals by using image processing and machine learning."
    ]
  },
  {
    title: "Certifications & Training",
    company: "Various Platforms",
    period: "2022 - 2024",
    responsibilities: [
      "Hackerrank: Python (Basic), SQL (Basic), JavaScript (Basic)",
      "BitLabs: Python, SQL, HTML, CSS, Soft Skills",
      "Analytics Vidhya: Introduction to Python, Machine Learning Certification Course for Beginners",
      "CISCO: Python Essentials 1 and 2",
      "Simplilearn: Power BI for Beginners"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            My professional journey and internship experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-secondary transform -translate-x-1/2"></div>
          
          {/* For mobile, vertical line */}
          <div className="md:hidden absolute left-6 w-0.5 h-full bg-secondary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Desktop timeline */}
                <div className="hidden md:flex items-center">
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    {index % 2 === 0 && (
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex flex-col gap-2 mb-2">
                          <h3 className="font-heading font-semibold text-xl text-primary">{exp.title}</h3>
                          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm w-fit ml-auto">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-500 mb-4">{exp.company}</p>
                        <ul className="space-y-2 text-gray-600">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex gap-2">
                              <span>•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full z-10"></div>
                  
                  <div className={`w-1/2 ${index % 2 === 1 ? 'pl-12' : 'pr-12 text-right'}`}>
                    {index % 2 === 1 && (
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex flex-col gap-2 mb-2">
                          <h3 className="font-heading font-semibold text-xl text-primary">{exp.title}</h3>
                          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm w-fit ml-auto">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-500 mb-4">{exp.company}</p>
                        <ul className="space-y-2 text-gray-600">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex gap-2">
                              <span>•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile timeline */}
                <div className="md:hidden flex">
                  <div className="absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-secondary rounded-full z-10"></div>
                  <div className="ml-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex flex-col gap-2 mb-2">
                        <h3 className="font-heading font-semibold text-xl text-primary">{exp.title}</h3>
                        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-500 mb-4">{exp.company}</p>
                      <ul className="space-y-2 text-gray-600">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex gap-2">
                            <span>•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
