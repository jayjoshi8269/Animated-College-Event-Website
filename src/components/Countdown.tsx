import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './useInView';
import { RegistrationModal } from './RegistrationModal';

export function Countdown() {
  const [ref, isInView] = useInView();
  const [showModal, setShowModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  
  // Set target date to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, gradient: 'from-cyan-500 to-blue-600' },
    { label: 'Hours', value: timeLeft.hours, gradient: 'from-blue-500 to-purple-600' },
    { label: 'Minutes', value: timeLeft.minutes, gradient: 'from-purple-500 to-pink-600' },
    { label: 'Seconds', value: timeLeft.seconds, gradient: 'from-pink-500 to-cyan-600' }
  ];

  const handleRegisterClick = () => {
    setIsRegistering(true);
    
    // Animation effect before opening modal
    setTimeout(() => {
      setShowModal(true);
      setIsRegistering(false);
    }, 300);
  };

  return (
    <>
      <section id="events" className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Next Big Event
            </h2>
            <p className="text-xl text-gray-400 mb-2">
              Get Ready for the Ultimate College Festival! 🎉
            </p>
            <p className="text-lg text-cyan-400">
              Tech Fest 2025 - Innovation & Excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${unit.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  
                  <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 group-hover:border-cyan-500 transition-all duration-300">
                    <motion.div
                      key={unit.value}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`text-5xl md:text-6xl mb-2 bg-gradient-to-r ${unit.gradient} bg-clip-text text-transparent`}
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.div>
                    
                    <p className="text-gray-400 uppercase tracking-wider text-sm">
                      {unit.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-8"
            >
              <motion.button
                onClick={handleRegisterClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isRegistering ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                } : {}}
                transition={isRegistering ? { duration: 0.3 } : {}}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                ></motion.div>
                <span className="relative">🎫 Register Now</span>
                
                {isRegistering && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <RegistrationModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
}
