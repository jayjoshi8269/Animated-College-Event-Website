import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function RocketScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative h-64 w-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-500 to-blue-600 rounded-full"
          style={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-2xl"
        style={{ 
          bottom: `${scrollProgress}%`,
          marginBottom: '-16px'
        }}
        transition={{ duration: 0.1 }}
      >
        🚀
      </motion.div>
    </div>
  );
}
