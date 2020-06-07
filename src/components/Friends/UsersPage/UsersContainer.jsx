import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC } from '../../redux/Users_reducers';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pagesSize: state.usersPage.pagesSize,
      currentPage: state.usersPage.currentPage
   }
}

let mapDispatchToProps = (dispatch) => {

   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer