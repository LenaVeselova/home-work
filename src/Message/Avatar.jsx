import React from 'react';
import styles from './Message.module.css';

const Avatar = () => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src="https://sun9-67.userapi.com/c10749/u98679/134928874/z_fb3c2aa2.jpg" alt="avatar"/>
            </div>
        </div>
    );
}

export default Avatar;
