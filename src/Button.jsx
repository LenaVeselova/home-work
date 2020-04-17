import React from 'react';
import styles from './Button.module.css'

class Button extends React.Component {
    render () {
        return (
            <div className={styles.button + " " + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;
