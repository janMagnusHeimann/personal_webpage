import { workExperience } from '../data/workExperience';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            <h4 className="text-xl font-medium">{job.title} at {job.company}</h4>
            <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
            <p className="mt-2">{job.description}</p>
            <ul className="list-disc ml-5 mt-2">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <h4 className="text-xl font-medium capitalize">{category}</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {skillList.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}