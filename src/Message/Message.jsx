import React from 'react';
import styles from './Message.module.css';
import Avatar from "./Avatar";
import MessageItem from "./MessageItem";

const Message = () => {
    return (
        <div className={styles.message}>
            <Avatar/>
            <MessageItem/>

        </div>
    );
}

export default Message;
