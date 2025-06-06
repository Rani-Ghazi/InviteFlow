import React, { useState, useEffect } from 'react';
import { Menu, X, CheckSquare } from 'lucide-react';
import Container from './Container';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96895454284', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'features', label: 'المميزات' },
    { id: 'how-it-works', label: 'كيف يعمل' },
    { id: 'testimonials', label: 'آراء العملاء' }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-md shadow-2xl shadow-gold/5 py-2 sm:py-3' 
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <CheckSquare className="h-6 w-6 sm:h-8 sm:w-8 text-gold-light" />
            </motion.div>
            <motion.span 
              className="text-xl sm:text-2xl font-bold text-white"
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
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 lg:gap-8"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#FFD700",
                    textShadow: "0 0 8px rgba(255, 215, 0, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-gray-300 hover:text-gold-light transition-all duration-300 cursor-pointer relative text-sm lg:text-base"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-light"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(184, 134, 11, 0.4)",
                  rotate: [0, -1, 1, 0]
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="bg-gold-gradient text-dark-900 px-4 py-2 lg:px-6 lg:py-2 rounded-lg transition-all font-bold relative overflow-hidden group text-sm lg:text-base"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative z-10">تواصل معنا</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden absolute top-full left-0 right-0 bg-dark-900/98 backdrop-blur-md shadow-2xl border-t border-gold/20"
            >
              <motion.div 
                className="py-4 px-4 flex flex-col space-y-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ 
                      x: 8,
                      color: "#FFD700",
                      textShadow: "0 0 8px rgba(255, 215, 0, 0.6)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-gold-light transition-all text-right cursor-pointer text-base py-2 border-b border-gray-700/50 last:border-b-0"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.button
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(184, 134, 11, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleWhatsAppClick();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gold-gradient text-dark-900 px-6 py-3 rounded-lg transition-all font-bold text-center mt-2 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <span className="relative z-10">تواصل معنا</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Navbar;