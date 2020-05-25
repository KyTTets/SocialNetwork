import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../assets/images/user.png'


class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>

                    <div className={s.container}>
                        <div className={s.avatar}>
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} /> </div>
                            <div className={s.follower}>
                                {u.follower
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}



export default Users