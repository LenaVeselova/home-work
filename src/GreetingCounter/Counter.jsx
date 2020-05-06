import React from 'react';
import styles from "./Counter.module.css";

class Counter extends React.Component {

    render = () => {
        return (
            <div className={styles.counter}>
                <span>{this.props.number}</span>
            </div>
        );
    }
}

export default Counter;
