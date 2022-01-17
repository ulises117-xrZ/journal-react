import React from 'react'
import NotesAppbar from './NotesAppbar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppbar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder='title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea
                    name="textarea"
                    placeholder='que paso hoy?'
                    className='notes__textarea'
                ></textarea>
                <div className="notes__image">
                    <img
                        src="https://cdn.dribbble.com/users/231966/screenshots/6171302/react.png?compress=1&resize=400x300"
                        alt=" a descripto"
                    />
                </div>
            </div>
        </div>
    )
}

export default NoteScreen
