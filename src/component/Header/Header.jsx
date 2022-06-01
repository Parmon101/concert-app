import React from 'react';
import { Home } from '../../pages/Home/Home';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <>
            <div className={styles.root}>
                <h1 className={styles.title}>CONCERT CLUB</h1>
                <div className={styles.end}>
                    <button className={styles.Btn}>Версия для слабовидящих</button>
                    <button className={styles.Btn}>Мой профиль</button>
                </div>
            </div>
            <Home />
        </>
    );
};
