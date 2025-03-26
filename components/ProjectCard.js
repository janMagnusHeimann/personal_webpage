import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.company} | {project.period}</p>
      <p>{project.description}</p>
      <ul className="list-disc ml-5 mt-2">
        {project.achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    </motion.div>
  );
}