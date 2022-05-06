import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
const JournalEntry = ({ id, date, title, body, url }) => {
    const dispatch = useDispatch();
    const noteDate = moment(date);
    const handleActivateNote = (id, note) => {
        dispatch(activeNote(id, note))
    }
    return (
        <div className="journal__entry pointer" onClick={() => { handleActivateNote(id, { date, title, url, body }) }}>
            <div
                className="journal__entry-picture "
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url ?? 'https://c8.alamy.com/comp/WKTAE9/reactjs-coding-computer-language-javascript-internet-components-vector-illustration-WKTAE9.jpg'})`
                }}
            >

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    
                    {
                        body.length > 10 && body.substring (0,65) + "..."
                    }
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format("Do")}</h4>
            </div>
        </div>
    )
}

export default JournalEntry
