import React, { memo } from 'react';
import { FaCheck, FaStar, FaRocket } from 'react-icons/fa';
import styles from './PackageCard.module.css';

const PackageCard = memo(({ packageData, isPremium = false }) => {
    const { name, subtitle, targetAudience, color, pricePerPost, videoPrice, advertisingBudget, website, benefits } = packageData;

    const calculateMonthlyTotal = () => {
        let total = advertisingBudget;
        if (website?.included) {
            total += website.hosting;
        }
        return total;
    };

    return (
        <div
            className={`${styles.card} ${isPremium ? styles.premium : ''}`}
            style={{ '--accent-color': color }}
        >
            {isPremium && (
                <div className={styles.badge}>
                    <FaStar /> Premium
                </div>
            )}

            <div className={styles.cardHeader}>
                <h3 className={styles.packageName}>{name}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.targetAudience}>{targetAudience}</p>
            </div>

            <div className={styles.pricing}>
                <div className={styles.priceBox}>
                    <span className={styles.priceLabel}>Contenu</span>
                    <span className={styles.price}>
                        {videoPrice || pricePerPost} DT
                    </span>
                    <span className={styles.priceUnit}>/ {videoPrice ? 'vidéo' : 'post'}</span>
                </div>

                <div className={styles.priceBox}>
                    <span className={styles.priceLabel}>Publicité</span>
                    <span className={styles.price}>{advertisingBudget} DT</span>
                    <span className={styles.priceUnit}>/ mois</span>
                </div>

                {website?.included && (
                    <div className={styles.priceBox}>
                        <span className={styles.priceLabel}>Site Web</span>
                        <span className={styles.price}>{website.hosting} DT</span>
                        <span className={styles.priceUnit}>/ mois*</span>
                    </div>
                )}
            </div>

            <div className={styles.totalCost}>
                <span>Coût mensuel estimé:</span>
                <strong>{calculateMonthlyTotal()} DT/mois</strong>
            </div>

            <div className={styles.benefits}>
                <h4 className={styles.benefitsTitle}>
                    <FaRocket /> Avantages Clés
                </h4>
                <ul className={styles.benefitsList}>
                    {benefits.map((benefit, index) => (
                        <li key={index} className={styles.benefitItem}>
                            <FaCheck className={styles.checkIcon} />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {website?.included && (
                <div className={styles.footnote}>
                    * Domaine: {website.domainCost} DT (frais unique)
                </div>
            )}

            <button className={styles.ctaButton}>
                Choisir ce Package
            </button>
        </div>
    );
});

PackageCard.displayName = 'PackageCard';

export default PackageCard;
