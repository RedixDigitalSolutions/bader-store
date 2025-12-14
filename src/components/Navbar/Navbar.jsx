import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { COMPANY_INFO, NAV_LINKS } from '../../utils/constants';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <motion.div
                    className={styles.logo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img src="/bader-store/assets/redix.png" alt="Redix Digital Solutions" />
                    <span className={styles.logoText}></span>
                </motion.div>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {NAV_LINKS.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={styles.navLink}
                            >
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Contact Buttons */}
                <div className={styles.contactButtons}>
                    <motion.a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className={styles.phoneButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaPhone /> {COMPANY_INFO.phone}
                    </motion.a>
                    <motion.a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaWhatsapp /> WhatsApp
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className={styles.mobileNavLinks}>
                            {NAV_LINKS.map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ x: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <div className={styles.mobileContactButtons}>
                            <a href={`tel:${COMPANY_INFO.phone}`} className={styles.mobilePhoneButton}>
                                <FaPhone /> Appelez-nous
                            </a>
                            <a
                                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mobileWhatsappButton}
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
