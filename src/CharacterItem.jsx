import React from 'react';
import styles from './CharacterItem.module.css';
import Characters from "./Characters";

class CharacterItem extends React.Component {
    render () {
        let isNotOrdinary = this.props.isRomantic ? (styles.characterItem + ' ' + styles.notOrdinary) : styles.characterItem;
        return (
            <div className={isNotOrdinary}>
                <span>
                    {this.props.character}
                </span>
            </div>
        );
    }
}
export default CharacterItem;
