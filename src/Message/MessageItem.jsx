import React from 'react';
import styles from './Message.module.css';

const MessageItem = () => {
    return (
        <div className={styles.message}>
            <div className={styles.cloud}>
                <span className={styles.userName}>Lena</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                  </span>
                <span className={styles.time}>10:23</span>
            </div>
        </div>
    );
}

export default MessageItem;
