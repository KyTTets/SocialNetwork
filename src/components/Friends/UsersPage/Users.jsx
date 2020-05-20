import React from 'react';
import style from './Users.module.css';
import UserItem from './UserItem'

let Users = (props) => {

    let state = props.usersPage;
    let userElements = state.users.map(u => <UserItem
        userName={u.userName}
        avatar={u.avatar}
        status={u.status}
        city={u.location.city}
        country={u.location.country}
        follower={u.follower}
        key={u.id} />)

    return (

        <div> {userElements} </div>
    )
}
export default Users