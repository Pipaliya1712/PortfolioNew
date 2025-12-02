// components/AboutSection.js
import { motion, Variants } from 'framer-motion';
import { Coffee, ChefHat, Bike } from 'lucide-react';
import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] // Using cubic-bezier array for easing
      }
    }
  };



  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className={styles.aboutContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className={styles.textContent}
            variants={textVariants}
          >
            <div className={styles.introText}>
              <p className={styles.leadParagraph}>
                I started as a Full Stack Developer and evolved into a Gen AI specialist, 
                working with LLMs and cutting-edge AI technologies to build solutions that matter.
              </p>
            </div>
            
            <div className={styles.storyContent}>
              <p>
                My journey began with traditional web development using React, Node.js, and building 
                scalable applications. As AI technology emerged, I was fascinated by the potential 
                of Large Language Models and decided to dive deep into the world of Generative AI.
              </p>
              
              <p>
                At Silvertouch Technologies, I&apos;ve successfully bridged the gap between full-stack 
                development and AI integration.
              </p>
            </div>
            
            <div className={styles.personalSection}>
              <h3 className={styles.personalTitle}>Beyond the Code</h3>
              <div className={styles.personalInterests}>
                <div className={styles.interest}>
                  <Coffee className={styles.interestIcon} />
                  <span className={styles.interestText}>Coffee enthusiast who crafts the perfect brew and believes the best ideas come over great coffee</span>
                </div>
                <div className={styles.interest}>
                  <ChefHat className={styles.interestIcon} />
                  <span className={styles.interestText}>Culinary enthusiast who creates amazing dishes and finds that cooking sparks creativity</span>
                </div>
                <div className={styles.interest}>
                  <Bike className={styles.interestIcon} />
                  <span className={styles.interestText}>Weekend warrior exploring new routes and clearing my mind on two wheels</span>
                </div>
              </div>
            </div>
            
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.number}>7+</span>
                <span className={styles.label}>Projects delivered</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>100%</span>
                <span className={styles.label}>Client satisfaction</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>1+</span>
                <span className={styles.label}>Years building AI</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}