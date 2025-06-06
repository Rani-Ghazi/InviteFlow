import React from 'react';
import { CheckSquare, Phone, MapPin } from 'lucide-react';
import Container from './Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96895454284', '_blank');
  };

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      } : {}}
      className="bg-dark-900 text-white py-8 sm:py-10 md:py-12 relative overflow-hidden"
    >
      {/* Animated background elements - simplified for mobile */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-gold/10 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-l from-gold/8 to-transparent rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.2
              }
            } : {}}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <CheckSquare className="h-6 w-6 sm:h-8 sm:w-8 text-gold-light" />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className="text-xl sm:text-2xl font-bold"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255, 215, 0, 0)",
                    "0 0 10px rgba(255, 215, 0, 0.3)",
                    "0 0 0px rgba(255, 215, 0, 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                InviteFlow
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.4
                  }
                } : {}}
                className="text-gray-400 text-xs sm:text-sm"
              >
                نظام إدارة الدعوات الرقمية
              </motion.span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.4
              }
            } : {}}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 text-gray-400"
          >
            <motion.button 
              onClick={handleWhatsAppClick}
              whileHover={{ 
                scale: 1.02,
                color: "#FFD700",
                y: -1
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 sm:gap-3 hover:text-gold-light transition-all cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gold-light" />
              </motion.div>
              <span className="text-base sm:text-lg">+96895454284</span>
            </motion.button>
            
            <motion.div 
              whileHover={{ 
                scale: 1.02,
                color: "#FFD700",
                y: -1
              }}
              className="flex items-center gap-2 sm:gap-3 hover:text-gold-light transition-all cursor-default"
            >
              <motion.div
                animate={{ 
                  y: [0, -1, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gold-light" />
              </motion.div>
              <span className="text-base sm:text-lg">مسقط – عُمان</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.6
            }
          } : {}}
          className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700/50 text-center"
        >
          <motion.p 
            className="text-gray-500 text-xs sm:text-sm"
            animate={{ 
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2025 InviteFlow. جميع الحقوق محفوظة.
          </motion.p>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;