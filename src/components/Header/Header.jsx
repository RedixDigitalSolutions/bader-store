import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaPhone } from 'react-icons/fa';
import { COMPANY_INFO } from '../../utils/constants';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.container}>
                    <div className={styles.contactInfo}>
                        <span className={styles.contactItem}>
                            <FaEnvelope /> {COMPANY_INFO.email}
                        </span>
                        <span className={styles.contactItem}>
                            <FaPhone /> {COMPANY_INFO.phone}
                        </span>
                    </div>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialIcon}><FaInstagram /></a>
                        <a href="#" className={styles.socialIcon}><FaFacebook /></a>
                        <a href="#" className={styles.socialIcon}><FaTiktok /></a>
                    </div>
                </div>
            </div>

            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src="/bader-store/assets/redix.png" alt="Redix Digital Solutions" />
                    </div>
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>{COMPANY_INFO.name}</h1>
                        <p className={styles.tagline}>{COMPANY_INFO.tagline}</p>
                        <p className={styles.description}>{COMPANY_INFO.description}</p>
                    </div>
                </div>
            </div>

            <div className={styles.heroSection}>
                <div className={styles.container}>
                    <h2 className={styles.heroTitle}>
                        Solutions Digitales pour Détaillants de Sacs
                    </h2>
                    <p className={styles.heroSubtitle}>
                        Deux packages adaptés à votre budget et ambitions
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
