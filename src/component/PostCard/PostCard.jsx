import React from 'react';
import { Link } from 'react-router-dom';
import styles from './postCard.module.scss';

export const PostCard = ({ data, user }) => {
    return (
        <div>
            <div className={styles.postCard}>
                <Link to={'detailPost'}>
                    <div className={styles.splitBlock}>
                        <div>{user.name}</div>
                        <div>time</div>
                    </div>
                    <div className={styles.postText}>{data.body}</div>
                </Link>
            </div>
        </div>
    );
};
