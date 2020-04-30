import React from 'react';
import s from './Music.module.css';




const Player = (props) => {
    
 
    return (
        <div>
            <div>
                {props.musicName}
            </div>

            <audio src= {props.song} controls>
                <track label/>
            </audio>

        </div>
    )
}





export default Player