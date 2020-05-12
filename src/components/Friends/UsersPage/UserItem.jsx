import React from 'react'
import style from './UserItem.module.css'


const UserItem = (props) => {

   debugger;
   return (
      <div>
         <span>
            <div><img src={props.avatar}></img></div>
            <div>{props.userName}</div>
         </span>

         <span></span>
      </div>
   )
}

export default UserItem

