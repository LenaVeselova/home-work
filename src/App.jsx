import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import NavMain from "./NavMain";

class App extends React.Component {

    render = () => {

        return (
            <HashRouter>
                <div className='app'>
                    <div className="container">
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Route
                                path='/main'
                                render={() => <NavMain/>}
                            />
                            <Route
                                path='/monday'
                                render={() => <Monday/>}
                            />
                            <Route
                                path='/tuesday'
                                render={() => <Tuesday/>}
                            />
                        </div>

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
            </HashRouter>
        );
    }
}

export default App;
