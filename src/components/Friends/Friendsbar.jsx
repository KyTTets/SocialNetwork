import React from 'react';
import s from './Friendsbar.module.css';
import FriendsItem from './Friendsitem/Friendsitem';



const FriendsBar = (props) => {

    let state=props.dialogsPage;
    let friendsElements = state.dialogs.map(f => <FriendsItem name={f.name} key={f.id}  image={f.image} />);
    return (
        <div className={s.friends}>
            
            <div className={s.friendsElements}>
                {friendsElements}
            </div>
        </div>

    )
}

export default FriendsBar