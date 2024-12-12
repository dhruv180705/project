import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    'Tools': ['Git', 'Docker', 'AWS', 'Figma'],
    'Other': ['REST APIs', 'GraphQL', 'Testing', 'CI/CD']
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-purple-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                    className="bg-white rounded-lg p-3 shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;