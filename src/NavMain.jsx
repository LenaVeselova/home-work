import React from 'react';
import styles from './NavMain.module.css';

class NavMain extends React.Component {
    render () {

        return (
            <div className={styles.navMain}>
                <div className='navImg'>
                    <img src="https://sun9-45.userapi.com/AP5eSXQ_KElvtoJYj34bEallRzxMSFv59ei94g/dI5MYDIz4SE.jpg" alt="react"/>
                </div>
            </div>
        );
    }
}

export default NavMain;
