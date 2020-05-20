import React from 'react'
import s from './UserItem.module.css'



const UserItem = (props) => {



   return (
      <div>
         <div className={s.container}>
            <div className={s.avatar}>
               <div><img src={props.avatar} /> </div>
               <div className={s.follower}>
                  {props.follower ?
                     <button>unfollow</button> :
                     <button>follow</button>}
               </div>

            </div>

            <div className={s.field}>
               <div className={s.first_block}>
                  <div className={s.name}>{props.userName}</div>
                  <div className={s.status}> {props.status}</div>
               </div>
               <div className={s.second_block}>
                  <div className={s.city}>{props.city},</div>
                  <div className={s.country}>{props.country}</div>
               </div>
            </div>

         </div>

      </div>
   )
}

export default UserItem

