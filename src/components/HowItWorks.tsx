import React from 'react';
import { FileEdit, Scan, CheckCircle, BarChart } from 'lucide-react';
import Container from './Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <FileEdit className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gold-light" />,
      title: "أدخل بيانات الضيوف",
      description: "قم بإدخال قائمة المدعوين وبياناتهم في النظام"
    },
    {
      icon: <Scan className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gold-light" />,
      title: "النظام ينشئ الدعوات تلقائيًا",
      description: "يتم إنشاء دعوات رقمية مع باركود فريد لكل ضيف"
    },
    {
      icon: <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gold-light" />,
      title: "الضيف يستلم الدعوة الرقمية",
      description: "إرسال الدعوات عبر البريد الإلكتروني أو الواتساب"
    },
    {
      icon: <BarChart className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gold-light" />,
      title: "التحقق عند الدخول",
      description: "مسح الباركود والتحقق الفوري من صحة الدعوة"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-dark-900 relative overflow-hidden">
      {/* Animated background elements - simplified for mobile */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-gold/10 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-l from-gold/8 to-transparent rounded-full blur-3xl"
        />
      </div>

      <Container>
        <motion.div
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
          className="text-center mb-12 sm:mb-16 md:mb-20 relative z-10"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
            animate={inView ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
          >
            كيف يعمل{' '}
            <motion.span 
              className="text-gold-light relative"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(255, 215, 0, 0)",
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                  "0 0 0px rgba(255, 215, 0, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              InviteFlow
            </motion.span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gold-gradient mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Enhanced connecting line - hidden on mobile */}
          <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 hidden lg:block">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 2, delay: 1 }}
              className="h-full bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 origin-left rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-light to-transparent w-1/4"
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(184, 134, 11, 0.2)"
                }}
                className="relative"
              >
                <div className="bg-dark-800 p-4 sm:p-6 md:p-8 rounded-2xl border border-gold/20 text-center h-full flex flex-col items-center relative overflow-hidden group cursor-pointer">
                  {/* Animated background on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-gold-light to-gold-dark rounded-2xl"
                  />
                  
                  {/* Floating particles on hover - reduced for mobile */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20, x: 0 }}
                        whileHover={{ 
                          opacity: [0, 0.8, 0],
                          y: [20, -40],
                          x: [0, Math.random() * 60 - 30]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                        className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gold-light rounded-full"
                        style={{
                          left: `${25 + i * 50}%`,
                          bottom: '15%'
                        }}
                      />
                    ))}
                  </div>

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { 
                      scale: 1, 
                      rotate: 0,
                      transition: {
                        duration: 0.8,
                        delay: index * 0.3 + 0.5,
                        type: "spring",
                        stiffness: 200
                      }
                    } : {}}
                    whileHover={{ 
                      rotate: [0, -15, 15, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.8 }}
                    className="rounded-full bg-dark-700 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 border-4 border-dark-900 shadow-2xl relative z-10 group-hover:border-gold/40"
                  >
                    {step.icon}
                  </motion.div>
                  
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.3 + 0.7,
                        type: "spring",
                        stiffness: 300
                      }
                    } : {}}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)"
                    }}
                    className="bg-gold-gradient text-dark-900 text-lg sm:text-xl font-bold rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6 relative z-10 shadow-lg"
                  >
                    {index + 1}
                  </motion.span>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.3 + 0.9
                      }
                    } : {}}
                    className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 relative z-10 text-center"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.3 + 1.1
                      }
                    } : {}}
                    className="text-sm sm:text-base text-gray-400 relative z-10 leading-relaxed text-center"
                  >
                    {step.description}
                  </motion.p>

                  {/* Shine effect on hover */}
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;