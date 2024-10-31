import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-medium"
        >
          Jungeer
        </motion.div>
        <div className="flex gap-6">
          <a href="https://github.com/jungeer" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-600 transition-colors" />
          </a>
          <a href="mailto:your@email.com">
            <Mail className="w-6 h-6 hover:text-gray-600 transition-colors" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}