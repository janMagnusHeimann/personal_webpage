import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p>Email: <a href="mailto:jan_heimann@icloud.com" className="text-blue-500">jan_heimann@icloud.com</a></p>
          <p>Phone: +49 15174560041</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/jan-heimann" className="text-blue-500">linkedin.com/in/jan-heimann</a></p>
          <p>GitHub: <a href="https://github.com/janMagnusHeimann" className="text-blue-500">github.com/janMagnusHeimann</a></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <form action="/api/contact" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              rows="4"
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}