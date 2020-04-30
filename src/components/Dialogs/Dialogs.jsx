import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';





const Dialogs = (props) => {

let state=props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} image={d.image} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    
    let onChangeMessage = (event) => {
        let text = event.target.value;
        props.updateNewMessage(text);
    }

    let onAddMessage = () => {
        props.addMessage();
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.newMessage}>
                <b>Написать сообщение: </b>
                <div className={s.button}>
                    <textarea placeholder='Введите сообщение:'
                        onChange={onChangeMessage} 
                        value={props.newMessageText}/>  
                </div>
                <button onClick={onAddMessage}>Отправить</button>

            </div>
        </div>
    )
}
export default Dialogs

