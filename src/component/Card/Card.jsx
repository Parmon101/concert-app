import React from 'react';
import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../../redux/goodApi';
import styles from './card.module.scss';

export const Card = ({ data }) => {
    const { data: dataUser = [], isLoading } = useGetUsersQuery(data.id);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{dataUser.name}</div>
            <div className={styles.city}>{dataUser.address.city}</div>
            <Link to={`/cardInfo/${data.id}`}>
                <button>Смотреть профиль</button>
            </Link>
        </div>
    );
};
