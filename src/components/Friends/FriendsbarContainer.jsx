import { connect } from 'react-redux';
import FriendsBar from './Friendsbar';



let mapStateToProps=(state)=>{
    return{
dialogsPage: state.dialogsPage
    }
}

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);

export default FriendsBarContainer