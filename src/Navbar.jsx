import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Animated} from "react-animated-css"

class Navbar extends React.Component {
    render() {

        return (
            <div className={styles.navbar}>
                <Animated animationIn="fadeInLeft" isVisible={true} animationInDuration={2000}>
                    <div>
                        <div className={styles.item}>
                            <NavLink onlyActiveOnIndex={true} activeClassName={styles.activeLink} to='/main'>Главная</NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink activeClassName={styles.activeLink} to='/monday'>Понедельник</NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink activeClassName={styles.activeLink} to='/tuesday'>Вторник</NavLink>
                        </div>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default Navbar;
