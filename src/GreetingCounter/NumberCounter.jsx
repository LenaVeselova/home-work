import React from 'react';
import styles from "./NumberCounter.module.css";
import Counter from "./Counter";
import Input from "./Input";
import Button from "./Button";

class NumberCounter extends React.Component {
    state = {
        number: 0,
        value: "",
        error: false
    };

    onGreetUserClick = (e) => {
        let newName = this.state.value;
        if(newName === '') {
            this.setState({error: true})
        } else {
            alert('Привет,' + ' ' + newName + '!');
            this.setState({
                error: false,
                number: this.state.number + 1,
                value: ''
            })
        }
    };

    onNameChange = (e) => {
        this.setState({
            value: e.currentTarget.value,
            error: false
        })
    };

    onKeyPress = e => {
        if(e.key === 'Enter') {
            this.onGreetUserClick()
        }
    };

    render = () => {
        return (
            <div className={styles.numberCounter}>
                <Counter number={this.state.number}/>
                <Input
                    value={this.state.value}
                    onChange={this.onNameChange}
                    onKeyPress={this.onKeyPress}
                    error={this.state.error}
                />
                <Button onClick={this.onGreetUserClick}/>
            </div>
        );
    }
}
export default NumberCounter;
