import React, { memo } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import styles from './ServiceList.module.css';

const ServiceList = memo(({ services, accentColor }) => {
    return (
        <div className={styles.serviceList} style={{ '--accent-color': accentColor }}>
            {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                    <div className={styles.serviceHeader}>
                        <FaLightbulb className={styles.serviceIcon} />
                        <h4 className={styles.serviceTitle}>{service.title}</h4>
                    </div>
                    <ul className={styles.serviceItems}>
                        {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className={styles.serviceItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
});

ServiceList.displayName = 'ServiceList';

export default ServiceList;
