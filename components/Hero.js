import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 text-center" id="home">
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-4"
      >
        Jan Magnus Heimann
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl mb-8"
      >
        Machine Learning Engineer & Researcher
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg max-w-2xl mx-auto"
      >
        Passionate about leveraging machine learning to solve complex problems in engineering and beyond.
      </motion.p>
      <motion.a
        href="/cv.pdf"
        download
        whileHover={{ scale: 1.1 }}
        className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold"
      >
        Download CV
      </motion.a>
    </div>
  );
}