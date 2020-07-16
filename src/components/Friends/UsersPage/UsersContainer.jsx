import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, isFetcher } from '../../redux/Users_reducers';
import * as axios from 'axios';


class UsersContainer extends React.Component {
   debugger;
   componentDidMount() {
      this.props.isFetcher(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
         .then(response => {
            this.props.isFetcher(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

         });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.isFetcher(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
         .then(response => {
            this.props.isFetcher(false);
            this.props.setUsers(response.data.items);

         });
   }

   render() {
      return <Users totalUsersCount={this.props.totalUsersCount}
         pagesSize={this.props.pagesSize}
         isFetch={this.props.isFetch}
         currentPage={this.props.currentPage}
         users={this.props.users}
         onPageChanged={this.onPageChanged}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
      />
   }
}


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pagesSize: state.usersPage.pagesSize,
      currentPage: state.usersPage.currentPage,
      isFetch: state.usersPage.isFetch
   }
}

/* let mapDispatchToProps = (dispatch) => {

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
         dispatch(isFetcherAC(isFetch))
      }
   }
} */
/* let mapDispatchToProps = (dispatch) => {

   return {
      follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, isFetcher
   }
} */

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, isFetcher })(UsersContainer);

