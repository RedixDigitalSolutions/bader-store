import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaMobile, FaVideo, FaArrowRight } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
            }
        }
    };

    const features = [
        { icon: FaRocket, text: 'Web Development', color: '#3b82f6' },
        { icon: FaChartLine, text: 'Digital Marketing', color: '#ec4899' },
        { icon: FaMobile, text: 'Mobile Apps', color: '#10b981' },
        { icon: FaVideo, text: 'Video Production', color: '#f59e0b' }
    ];

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.backgroundShapes}>
                <motion.div
                    className={styles.shape1}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className={styles.shape2}
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -180, -360],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                />
                <motion.div
                    className={styles.shape3}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
            </div>

            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.content} variants={itemVariants}>
                    <motion.div
                        className={styles.badge}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className={styles.badgeDot} />
                        Agence Digitale Tunisienne #1
                    </motion.div>

                    <motion.h1 className={styles.title} variants={itemVariants}>
                        Transformez Votre
                        <motion.span
                            className={styles.gradientText}
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            {' '}Présence Digitale
                        </motion.span>
                    </motion.h1>

                    <motion.p className={styles.subtitle} variants={itemVariants}>
                        Solutions complètes de développement web, mobile et marketing digital
                        pour propulser votre entreprise vers le succès en ligne
                    </motion.p>

                    <motion.div className={styles.ctaButtons} variants={itemVariants}>
                        <motion.button
                            className={styles.primaryCta}
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Démarrer Maintenant <FaArrowRight />
                        </motion.button>
                        <motion.button
                            className={styles.secondaryCta}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Voir nos Projets
                        </motion.button>
                    </motion.div>

                    <motion.div className={styles.features} variants={itemVariants}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureItem}
                                whileHover={{ y: -5 }}
                                style={{ '--feature-color': feature.color }}
                            >
                                <feature.icon className={styles.featureIcon} />
                                <span>{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.heroImage}
                    variants={floatingVariants}
                    animate="animate"
                >
                    <div className={styles.imageWrapper}>
                        <motion.div
                            className={styles.glowEffect}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <img src="/bader-store/assets/redix.png" alt="Redix Digital Solutions" />
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className={styles.mouse}>
                    <div className={styles.wheel} />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
