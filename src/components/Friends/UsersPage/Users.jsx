import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../assets/images/user.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={s.pagesField}>
                {pages.map(p => {
                    return <div >
                        <span className={this.props.currentPage === p && s.currentPage}
                            onClick={() => { this.props.setCurrentPage(p) }}>{p},
                        </span>
                    </div>
                })}

            </div>
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