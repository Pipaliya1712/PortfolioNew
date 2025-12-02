// components/SkillsSection.js
import { motion, Variants } from 'framer-motion';
import { Code, Database, Brain, Cloud, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from '../styles/SkillsSection.module.css';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "#4F46E5",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "CSS3/Tailwind", level: 88 },
      { name: "HTML5", level: 92 }
    ]
  },
  {
    title: "Backend Development", 
    icon: Database,
    color: "#059669",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 92 },
      { name: "Microservices", level: 75 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "#DC2626",
    skills: [
      { name: "Large Language Models", level: 88 },
      { name: "RAG Systems", level: 85 },
      { name: "Python", level: 82 },
      { name: "OpenAI APIs", level: 90 },
      { name: "NLP", level: 80 },
      { name: "Computer Vision", level: 75 }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "#7C3AED",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 78 },
      { name: "Linux", level: 85 },
      { name: "Git", level: 92 },
      { name: "CI/CD", level: 76 },
      { name: "Vercel", level: 88 }
    ]
  }
];

const topSkills = [
  { name: "Full Stack Development", percentage: 95, description: "End-to-end web applications" },
  { name: "Gen AI Integration", percentage: 90, description: "LLMs, RAG systems, AI chatbots" },
  { name: "System Architecture", percentage: 85, description: "Scalable, maintainable solutions" },
  { name: "Problem Solving", percentage: 92, description: "Complex technical challenges and competitive programming" }
];

// Circular Progress Component with responsive sizing
type CircularProgressProps = {
  percentage: number;
  size?: number;
};

const CircularProgress = ({ percentage, size = 120 }: CircularProgressProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Adjust size and stroke based on screen size
  const actualSize = isMobile ? (window.innerWidth <= 480 ? 90 : 80) : size;
  const radius = actualSize / 2 - 10;
  const strokeWidth = isMobile ? 6 : 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.circularProgress}>
      <svg width={actualSize} height={actualSize} className={styles.progressRing}>
        <circle
          cx={actualSize / 2}
          cy={actualSize / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={actualSize / 2}
          cy={actualSize / 2}
          r={radius}
          fill="none"
          stroke="#ffffff"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          style={{ transformOrigin: `${actualSize / 2}px ${actualSize / 2}px` }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className={styles.progressText}>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const progressBarVariants: Variants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
    })
  };

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Top Skills with Circular Progress */}
        <motion.div 
          className={styles.topSkillsSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className={styles.subsectionTitle}>Core Competencies</h3>
          <div className={styles.topSkillsGrid}>
            {topSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className={styles.topSkillCard}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <CircularProgress percentage={skill.percentage} />
                <h4 className={styles.topSkillName}>{skill.name}</h4>
                <p className={styles.topSkillDesc}>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Detailed Skills Categories */}
        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div 
                key={index} 
                className={styles.skillCategory}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.categoryHeader}>
                  <div 
                    className={styles.categoryIcon}
                    style={{ backgroundColor: category.color + '20', color: category.color }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className={styles.skillItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <motion.div 
                          className={styles.progressFill}
                          style={{ backgroundColor: category.color }}
                          variants={progressBarVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Specialization */}
        <motion.div 
          className={styles.specialization}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.specializationContent}>
            <Zap className={styles.specializationIcon} />
            <h3 className={styles.specializationTitle}>What Makes Me Different</h3>
            <p className={styles.specializationText}>
              I bridge the gap between traditional full-stack development and cutting-edge AI technologies. 
              My unique combination of solid engineering fundamentals and deep AI expertise allows me to 
              build intelligent applications that are both technically sound and genuinely useful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}