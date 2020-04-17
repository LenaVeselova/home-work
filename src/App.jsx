import React from 'react';
import './App.css';
import Name from "./Name";
import Message from "./Message";
import Characters from "./Characters";
import Button from "./Button";
import './App.css'
import NumberCounter from "./NumberCounter";
import styles from "./NumberCounter.module.css";

class App extends React.Component {

    render = () => {
        return (
            <div className='App'>
                <div className="container">
                    <Name/>
                    <Characters/>
                    <Message/>
                    <NumberCounter/>
                    {/*<div className='buttons'>*/}
                    {/*    <Button className='default' type="default">Default</Button>*/}
                    {/*    <Button className='primary' type="primary">Primary</Button>*/}
                    {/*    <Button className='danger' type="danger">Danger</Button>*/}
                    {/*    <Button className='default' type="default" loading={true}>*/}
                    {/*        <img className='loading' src="https://i.gifer.com/H0bj.gif" />*/}
                    {/*        <span>Loading</span>*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default App;
