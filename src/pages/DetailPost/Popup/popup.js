import React from 'react';
import styles from './popup.module.scss';

export const Popup = (props) => {
    return (
        <div className={styles.popupBox}>
            <div className={styles.box}>
                <button className={styles.btnClose} onClick={props.handleclose}>
                    x
                </button>
                {props.content}
            </div>
        </div>
    );
};
