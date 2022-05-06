import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSavingNote, startUploadingFile } from '../../actions/notes';

const NotesAppbar = ({ date }) => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)
    const handleSaveNote = () => {
        console.log(active);
        dispatch(startSavingNote(active));
    }

    const requireImage = () => {
        handlePictureClick();
    }

    const handlePictureClick = ()=>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        console.log(e);
        const file = e.target.files[0];
        if(file){
            dispatch(startUploadingFile(file));
        }
    }
    return (
        <div className="notes__appbar">
            <span>{date}</span>
            <input id = "fileSelector" name = "file" type='file' style={{ display: 'none' }} onChange={handleFileChange} />
            <div>
                <button className="btn" onClick={requireImage}>
                    picture
                </button>
                <button className="btn" onClick={handleSaveNote}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppbar
