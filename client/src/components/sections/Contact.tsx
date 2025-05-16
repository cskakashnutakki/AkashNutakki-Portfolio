import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-secondary" />,
      title: "Email",
      content: SOCIAL_LINKS.email,
      link: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
      icon: <Phone className="text-secondary" />,
      title: "Phone",
      content: SOCIAL_LINKS.phone,
      link: `tel:${SOCIAL_LINKS.phone}`,
    },
    {
      icon: <MapPin className="text-secondary" />,
      title: "Location",
      content: "Hyderabad, India",
    },
    {
      icon: <Linkedin className="text-secondary" />,
      title: "LinkedIn",
      content: "linkedin.com/in/akash-nutakki",
      link: SOCIAL_LINKS.linkedin,
    },
    {
      icon: <Github className="text-secondary" />,
      title: "GitHub",
      content: "github.com/cskakashnutakki",
      link: SOCIAL_LINKS.github,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            I'm currently available for freelance work and full-time positions. Feel free to
            reach out!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-2xl mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-lg">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-gray-300 hover:text-secondary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-2xl mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
