import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCommentsQuery, useGetUsersQuery } from '../../redux/goodApi';
import styles from './detailPost.scss';
import { Popup } from './Popup/popup';

export const DetailPost = ({ posts }) => {
    const { idPost, id } = useParams();
    const { data: dataUser = [] } = useGetUsersQuery(id);
    const { data: dataComments = [], isLoading } = useGetCommentsQuery(3);

    const [isOpen, setIsOpen] = React.useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <>
            <div className="DetailPost">
                <>
                    {posts.length > 1 ? (
                        <div className="container">
                            <h2>{dataUser.name}</h2>
                            <div>{posts[idPost - 1].body}</div>
                            <span className="time-right">{dataUser.email}</span>
                        </div>
                    ) : (
                        '-'
                    )}
                </>
                <h2>Комментарии</h2>
                {dataComments.map((el) => (
                    <div key={el.id} className="container">
                        <p>{el.name}</p>
                        <p>{el.body}</p>
                        <span className="time-right">{el.email}</span>
                    </div>
                ))}
                <button onClick={togglePopup}>добавить комментарий</button>
                {isOpen && (
                    <Popup
                        handleclose={togglePopup}
                        content={
                            <>
                                <h2>попап</h2>
                                <form>
                                    имя
                                    <input type="text" />
                                    имейл
                                    <input type="text" />
                                    текст
                                    <input type="text" />
                                    <button>отправить</button>
                                </form>
                            </>
                        }
                    />
                )}
            </div>
        </>
    );
};
