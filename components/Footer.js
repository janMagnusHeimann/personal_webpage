import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      className="bg-gray-800 dark:bg-gray-900 text-white p-4 text-center"
    >
      <p>&copy; {new Date().getFullYear()} Jan Magnus Heimann. All rights reserved.</p>
    </motion.footer>
  );
}