import React from 'react';
import s from './Friendsitem.module.css';
const FriendsItem = (props) => {


    return (
        <div className={s.container}>
            <div className={s.box}>
                <div>
                    {props.name}
                </div>
                <div>
                    <img src={props.image} />
                </div>
            </div>
        </div>
    )
}
export default FriendsItem