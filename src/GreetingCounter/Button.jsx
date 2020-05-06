import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {

    render = () => {

        return (
            <div className={styles.button}>
                <button onClick={this.props.onClick}>Жми!</button>
            </div>
        );
    }
}

export default Button;
