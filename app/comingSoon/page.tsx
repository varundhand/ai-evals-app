'use client'

import React from 'react'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4"
      >
        Coming Soon...
      </motion.h1>
      {/* <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        // src="/coming_soon_animation.gif" // Path to your GIF animation
        alt="Coming Soon"
        className="w-64 h-64 mb-8"
      /> */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xl text-center text-gray-600 dark:text-gray-400"
      >
        Stay tuned for exciting updates!
      </motion.p>
    </div>
  )
}

export default page