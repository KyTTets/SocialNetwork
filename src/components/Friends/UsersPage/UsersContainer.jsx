import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, isFetchAC } from '../../redux/Users_reducers';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pagesSize: state.usersPage.pagesSize,
      currentPage: state.usersPage.currentPage,
      isFetch: state.usersPage.isFetch
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
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      },
      isFetcher: (isFetch) => {
         dispatch(isFetchAC(isFetch))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer