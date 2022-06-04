import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '../../redux/goodApi';
import { fetchUsers } from '../../redux/slices/userSlice';
import { Card } from '../Card/Card';
import styles from './ticket.module.scss';

export const Ticket = () => {
    const { data: users = [], isLoading } = useGetUsersQuery();

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className={styles.ticket}>
            <div className={styles.splitBlock}>
                <div className={styles.buyText}>Купили билеты</div>
                <div className={styles.buyText}>{`${users.length} / 1000`}</div>
            </div>
            <div className={styles.cards}>
                {users.map((el) => (
                    <Card key={el.id} data={el} />
                ))}
            </div>
        </div>
    );
};
