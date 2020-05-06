import React from 'react';
import styles from './Characters.module.css';
import CharacterItem from "./CharacterItem";

    class Characters extends React.Component {
        state = {
            characters: [
                {name: 'January girl'},
                {name: 'Lazy'},
                {name: 'On the go'}
            ],
        };
    render() {
        let characterItem = this.state.characters.map(c =>
            <CharacterItem
                key={c.toString()}
                character={c.name}
                isLazy={c.name === 'Lazy'}/>);
        return (
            <div className={styles.characters}>
                {characterItem}
            </div>
        );
    }
}

export default Characters;