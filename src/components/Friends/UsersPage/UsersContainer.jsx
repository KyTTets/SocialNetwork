import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/Users_reducers';

let mapStateToProps = (state) => {
   return {
      usersPage: state.usersPage
   }
}

let mapDispatchToProps = (dispatch) => {
   debugger;
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer