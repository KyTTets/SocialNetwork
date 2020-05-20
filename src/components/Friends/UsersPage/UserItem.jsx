import React from 'react'
import s from './UserItem.module.css'


const UserItem = (props) => {

   return (
      <div>
         <div className={s.container}>
            <div className={s.avatar}>
               <div><img src={props.avatar} /> </div>
               <div className={s.follower}> Follow </div>

            </div>

            <div className={s.field}>
               <div className={s.name}>{props.userName}</div>
               <div className={s.location}> city </div>
            </div>

         </div>

      </div>
   )
}

export default UserItem

