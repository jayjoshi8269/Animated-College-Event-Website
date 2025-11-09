import { motion } from 'motion/react';
import { useInView } from './useInView';

export function Team() {
  const [ref, isInView] = useInView();

  const teamMembers = [
    {
      name: 'Hemant  Patidar',
      role: 'CEO & Founder',
      emoji: '👔',
      gradient: 'from-cyan-500 via-blue-500 to-purple-500'
    },
    {
      name: 'Harsh Nigam',
      role: 'Technical Head',
      emoji: '💻',
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      name: 'Aayush Pancholi ',
      role: 'Inventor',
      emoji: '🔬',
      gradient: 'from-purple-500 via-pink-500 to-cyan-500'
    },
    {
      name: 'Rohan Nimanpure',
      role: 'Planner',
      emoji: '📋',
      gradient: 'from-pink-500 via-cyan-500 to-blue-500'
    },
    {
      name: 'Bhavya Patel ',
      role: 'Operations Manager',
      emoji: '⚙️',
      gradient: 'from-cyan-500 via-blue-500 to-purple-500'
    }
  ];

  return (
    <section id="team" className="relative py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400">
            The Brilliant Minds Behind Every Success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glowing Border Animation */}
              <motion.div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    'linear-gradient(0deg, #06b6d4, #3b82f6)',
                    'linear-gradient(90deg, #06b6d4, #3b82f6)',
                    'linear-gradient(180deg, #06b6d4, #3b82f6)',
                    'linear-gradient(270deg, #06b6d4, #3b82f6)',
                    'linear-gradient(360deg, #06b6d4, #3b82f6)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ filter: 'blur(8px)' }}
              ></motion.div>

              <div className="relative bg-gray-800 rounded-2xl p-6 text-center h-full border border-gray-700 group-hover:border-transparent transition-all duration-300">
                {/* Avatar with Gradient Background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-5xl relative`}
                >
                  <div className="absolute inset-0 rounded-full animate-pulse opacity-50 bg-gradient-to-r from-cyan-400 to-blue-500 blur-md"></div>
                  <span className="relative">{member.emoji}</span>
                </motion.div>

                <motion.h3
                  className="text-xl mb-2 text-white"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {member.name}
                </motion.h3>

                <motion.p
                  className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {member.role}
                </motion.p>

                {/* Hover Effect Lines */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-30"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <span className="relative flex items-center space-x-2">
              <span>✨ Join Our Team</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
