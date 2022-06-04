import React from 'react';
import { useParams } from 'react-router-dom';
import { PostCard } from '../../component/PostCard/PostCard';
import { useGetUsersQuery } from '../../redux/goodApi';
import styles from './cardInfo.module.scss';

export const CardInfo = ({ posts }) => {
    const { id } = useParams();

    const [showAllPosts, setShowAllPosts] = React.useState(true);

    const { data: dataUser = [], isLoading } = useGetUsersQuery(id);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className={styles.cardInfo}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td></td>
                        <th colSpan="5" className={styles.name}>
                            {dataUser.name}
                        </th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <th className={styles.textItem}>
                            {isLoading ? '-' : dataUser.address.city}
                        </th>
                        <th className={styles.textItem}>{dataUser.phone}</th>
                        <th className={styles.textItem}>{dataUser.email}</th>
                        <th className={styles.textItem}>
                            {isLoading ? '-' : dataUser.company.name}
                        </th>
                        <th className={styles.textItem}>{isLoading ? '-' : dataUser.company.bs}</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            <div className={styles.posts}>
                <h1>Посты</h1>
                <div onClick={() => setShowAllPosts(!showAllPosts)}>
                    {showAllPosts && true ? 'скрыть все' : 'показать все'}
                    {showAllPosts === true ? (
                        <div className={styles.splitBlock}>
                            {posts
                                ? posts.map((el) => (
                                      <PostCard key={el.id} user={dataUser} data={el} />
                                  ))
                                : 'Нет данных'}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};
