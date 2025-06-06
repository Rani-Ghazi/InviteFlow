import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Quote, User } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
  index?: number
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className,
  index = 0
}: TestimonialCardProps) {
  const Card = href ? 'a' : motion.div
  
  return (
    <Card
      {...(href ? { href } : {})}
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.01, 
        translateY: -4,
        rotateY: 1,
        boxShadow: "0 20px 40px rgba(184, 134, 11, 0.2)"
      }}
      className={cn(
        "flex flex-col rounded-2xl relative overflow-hidden group cursor-pointer",
        "bg-dark-700/60 backdrop-blur-sm",
        "p-4 sm:p-6 md:p-8",
        "border border-gold/15 hover:border-gold/40",
        "transition-all duration-500",
        "h-full",
        className
      )}
    >
      {/* Animated background on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 0.05, scale: 1 }}
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
              left: `${30 + i * 40}%`,
              bottom: '20%'
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 200
        }}
        whileHover={{ 
          rotate: [0, -10, 10, 0],
          scale: 1.05
        }}
        className="relative z-10"
      >
        <Quote className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-gold-light mb-3 sm:mb-4 md:mb-6 opacity-60" />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1 + 0.4
        }}
        className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed flex-grow relative z-10"
      >
        {text}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1 + 0.6
        }}
        className="mt-auto flex items-center gap-3 sm:gap-4 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          {author.avatar ? (
            <>
              <img
                src={author.avatar}
                alt={author.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gold/30"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute inset-0 rounded-full border-2 border-gold-light"
              />
            </>
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-600 border-2 border-gold/30 flex items-center justify-center">
              <User className="h-5 w-5 sm:h-6 sm:w-6 text-gold-light" />
            </div>
          )}
        </motion.div>
        
        <div>
          <motion.h3 
            className="text-base sm:text-lg font-semibold text-white"
            whileHover={{ x: 3 }}
          >
            {author.name}
          </motion.h3>
          <motion.p 
            className="text-xs sm:text-sm text-gold-light"
            whileHover={{ x: 3 }}
          >
            {author.handle}
          </motion.p>
        </div>
      </motion.div>

      {/* Shine effect on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
      />
    </Card>
  )
}