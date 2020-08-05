import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../../assets/images/user.png';
import Reloader from '../../../assets/images/25.gif';
import { NavLink } from 'react-router-dom';



let Users = (props) => {

    let smallUsers = Math.ceil(props.totalUsersCount / 100)//уменьшенное количество пользователей 
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>

        <div>  <img src={props.isFetch ? Reloader : ''} /> </div>
        <div className={s.pagesField}>
            {pages.map(p => {
                return <div className={s.page}>
                    <span className={props.currentPage === p && s.currentPage}
                        onClick={(e) => { props.onPageChanged(p); }}>{p},
                        </span>
                </div>
            })}

        </div>
        <div>Общее число пользователей: {props.totalUsersCount}</div>
        {props.users.map(u => <div key={u.id}>

            <div className={s.container}>
                <div className={s.avatar}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div className={s.follower}>
                        {u.follower
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>

                </div>

                <div className={s.field}>
                    <div className={s.first_block}>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.status}> {u.status}</div>
                    </div>
                    <div className={s.second_block}>
                        <div className={s.city}>{/* u.location.city */},</div>
                        <div className={s.country}>{/* u.location.country */}</div>
                    </div>
                </div>

            </div>

        </div>)
        }
    </div>
}


export default Users