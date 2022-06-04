import axios from 'axios';
import React from 'react';
import { BlockName } from '../../component/BlockName/BlockName';
import { Card } from '../../component/Card/Card';
import { SendForm } from '../../component/SendForm/SendForm';
import { Ticket } from '../../component/Ticket/Ticket';
import { Info } from '../../Info/Info';
import { useGetCommentsQuery, useGetPostsQuery, useGetUsersQuery } from '../../redux/goodApi';
import styles from './home.module.scss';

export const Home = ({ users }) => {
    const { data: dataUser = [], isLoading } = useGetUsersQuery(1);
    const { dataPosts = [], isLoadingPosts } = useGetPostsQuery();
    const { dataComments = [], isLoadingComments } = useGetCommentsQuery();

    return (
        <>
            <div className={styles.home}>
                <div className={styles.wrapper}>
                    {/* <BlockName /> */}
                    <Ticket />
                </div>
                <div className={styles.splitBlock}>
                    <div>
                        <Info />
                    </div>
                    <div>
                        <SendForm />
                    </div>
                </div>
            </div>
        </>
    );
};
