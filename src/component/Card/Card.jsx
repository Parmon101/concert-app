import React from 'react';
import styles from './card.module.scss';

export const Card = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.city}>{data.address.city}</div>
            <button>Смотреть профиль</button>
        </div>
    );
};
