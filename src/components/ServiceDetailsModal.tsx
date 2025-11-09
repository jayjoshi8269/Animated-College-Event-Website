import { motion, AnimatePresence } from 'motion/react';
import { X, Music, Users, Code, Lightbulb, Trophy, Zap, Laptop, Brain, Target } from 'lucide-react';

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    icon: React.ReactNode;
    gradient: string;
  } | null;
}

const serviceDetails: Record<string, any> = {
  'College Festivals': {
    emoji: '🎭',
    description: 'Comprehensive cultural fest management with entertainment and performance events',
    categories: [
      {
        name: 'Dance Competitions',
        icon: <Music size={24} />,
        items: ['Solo Dance', 'Group Dance', 'Duet Performance', 'Folk Dance', 'Western Dance', 'Hip Hop Battle']
      },
      {
        name: 'Music Events',
        icon: <Music size={24} />,
        items: ['Solo Singing', 'Band Performance', 'Battle of Bands', 'Classical Music', 'DJ Night', 'Live Concert']
      },
      {
        name: 'Arts & Drama',
        icon: <Target size={24} />,
        items: ['Street Play', 'Mimicry', 'Stand-up Comedy', 'Fashion Show', 'Art Exhibition', 'Photography Contest']
      }
    ]
  },
  'Technical Events': {
    emoji: '💻',
    description: 'Cutting-edge technical competitions and innovation challenges',
    categories: [
      {
        name: 'Hackathons',
        icon: <Code size={24} />,
        items: ['24-Hour Hackathon', 'Theme-based Coding', 'Open Innovation', 'AI/ML Challenge', 'Blockchain Hack', 'IoT Innovation']
      },
      {
        name: 'Design & Development',
        icon: <Laptop size={24} />,
        items: ['Web Design Competition', 'UI/UX Challenge', 'App Development', 'Game Development', 'Graphics Design', 'Video Editing']
      },
      {
        name: 'No-Code/Low-Code',
        icon: <Zap size={24} />,
        items: ['No-Code App Building', 'Low-Code Platform Challenge', 'Automation Contest', 'Workflow Design', 'Chatbot Creation', 'Website Builder Race']
      }
    ]
  },
  'Workshops & Seminars': {
    emoji: '🎓',
    description: 'Expert-led learning sessions and skill development programs',
    categories: [
      {
        name: 'Coding Workshops',
        icon: <Brain size={24} />,
        items: ['KBC - Kon Banega Coder', 'Python Bootcamp', 'Web Development Workshop', 'Data Science Session', 'Cybersecurity Training', 'Cloud Computing']
      },
      {
        name: 'Soft Skills',
        icon: <Lightbulb size={24} />,
        items: ['Leadership Training', 'Communication Skills', 'Public Speaking', 'Interview Preparation', 'Resume Building', 'Personality Development']
      },
      {
        name: 'Industry Sessions',
        icon: <Users size={24} />,
        items: ['Guest Lectures', 'Industry Expert Talks', 'Startup Stories', 'Career Guidance', 'Alumni Meetup', 'Panel Discussions']
      }
    ]
  },
  'Sports Events': {
    emoji: '🏆',
    description: 'Inter-college sports tournaments and fitness competitions',
    categories: [
      {
        name: 'Team Sports',
        icon: <Trophy size={24} />,
        items: ['Cricket Tournament', 'Volleyball Championship', 'Football League', 'Basketball Cup', 'Kabaddi Competition', 'Relay Races']
      },
      {
        name: 'Individual Sports',
        icon: <Target size={24} />,
        items: ['Badminton Singles', 'Table Tennis', 'Chess Championship', 'Carrom Board', 'Athletics', '100m Sprint']
      },
      {
        name: 'Fun Sports',
        icon: <Zap size={24} />,
        items: ['Tug of War', 'Sack Race', 'Three-Legged Race', 'Obstacle Course', 'E-Sports Tournament', 'Indoor Games']
      }
    ]
  }
};

export function ServiceDetailsModal({ isOpen, onClose, service }: ServiceDetailsModalProps) {
  if (!service) return null;

  const details = serviceDetails[service.title];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: -30 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-gray-900 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
          >
            {/* Glowing Background Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 pointer-events-none`}></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10 bg-gray-800/50 rounded-full p-2 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            </button>

            {/* Content */}
            <div className="relative overflow-y-auto max-h-[90vh] p-8 md:p-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-10"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.6 }}
                  className="inline-block text-7xl mb-4"
                >
                  {details.emoji}
                </motion.div>
                
                <h2 className={`text-4xl md:text-5xl mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.title}
                </h2>
                
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  {details.description}
                </p>
              </motion.div>

              {/* Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.categories.map((category: any, index: number) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing border on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full group-hover:border-cyan-500/50 transition-all duration-300">
                      {/* Category Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white`}>
                          {category.icon}
                        </div>
                        <h3 className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                          {category.name}
                        </h3>
                      </div>

                      {/* Items List */}
                      <ul className="space-y-2">
                        {category.items.map((item: string, itemIndex: number) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 + itemIndex * 0.05 }}
                            className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                          >
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="text-sm">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Animated corner accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-30 transition-opacity"
                        style={{
                          background: `radial-gradient(circle at top right, rgba(6, 182, 212, 0.3), transparent)`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-10"
              >
                <p className="text-gray-400 mb-4">
                  Interested in organizing these events?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                  className={`px-8 py-4 bg-gradient-to-r ${service.gradient} rounded-full relative overflow-hidden group`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative">Contact Us to Get Started 🚀</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
