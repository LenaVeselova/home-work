import React from 'react';
import styles from './Input.module.css'

class Input extends React.Component {

    render = () => {
        debugger
        let errorClass = this.props.error ? styles.error : '';

        return (
            <div className={styles.input}>
                <input
                    type="text"
                    placeholder={'Напиши свое имя!'}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className={errorClass}
                    onKeyPress={this.props.onKeyPress}
                />
            </div>
        );
    }
}

export default Input;
