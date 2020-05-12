import React from 'react'
import s from './UserItem.module.css'


const UserItem = (props) => {

   return (
      <div>
         <div classname={s.container}>
            <div className={s.avatar}>
               <div><img src={props.avatar} /> </div>
               <div className={s.follower}> Follow </div>

            </div>

            <div className={s.field}>{props.userName}</div>

         </div>
         <div>prosto</div>
      </div>
   )
}

export default UserItem

