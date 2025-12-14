import React, { memo } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styles from './ComparisonTable.module.css';
import { comparisonData } from '../../utils/data';

const ComparisonTable = memo(() => {
    const renderCell = (value) => {
        if (value === 'Non inclus' || value === '—') {
            return (
                <span className={styles.notIncluded}>
                    <FaTimesCircle /> {value}
                </span>
            );
        }
        if (value.includes('Inclus') || value.includes('Gratuit')) {
            return (
                <span className={styles.included}>
                    <FaCheckCircle /> {value}
                </span>
            );
        }
        return value;
    };

    return (
        <div className={styles.tableContainer}>
            <h2 className={styles.tableTitle}>Comparaison Détaillée des Packages</h2>
            <div className={styles.tableWrapper}>
                <table className={styles.comparisonTable}>
                    <thead>
                        <tr>
                            <th className={styles.featureColumn}>Caractéristique</th>
                            <th className={styles.baderColumn}>Bader Store</th>
                            <th className={styles.rosaColumn}>Rosa Store</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                                <td className={styles.featureCell}>{row.feature}</td>
                                <td className={styles.baderCell}>{renderCell(row.bader)}</td>
                                <td className={styles.rosaCell}>{renderCell(row.rosa)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
});

ComparisonTable.displayName = 'ComparisonTable';

export default ComparisonTable;
