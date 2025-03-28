import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Added import

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const navItems = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/projects', label: 'Projects' }, // Updated to navigate to /projects
    { href: '/#publications', label: 'Publications' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white p-4 sticky top-0 z-40 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="text-2xl font-bold"
        >
          Jan Magnus Heimann
        </motion.h1>
        <ul className="flex space-x-4 items-center">
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href}>
                <a className="hover:text-blue-400 transition-colors">
                  {item.label}
                </a>
              </Link>
            </motion.li>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </motion.button>
        </ul>
      </nav>
    </header>
  );
}