import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.posts}>
    <div className={s.post}>
      <img src='https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg' />
     
      {props.message}

    </div>
    <div className={s.item}>
      <img src='http://raskraskid.ru/wp-content/uploads/raskraski-serdechko-lajk-like-900x794.jpg' />

      {props.likeValue}

    </div>
    </div>
  )
}
export default Post;