import React from 'react';
import style from './Friends.module.css';
const Friends = (props) => {
    return (
        <div className={style.container}>
            <div className={style.box1}>
                box1
            </div>

            <div className={style.box2}>
                box2
            </div>

            <div className={style.box3}>
                box3
            </div>

            <div className={style.box4}>
                box4
            </div>

            <div className={style.box5}>
                box5
            </div>
        </div>
    )
}
export default Friends