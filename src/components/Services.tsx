import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Calendar, Users, Lightbulb, Sparkles } from 'lucide-react';
import { ServiceDetailsModal } from './ServiceDetailsModal';

export function Services() {
  const [ref, isInView] = useInView();
  const [selectedService, setSelectedService] = useState<{
    title: string;
    icon: React.ReactNode;
    gradient: string;
  } | null>(null);

  const services = [
    {
      icon: <Calendar size={40} />,
      title: 'College Festivals',
      description: 'Complete management of cultural fests, annual days, and celebrations',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Users size={40} />,
      title: 'Technical Events',
      description: 'Hackathons, tech symposiums, and innovation challenges',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Workshops & Seminars',
      description: 'Expert-led sessions, skill development programs, and conferences',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Sports Events',
      description: 'Inter-college competitions, tournaments, and sports festivals',
      gradient: 'from-pink-500 to-cyan-600'
    }
  ];

  return (
    <>
      <section id="services" className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400">
              Making Every College Event Unforgettable
            </p>
            <p className="text-sm text-cyan-400 mt-2">
              👆 Click on any service to explore details
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                ></div>
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-cyan-500 group-hover:shadow-xl group-hover:shadow-cyan-500/20">
                  <motion.div 
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 text-white`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">
                    {service.description}
                  </p>

                  {/* Click indicator */}
                  <motion.div
                    className="text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Click to explore →
                  </motion.div>

                  <div className="absolute inset-0 border-2 border-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Ripple effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.5, 
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: `radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailsModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
}
