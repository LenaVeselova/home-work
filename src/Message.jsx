import React from 'react';
import styles from './Message.module.css';

const Message = () => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src="https://sun9-67.userapi.com/c10749/u98679/134928874/z_fb3c2aa2.jpg" alt="avatar"/>
            </div>
            <div className={styles.cloud}>
                <span className={styles.userName}>Lena</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                  </span>
                <span className={styles.time}>10:23</span>
            </div>
        </div>
    );
}

export default Message;
