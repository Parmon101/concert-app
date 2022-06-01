import React from 'react';
import { BlockName } from '../../component/BlockName/BlockName';
import { Card } from '../../component/Card/Card';
import { SendForm } from '../../component/SendForm/SendForm';
import { Ticket } from '../../component/Ticket/Ticket';
import { Info } from '../../Info/Info';
import styles from './home.module.scss';

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div className={styles.home}>
                <div className={styles.wrapper}>
                    {/* <BlockName /> */}
                    <Ticket items={items} />
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
