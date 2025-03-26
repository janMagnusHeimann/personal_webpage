import { publications } from '../data/publications';
import { motion } from 'framer-motion';

export default function Publications() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{pub.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{pub.conference}</p>
            <p>{pub.impact}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}