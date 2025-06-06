import React from 'react';
import { Scan, ShieldCheck, BarChart, Users } from 'lucide-react';
import Container from './Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      } : {}}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        rotateY: 2,
        boxShadow: "0 15px 30px rgba(184, 134, 11, 0.2)",
        transition: { duration: 0.3 }
      }}
      className="bg-dark-800 p-4 sm:p-6 md:p-8 rounded-2xl transition-all border-t-4 border-gold relative overflow-hidden group cursor-pointer"
    >
      {/* Animated background gradient */}
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
              opacity: [0, 0.6, 0],
              y: [20, -30],
              x: [0, Math.random() * 40 - 20]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute w-1 h-1 bg-gold-light rounded-full"
            style={{
              left: `${20 + i * 40}%`,
              bottom: '20%'
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
            delay: index * 0.15 + 0.3,
            type: "spring",
            stiffness: 200
          }
        } : {}}
        whileHover={{ 
          rotate: [0, -10, 10, 0],
          scale: 1.1
        }}
        transition={{ duration: 0.6 }}
        className="rounded-full bg-dark-700 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-6 relative z-10 border-2 border-gold/20 group-hover:border-gold/60"
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.15 + 0.5
          }
        } : {}}
        className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-right relative z-10"
      >
        {title}
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.15 + 0.7
          }
        } : {}}
        className="text-sm sm:text-base text-gray-400 text-right relative z-10 leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Shine effect on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
      />
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Scan className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold-light" />,
      title: "دعوات رقمية بباركود فريد",
      description: "نظام متكامل لإنشاء وإدارة الدعوات الرقمية مع باركود خاص لكل ضيف"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold-light" />,
      title: "تحقق فوري باستخدام تطبيق الجوال",
      description: "تطبيق متصل بجهاز PDA للتحقق السريع من صحة الدعوات عند نقطة الدخول"
    },
    {
      icon: <BarChart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold-light" />,
      title: "تقارير دقيقة عن الحضور",
      description: "إحصائيات وتقارير تفصيلية في الوقت الفعلي عن معدلات الحضور والدخول"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold-light" />,
      title: "دعم جميع أنواع الفعاليات",
      description: "حل مثالي للأعراس، المؤتمرات، المعارض، والفعاليات الحكومية في عُمان"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-dark-800 relative overflow-hidden">
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
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-gold/5 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-l from-gold/3 to-transparent rounded-full blur-3xl"
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
            مميزات{' '}
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
            animate={inView ? { width: "80px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gold-gradient mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative z-10">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.8
            }
          } : {}}
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 20px 40px rgba(184, 134, 11, 0.15)"
          }}
          className="mt-12 sm:mt-16 md:mt-20 bg-dark-700 rounded-2xl p-6 sm:p-8 md:p-10 border border-gold/20 relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #B8860B 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center relative z-10">
            <CountUpStat value={50} suffix="+" label="منصة تستخدم InviteFlow" delay={0} />
            <CountUpStat value={99.9} suffix="%" label="دقة في التحقق" delay={0.2} />
            <CountUpStat value={100} suffix="+" label="فعالية شهرياً" delay={0.4} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const CountUpStat: React.FC<{ 
  value: number; 
  suffix: string; 
  label: string; 
  delay: number;
}> = ({ value, suffix, label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(start);
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [inView, value, delay]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.6,
          delay: delay,
          type: "spring",
          stiffness: 200
        }
      } : {}}
      whileHover={{ 
        scale: 1.05,
        y: -3
      }}
      className="cursor-default"
    >
      <motion.p 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-light mb-1 sm:mb-2"
        animate={{ 
          textShadow: [
            "0 0 0px rgba(255, 215, 0, 0)",
            "0 0 15px rgba(255, 215, 0, 0.4)",
            "0 0 0px rgba(255, 215, 0, 0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: delay }}
      >
        {Math.round(count * 10) / 10}{suffix}
      </motion.p>
      <p className="text-gray-400 text-sm sm:text-base md:text-lg">{label}</p>
    </motion.div>
  );
};

export default Features;