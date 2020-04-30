import React from 'react';
import s from './Dialogitem.css';
import { NavLink } from 'react-router-dom';




const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className= {`${s.dialogs} ${s.active}`}> 
            <NavLink to={path}>
                <img src={props.image} />
                <div className={s.userName}>{props.name} </div>  

            </NavLink>
        </div>
    )
    debugger;
}

export default DialogItem