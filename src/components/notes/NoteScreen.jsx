import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { log } from '../../utils/logs';
import moment from 'moment';
import NotesAppbar from './NotesAppbar'
import { activeNote, startDeletingNote } from '../../actions/notes';

const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);
    const noteDate = moment(active.date);

    const [formValue, handleInputChange, reset] = useForm(active);
    const { body, title } = formValue;
    const idSelected = useRef(active.id);
    log(formValue);
    useEffect(() => {
        if (idSelected.current !== active.id) {
            reset(active);
            idSelected.current = active.id
        }
    }, [active, reset])
    useEffect(() => {
        dispatch(activeNote(formValue.id, { ...formValue }));
    }, [formValue, dispatch])

    const handleDelete = () => {
        //delete note;
        dispatch(startDeletingNote(idSelected.current));
    }

    return (
        <div className="notes__main-content">
            <NotesAppbar date={noteDate.format("LL")} />
            <div className="notes__content">
                <input
                    name="title"
                    type="text"
                    placeholder='title'
                    className='notes__title-input'
                    autoComplete='off'
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="body"
                    placeholder='que paso hoy?'
                    className='notes__textarea'
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                <div className="notes__image">
                    <img
                        src={active.url ?? "https://cdn.dribbble.com/users/231966/screenshots/6171302/react.png?compress=1&resize=400x300"}
                        alt=" a descripto"
                    />
                </div>
            </div>
            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default NoteScreen
