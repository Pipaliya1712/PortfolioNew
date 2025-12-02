// components/ProjectsSection.js
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import styles from '../styles/ProjectsSection.module.css';

const projects = [
  {
    id: 1,
    title: "My Bot Genie",
    year: "2024",
    type: "Full Stack Gen AI Development",
    client: "Personal Project",
    description: "RAG-based web application with 95% accuracy, handling 10,000+ daily queries. 40% faster response time and 25% user engagement boost.",
    link: "mybotgenie.ai",
    technologies: ["Next.js", "NextAuth.js", "GraphQL", "Node.js", "RAG"]
  },
  {
    id: 2,
    title: "ResumeAI Parser",
    year: "2024",
    type: "AI/ML, Document Processing",
    client: "Personal Project",
    description: "AI-powered resume parsing system with ATS compatibility checker. Processes 1000+ resumes daily with 92% parsing accuracy and real-time optimization suggestions.",
    link: "careerflowai.silvertouch.com",
    technologies: ["Python", "NLP", "Machine Learning", "PDF Processing", "React", "Node.js"]
  },
  {
    id: 3,
    title: "SAP Agentic AI",
    year: "2024",
    type: "AI Integration, Enterprise",
    client: "Silvertouch Technologies",
    description: "Intelligent SAP system with automated workflows and demand prediction (95% accuracy). 20% cost reduction and 40% operational efficiency improvement.",
    link: "sapcopilot.silvertouch.com",
    technologies: ["SAP", "Agentic AI", "Machine Learning", "Automation"]
  },
  {
    id: 4,
    title: "ADTS System",
    year: "2024",
    type: "ML Integration, Full Stack",
    client: "Silvertouch Technologies",
    description: "ML-powered driving test system with camera-based analysis. 25% test accuracy improvement, 5,000+ tests/month with 99% uptime.",
    link: "#",
    technologies: ["Next.js", "Machine Learning", "GraphQL", "Computer Vision"]
  },
  {
    id: 5,
    title: "Entity Verification",
    year: "2023",
    type: "Backend Architecture",
    client: "Silvertouch Technologies",
    description: "Real-time verification system with advanced matching algorithms. 60% accuracy increase and 50% faster verification times.",
    link: "#",
    technologies: ["Node.js", "Real-time Processing", "Advanced Algorithms"]
  },
  {
    id: 6,
    title: "IPSA - REC App",
    year: "2023",
    type: "Mobile Development, IoT",
    client: "Silvertouch Technologies",
    description: "React Native app for electricity distribution monitoring with geotagging. 30% user adoption increase and 15% reduction in distribution losses.",
    link: "#",
    technologies: ["React Native", "Geotagging", "IoT", "Cross-platform"]
  }
];

export default function ProjectsSection() {
  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants : Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          What I&apos;ve Built
        </motion.h2>
        
        <motion.div 
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className={styles.projectCard}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.link !== "#" && (
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link 
                      href={`https://${project.link}`} 
                      className={styles.projectLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </motion.div>
                )}
              </div>
              
              <div className={styles.projectMeta}>
                <span className={styles.year}>{project.year}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.type}>{project.type}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.client}>For {project.client}</span>
              </div>
              
              <p className={styles.description}>
                {project.description}
              </p>
              
              <motion.div 
                className={styles.technologies}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className={styles.techTag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}