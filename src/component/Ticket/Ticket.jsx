import React from 'react';
import { Card } from '../Card/Card';
import styles from './ticket.module.scss';

export const Ticket = ({ items }) => {
    return (
        <div>
            <div className={styles.buyText}>Купили билеты</div>
            <div className={styles.cards}>
                {items.map((el) => (
                    <Card key={el.id} data={el} />
                ))}
            </div>
        </div>
    );
};
