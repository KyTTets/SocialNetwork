import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} key={p.id} likeValue={p.likeValue} />);


  let onAddPost = () => {
    props.addPost();

  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);

  }


  return (
    <div className={s.content}>

      <div className={s.postBlock}>
        <b>Написать сообщение:</b>
        <div>
          <div>
            <textarea placeholder='Введите сообщение:'
              onChange={onPostChange}
              value={props.newPostText} />
          </div>
          <button onClick={onAddPost}> Написать </button>
          <button>Удалить</button>

        </div>
        <div className={s.posts}>

          {postsElements}

        </div>
      </div>
    </div>
  )
}
export default MyPosts;