import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my passion'
    },
    {
      icon: <Palette size={24} />,
      title: 'Design Focus',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Problem Solver',
      description: 'Finding elegant solutions to complex problems'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I bring ideas to life
              through clean code and intuitive interfaces.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge with the developer community.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-4 p-6 bg-purple-50 rounded-lg"
              >
                <div className="text-purple-600">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;