import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <>
            <div className={styles.root}>
                <Link to="/">
                    <h1 className={styles.title}>CONCERT CLUB</h1>
                </Link>
                <div className={styles.end}>
                    <button className={styles.Btn}>Версия для слабовидящих</button>
                    <button className={styles.Btn}>Мой профиль</button>
                </div>
            </div>
        </>
    );
};
