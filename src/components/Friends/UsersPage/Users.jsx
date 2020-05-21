import React from 'react';
import s from './Users.module.css';


let Users = (props) => {

    let state = props.usersPage;

    debugger;
    return (
        <div>
            {
                state.users.map(u => <div key={u.id}>

                    <div className={s.container}>
                        <div className={s.avatar}>
                            <div><img src={u.avatar} /> </div>
                            <div className={s.follower}>
                                {u.follower ?
                                    <button onClick={() => { props.follow(u.id) }}>unfollow</button> :
                                    <button onClick={() => { props.unfollow(u.id) }}>follow</button>}
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