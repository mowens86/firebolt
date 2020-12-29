import React from 'react';
import styles from './player.module.scss';

export default function MusicPlayer(props) {

    return (
    <div>
        <iframe 
            title="Deezer Music Player"
            className={styles.Player} 
            scrolling="no" 
            frameBorder="0" 
            allowtransparency="true" 
            src={`https://www.deezer.com/plugins/player?format=classic&autoplay=${props.autoplaysetting}&playlist=false&color=EF233C&layout=dark&size=medium&type=tracks&id=${props.musictrack}&app_id=443402`}>
        </iframe>
    </div>        

    )
}



