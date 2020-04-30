import React from 'react';
import s from './Music.module.css';
import MusicContainer from './MusicContainer'
import Player from './Player';



const Music = (props) => {
    let state = props.musicPage;
    let musicElements = state.songs.map (m=> <Player 
        song={m.song} 
        musicName={m.musicName}
        key={m.id}/>)
    return (
        <div>
            {musicElements}

        </div>
    )
}





export default Music