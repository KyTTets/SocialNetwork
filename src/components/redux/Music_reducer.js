const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    songs: [
        { id: 1, song: 'https://html5book.ru/examples/media/track.mp3', musicName: 'Sound1' },
        { id: 2, song: 'https://html5book.ru/examples/media/track.mp3', musicName: 'Sound2' },
    ],
    
}

const MusicReducer = (state = initialState, action) => {

    return state;

}


export default MusicReducer;