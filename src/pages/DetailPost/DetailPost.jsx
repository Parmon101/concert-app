import React from 'react';
import { useGetCommentsQuery } from '../../redux/goodApi';
import styles from './detailPost.scss';

export const DetailPost = () => {
    const { data: dataComments = [], isLoading } = useGetCommentsQuery(3);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <>
            <div className="DetailPost">
                <h2>data.post</h2>

                {dataComments.map((el) => (
                    <div key={el.id} className="container">
                        <p>{el.name}</p>
                        <p>{el.body}</p>
                        <span className="time-right">{el.email}</span>
                    </div>
                ))}
            </div>
        </>
    );
};
