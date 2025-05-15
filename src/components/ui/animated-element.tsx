import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fadeIn' | 'slideIn' | 'scale' | 'fadeInLeft' | 'fadeInRight' | 'none';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
  customAnimation?: any;
  hover?: boolean;
  getHoverAnimation?: () => any;
}

export const AnimatedElement = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
  triggerOnce = true,
  customAnimation,
  hover = false,
  getHoverAnimation,
}: AnimatedElementProps) => {
  // Animation presets
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay }
    },
    slideIn: {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay }
    },
    none: {}
  };

  // Choose animation or use custom
  const animationProps = customAnimation || animations[animation];
  
  return (
    <motion.div
      className={className}
      {...animationProps}
      viewport={{ once: triggerOnce }}
      whileHover={hover && getHoverAnimation ? getHoverAnimation() : undefined}
    >
      {children}
    </motion.div>
  );
}; 