import React from 'react';
import { useParams } from 'react-router-dom';
import { useAddCommentMutation, useGetCommentsQuery, useGetUsersQuery } from '../../redux/goodApi';
import styles from './detailPost.scss';
import { Popup } from './Popup/popup';

export const DetailPost = ({ posts }) => {
    const { idPost, id } = useParams();
    const [newCommentName, setNewCommentName] = React.useState('');
    const [newCommentEmail, setNewCommentEmail] = React.useState('');
    const [newCommentBody, setNewCommentBody] = React.useState('');
    const { data: dataUser = [] } = useGetUsersQuery(id);
    const { data: dataComments = [], isLoading } = useGetCommentsQuery(idPost);

    const [addComment, { isError }] = useAddCommentMutation();

    console.log(newCommentName);

    const handleAddComment = async () => {
        if (newCommentName) {
            await addComment({
                name: newCommentName,
                email: newCommentEmail,
                body: newCommentBody,
            }).unwrap();
        }
        setNewCommentName('');
        setNewCommentEmail('');
        setNewCommentBody('');
        setIsOpen(!isOpen);
        alert(
            `отправлены данные: имя - ${newCommentName} email - ${newCommentEmail} текст - ${newCommentBody}`,
        );
    };

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
                                <h2>Добавить комментарий</h2>
                                имя
                                <input
                                    type="text"
                                    value={newCommentName}
                                    onChange={(e) => setNewCommentName(e.target.value)}
                                />
                                имейл
                                <input
                                    type="text"
                                    value={newCommentEmail}
                                    onChange={(e) => setNewCommentEmail(e.target.value)}
                                />
                                текст
                                <input
                                    type="text"
                                    value={newCommentBody}
                                    onChange={(e) => setNewCommentBody(e.target.value)}
                                />
                                <button onClick={handleAddComment}>отправить</button>
                            </>
                        }
                    />
                )}
            </div>
        </>
    );
};
