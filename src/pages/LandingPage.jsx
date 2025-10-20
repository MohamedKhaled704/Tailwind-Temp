import { motion } from 'framer-motion';

export default function LandingPage({onSkip}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to <span className="text-green-600">Neoncent</span>
      </motion.h1>

      <motion.p
        className="text-gray-600 mb-10 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A clean, elegant community management experience. Choose how you want to explore:
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button
          onClick={onSkip}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Skip to Website
        </button>

        <a
          href="https://www.figma.com/design/NIeeLLhS32xLTQgaESPmjJ/Minimal-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design--Community-?node-id=1-2&t=3LWUcgsQzxgc5Ada-1"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-100 transition"
        >
          View Figma Template
        </a>
      </motion.div>
    </div>
  );
}
