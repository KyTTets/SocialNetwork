import React from 'react';
import style from './Users.module.css';
import UserItem from './UserItem'

let Users = (props) => {

    let state = props.usersPage;
    let userElements = state.users.map(a => <UserItem userName={a.userName} avatar={a.avatar} key={a.id} />)

    return (

        <div> {userElements} </div>
    )
}
export default Users