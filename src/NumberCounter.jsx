import React from 'react';
import styles from "./NumberCounter.module.css";

class NumberCounter extends React.Component {
    userNameCurrentRef = React.createRef();
    state = {number: 0};

    onGreetUserName = () => {
        let newName = this.userNameCurrentRef.current.value;
        this.userNameCurrentRef.current.value = '';
        alert('Привет,' + ' ' + newName + '!');
        this.setState({number: this.state.number + 1});
    };

    render () {
        return (
            <div className={styles.numberCounter}>
                <span>{this.state.number}</span>
                <input type="text" placeholder={'Напиши свое имя!'} ref={this.userNameCurrentRef}/>
                <button onClick={this.onGreetUserName}>Жми!</button>
            </div>
        );
    }
}
export default NumberCounter;
