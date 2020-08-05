import { connect } from 'react-redux';
import Music from './Music'

let mapStateToProps = (state) => {

    return {
        musicPage: state.musicPage
    }

}


const MusicContainer = connect(mapStateToProps)(Music);

export default MusicContainer