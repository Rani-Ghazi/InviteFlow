import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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
    <section 
      id="testimonials" 
      className={cn(
        "bg-background text-foreground overflow-hidden relative",
        "py-12 sm:py-16 md:py-24 lg:py-32 px-4",
        className
      )}
    >
      {/* Animated background elements - simplified for mobile */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 25, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/6 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-gold/8 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            x: [0, -30, 0]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/6 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-gold/6 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Floating particles - reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: [100, -50],
              x: [0, Math.random() * 200 - 100]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-gold-light rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0%'
            }}
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-8 md:gap-16 relative z-10">
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
          className="flex flex-col items-center gap-3 sm:gap-4 md:gap-8 px-4"
        >
          <motion.h2 
            className="max-w-[720px] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white"
            animate={inView ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {title}
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "80px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gold-gradient rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.3
              }
            } : {}}
            className="text-sm sm:text-base md:text-xl max-w-[600px] font-medium text-gray-400 leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                rotateY: 1,
                boxShadow: "0 20px 40px rgba(184, 134, 11, 0.15)"
              }}
              className="h-full"
            >
              <TestimonialCard 
                {...testimonial}
                index={i}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}