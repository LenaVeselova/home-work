import React from 'react';
import styles from './Monday.module.css';
import Name from "./Name";
import Characters from "./Characters/Characters";
import Message from "./Message/Message";
import NumberCounter from "./GreetingCounter/NumberCounter";

class Monday extends React.Component {
    render () {

        return (
            <div className={styles.monday}>
                <Name/>
                <Characters/>
                <Message/>
                <NumberCounter/>
            </div>
        );
    }
}

export default Monday;
