import { updateNewMessageActionCreator, addMessagesActionCreator } from '../../components/redux/Dialogs_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }

}

let mapDispatchToProps = (dispatch) => {
    return {

        addMessage: () => {
            dispatch(addMessagesActionCreator());
        },

        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
}

const DialogsContainer =
    connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer

