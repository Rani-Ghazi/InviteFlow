import React, { useState, useEffect } from 'react';
import { ArrowRight, Scan, ShieldCheck, Clock } from 'lucide-react';
import Container from './Container';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/Image_fx (1) copy.jpg",
      alt: "نظام إدارة الدعوات الرقمية - التحقق بالباركود",
      title: "مناسبة الشيخ أحمد الكندي",
      stats: { guests: "300 مدعو", attendance: "98% نسبة الحضور" }
    },
    {
      src: "/Image_fx (5).jpg", 
      alt: "نظام إدارة الدعوات الرقمية - الاستقبال الذكي",
      title: "فعالية وزارة التراث والسياحة",
      stats: { guests: "500 مدعو", attendance: "100% نسبة الحضور" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96895454284', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-dark-900 relative">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full h-full bg-gold-curve"
      />
      
      {/* Floating particles - reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gold-light rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '10%'
            }}
          />
        ))}
      </div>

      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Text Content - Mobile First */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-right relative z-10 order-2 lg:order-1">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-gradient-to-r from-gold-light to-gold-dark px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-semibold mb-2 cursor-default"
            >
              نظام إدارة الدعوات الرقمية
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              InviteFlow – نظام ذكي لإدارة الدعوات الرقمية{' '}
              <motion.span 
                className="gold-text block sm:inline"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                بالباركود
              </motion.span>{' '}
              في عُمان
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              خدمة مخصصة لشركات تنظيم الفعاليات. دعوات إلكترونية بباركود فريد، تحقق فوري عند الدخول، بدون فوضى أو تزوير.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end"
            >
              <motion.button 
                onClick={handleWhatsAppClick}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(184, 134, 11, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold-gradient text-dark-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 text-base sm:text-lg font-bold relative overflow-hidden group w-full sm:w-auto"
              >
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light"
                />
                <span className="relative z-10">احصل عليه الآن</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 rtl:rotate-180 relative z-10" />
                </motion.div>
              </motion.button>
              
              <motion.div 
                variants={itemVariants}
                className="text-gold-light text-xs sm:text-sm flex items-center justify-center text-center"
              >
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  دفعة واحدة فقط - بدون اشتراك شهري
                </motion.span>
              </motion.div>
            </motion.div>
            
            {/* Features - Mobile Optimized */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 pt-4 sm:pt-6"
            >
              {[
                { icon: ShieldCheck, text: "أمان عالي" },
                { icon: Scan, text: "سهولة الاستخدام" },
                { icon: Clock, text: "توفير الوقت" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <span className="text-gray-300 text-sm sm:text-base">{item.text}</span>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gold-light" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Image Section - Mobile Optimized */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 relative order-1 lg:order-2"
          >
            <motion.div 
              whileHover={{ 
                rotate: 0,
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(184, 134, 11, 0.2)"
              }}
              className="gold-border bg-dark-800 p-2 sm:p-3 rounded-xl shadow-xl transform -rotate-1 sm:-rotate-3 transition-all duration-700 relative overflow-hidden group"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-dark-700 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ 
                      opacity: 0, 
                      scale: 1.2, 
                      rotateY: 90,
                      filter: "blur(10px)"
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotateY: 0,
                      filter: "blur(0px)"
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      rotateY: -90,
                      filter: "blur(10px)"
                    }}
                    transition={{ 
                      duration: 1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent flex items-end">
                      <motion.div 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="p-3 sm:p-4 md:p-6 text-white w-full"
                      >
                        <motion.p 
                          className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {images[currentImageIndex].title}
                        </motion.p>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                          <motion.span
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {images[currentImageIndex].stats.guests}
                          </motion.span>
                          <motion.span 
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-1 h-1 bg-gold-light rounded-full"
                          />
                          <motion.span
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          >
                            {images[currentImageIndex].stats.attendance}
                          </motion.span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Mobile-optimized indicators */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex gap-2 sm:gap-3">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                        index === currentImageIndex 
                          ? 'w-6 sm:w-8 h-2 sm:h-3 bg-gold-light' 
                          : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/60'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {index === currentImageIndex && (
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 4, ease: "linear" }}
                          className="absolute inset-0 bg-gold-dark rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
                
                {/* Mobile-optimized progress bar */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4">
                  <div className="w-full h-0.5 sm:h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-gold-light to-gold-dark rounded-full relative"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 bg-white/30 w-1/3"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;