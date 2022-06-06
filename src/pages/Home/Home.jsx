import React from 'react';
import { BlockName } from '../../component/BlockName/BlockName';
import { Card } from '../../component/Card/Card';
import { SendForm } from '../../component/SendForm/SendForm';
import { Ticket } from '../../component/Ticket/Ticket';
import { Info } from '../../Info/Info';
import styles from './home.module.scss';

export const Home = ({ users }) => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.wrapper}>
                    {/* <BlockName /> */}
                    <Ticket />
                </div>
                <div className={styles.splitBlock}>
                    <div>{/* <Info /> */}</div>
                    <div>{/* <SendForm /> */}</div>
                </div>
            </div>
        </>
    );
};
