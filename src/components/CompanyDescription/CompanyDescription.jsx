import React from 'react';
import { motion } from 'framer-motion';
import {
    FaCode,
    FaMobileAlt,
    FaBullhorn,
    FaVideo,
    FaPalette,
    FaServer,
    FaUsers,
    FaAward,
    FaHandshake,
    FaChartLine,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaPhone
} from 'react-icons/fa';
import { COMPANY_INFO, SOCIAL_PLATFORMS } from '../../utils/constants';
import styles from './CompanyDescription.module.css';

const CompanyDescription = () => {
    const services = [
        {
            icon: FaCode,
            title: 'Développement Web',
            description: 'Sites web personnalisés, e-commerce et applications web performantes'
        },
        {
            icon: FaMobileAlt,
            title: 'Applications Mobile',
            description: 'Solutions mobiles innovantes pour iOS et Android'
        },
        {
            icon: FaBullhorn,
            title: 'Marketing Digital',
            description: 'Stratégies marketing complètes à partir de 100 DT'
        },
        {
            icon: FaVideo,
            title: 'Production Vidéo',
            description: 'Contenu vidéo professionnel pour vos réseaux sociaux'
        },
        {
            icon: FaPalette,
            title: 'UI/UX Design',
            description: 'Designs modernes et expériences utilisateur optimales'
        },
        {
            icon: FaServer,
            title: 'Hébergement',
            description: 'Solutions d\'hébergement sécurisées et fiables'
        }
    ];

    const stats = [
        { icon: FaChartLine, value: COMPANY_INFO.stats.experience, label: 'Ans d\'Expérience' },
        { icon: FaUsers, value: COMPANY_INFO.stats.experts, label: 'Experts' },
        { icon: FaHandshake, value: COMPANY_INFO.stats.brands, label: 'Marques Partenaires' },
        { icon: FaAward, value: COMPANY_INFO.stats.projects, label: 'Projets Réalisés' }
    ];

    return (
        <section id="about" className={styles.companySection}>
            <div className={styles.container}>
                {/* Company Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>
                        À Propos de Redix Digital Solutions
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {COMPANY_INFO.tagline}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className={styles.statsGrid}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statCard}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: 'spring' }}
                            whileHover={{ y: -10 }}
                        >
                            <stat.icon className={styles.statIcon} />
                            <div className={styles.statValue}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Company Description */}
                <motion.div
                    className={styles.descriptionBox}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={styles.descriptionTitle}>
                        Votre Partenaire Digital de Confiance en Tunisie
                    </h3>
                    <p className={styles.descriptionText}>
                        Basée à <strong>{COMPANY_INFO.location}</strong>, Redix Digital Solutions est une agence
                        digitale spécialisée dans la création de solutions web et mobile sur mesure. Nous combinons
                        <strong> marketing audacieux</strong> avec un <strong>développement web et mobile à fort impact</strong> pour
                        donner vie à votre vision digitale.
                    </p>
                    <p className={styles.descriptionText}>
                        Notre équipe de <strong>{COMPANY_INFO.stats.experts} experts</strong> passionnés travaille avec des
                        startups et des entreprises établies pour créer des produits numériques rapides, sécurisés et évolutifs.
                        Nos stratégies sont axées sur la croissance, générant des leads, de l'engagement et un <strong>ROI réel</strong>.
                    </p>
                    <p className={styles.descriptionText}>
                        Avec plus de <strong>{COMPANY_INFO.stats.projects} projets réalisés</strong> et <strong>{COMPANY_INFO.stats.brands} collaborations
                            de marques</strong>, nous avons aidé des entreprises de divers secteurs à réaliser leur transformation
                        digitale et à obtenir un succès mesurable.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className={styles.servicesWrapper}>
                    <h3 className={styles.servicesTitle}>Nos Services Experts</h3>
                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className={styles.serviceCard}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
                            >
                                <div className={styles.serviceIcon}>
                                    <service.icon />
                                </div>
                                <h4 className={styles.serviceTitle}>{service.title}</h4>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <motion.div
                    className={styles.contactSection}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={styles.contactTitle}>Contactez-Nous</h3>
                    <p className={styles.contactSubtitle}>
                        Prêt à transformer votre présence digitale ? Parlons de votre projet !
                    </p>

                    <div className={styles.contactMethods}>
                        <motion.a
                            href={`tel:${COMPANY_INFO.phone}`}
                            className={styles.contactButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPhone /> {COMPANY_INFO.phone}
                        </motion.a>

                        <motion.a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.contactButton} ${styles.whatsapp}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaWhatsapp /> WhatsApp
                        </motion.a>
                    </div>

                    <div className={styles.socialLinks}>
                        <motion.a
                            href={COMPANY_INFO.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            style={{ background: '#1877F2' }}
                        >
                            <FaFacebook />
                        </motion.a>
                        <motion.a
                            href={COMPANY_INFO.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                        >
                            <FaInstagram />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyDescription;
