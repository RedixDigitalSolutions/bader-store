import React, { memo } from 'react';
import { FaChartLine, FaUsers, FaVideo, FaBullhorn } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { marketingImpact } from '../../utils/data';
import styles from './MarketingImpact.module.css';

const chartData = [
    { platform: 'Instagram', engagement: 85, conversions: 72 },
    { platform: 'Facebook', engagement: 78, conversions: 65 },
    { platform: 'TikTok', engagement: 92, conversions: 68 }
];

const MarketingImpact = memo(() => {
    return (
        <div className={styles.impactSection}>
            <div className={styles.impactHeader}>
                <FaChartLine className={styles.headerIcon} />
                <h2 className={styles.impactTitle}>{marketingImpact.title}</h2>
                <p className={styles.impactDescription}>{marketingImpact.description}</p>
            </div>

            <div className={styles.statisticsGrid}>
                {marketingImpact.statistics.map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                        <div className={styles.statMetric}>{stat.metric}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                        <div className={styles.statDescription}>{stat.description}</div>
                    </div>
                ))}
            </div>

            <div className={styles.chartContainer}>
                <h3 className={styles.chartTitle}>Performance par Plateforme Sociale</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="platform" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip
                            contentStyle={{
                                background: '#fff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px'
                            }}
                        />
                        <Legend />
                        <Bar dataKey="engagement" fill="#3b82f6" name="Engagement (%)" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="conversions" fill="#ec4899" name="Conversions (%)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                    <FaBullhorn className={styles.benefitIcon} />
                    <h4 className={styles.benefitTitle}>Visibilité Maximale</h4>
                    <p className={styles.benefitText}>
                        Atteignez des milliers de clients potentiels chaque jour avec une stratégie multi-plateformes
                    </p>
                </div>

                <div className={styles.benefitCard}>
                    <FaUsers className={styles.benefitIcon} />
                    <h4 className={styles.benefitTitle}>Ciblage Précis</h4>
                    <p className={styles.benefitText}>
                        Touchezbénéficiez exactement votre audience idéale grâce à la publicité ciblée sur les réseaux sociaux
                    </p>
                </div>

                <div className={styles.benefitCard}>
                    <FaVideo className={styles.benefitIcon} />
                    <h4 className={styles.benefitTitle}>Contenu Engageant</h4>
                    <p className={styles.benefitText}>
                        Le contenu vidéo génère 3x plus d'engagement et améliore significativement vos taux de conversion
                    </p>
                </div>
            </div>

            <div className={styles.callToAction}>
                <h3 className={styles.ctaTitle}>
                    Prêt à Transformer Votre Présence Digitale?
                </h3>
                <p className={styles.ctaText}>
                    Investir dans le marketing digital, c'est investir dans la croissance de votre entreprise.
                    Nos solutions complètes vous donnent tous les outils nécessaires pour réussir en ligne.
                </p>
            </div>
        </div>
    );
});

MarketingImpact.displayName = 'MarketingImpact';

export default MarketingImpact;
