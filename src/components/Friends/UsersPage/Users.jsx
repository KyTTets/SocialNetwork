import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';


let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items)
        });
    }





    return (<div>
        {
            props.users.map(u => <div key={u.id}>

                <div className={s.container}>
                    <div className={s.avatar}>
                        <div><img src={u.avatar} /> </div>
                        <div className={s.follower}>
                            {u.follower
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>

                    </div>

                    <div className={s.field}>
                        <div className={s.first_block}>
                            <div className={s.name}>{u.userName}</div>
                            <div className={s.status}> {u.status}</div>
                        </div>
                        <div className={s.second_block}>
                            <div className={s.city}>{u.location.city},</div>
                            <div className={s.country}>{u.location.country}</div>
                        </div>
                    </div>

                </div>

            </div>

            )
        }</div>
    )
}
export default Users