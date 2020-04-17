import React from 'react';
import styles from './Characters.module.css';
import CharacterItem from "./CharacterItem";

    class Characters extends React.Component {
    render() {
        let characters = ['January girl', 'Romantic', 'Moving'];
        return (
            <div className={styles.characters}>
                {characters.map(c => <CharacterItem key={c.toString()} character={c} isRomantic={c === 'Romantic' ? true : false}/>)}
            </div>
        );
    }
}
export default Characters;