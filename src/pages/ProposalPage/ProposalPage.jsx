import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import CompanyDescription from '../../components/CompanyDescription/CompanyDescription';
import PackageCard from '../../components/PackageCard/PackageCard';
import ServiceList from '../../components/ServiceList/ServiceList';
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';
import VideoShowcase from '../../components/VideoShowcase/VideoShowcase';
import MarketingImpact from '../../components/MarketingImpact/MarketingImpact';
import { packages } from '../../utils/data';
import styles from './ProposalPage.module.css';

const ProposalPage = () => {
    return (
        <div className={styles.proposalPage}>
            <Navbar />
            <Hero />
            <CompanyDescription />

            <main className={styles.mainContent}>
                <section id="packages" className={styles.packagesSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Nos Packages pour Détaillants de Sacs</h2>
                        <p className={styles.sectionSubtitle}>
                            Choisissez la solution adaptée à votre budget et vos ambitions
                        </p>
                        <div className={styles.packagesGrid}>
                            <PackageCard packageData={packages.bader} />
                            <PackageCard packageData={packages.rosa} isPremium />
                        </div>
                    </div>
                </section>

                <section id="services" className={styles.servicesSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Services Détaillés par Package</h2>
                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceColumn}>
                                <h3 className={styles.columnTitle} style={{ color: packages.bader.color }}>
                                    {packages.bader.name}
                                </h3>
                                <ServiceList
                                    services={packages.bader.services}
                                    accentColor={packages.bader.color}
                                />
                            </div>
                            <div className={styles.serviceColumn}>
                                <h3 className={styles.columnTitle} style={{ color: packages.rosa.color }}>
                                    {packages.rosa.name}
                                </h3>
                                <ServiceList
                                    services={packages.rosa.services}
                                    accentColor={packages.rosa.color}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.comparisonSection}>
                    <div className={styles.container}>
                        <ComparisonTable />
                    </div>
                </section>

                <section className={styles.marketingSection}>
                    <div className={styles.container}>
                        <MarketingImpact />
                    </div>
                </section>

                <section id="portfolio" className={styles.videoSection}>
                    <div className={styles.container}>
                        <VideoShowcase />
                    </div>
                </section>

                <section id="contact" className={styles.finalCta}>
                    <div className={styles.container}>
                        <div className={styles.ctaBox}>
                            <h2 className={styles.ctaTitle}>
                                Commencez Votre Transformation Digitale Aujourd'hui
                            </h2>
                            <p className={styles.ctaText}>
                                Contactez Redix Digital Solutions pour discuter de vos besoins et découvrir comment
                                nous pouvons propulser votre entreprise vers le succès en ligne.
                            </p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+21692861655" className={styles.primaryButton}>
                                    Appelez-nous
                                </a>
                                <a href="https://wa.me/21692861655" className={styles.secondaryButton}>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>&copy; 2025 Redix Digital Solutions. Tous droits réservés.</p>
                    <p>Votre partenaire digital de confiance à {packages.bader ? 'Manouba, ' : ''}Tunisie</p>
                </div>
            </footer>
        </div>
    );
};

export default ProposalPage;
