import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostContainer';



const Profile = (props) => {


  return (
    <div className={s.profilePage}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
export default Profile;