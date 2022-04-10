import React from 'react'
import moment from 'moment';
const JournalEntry = ({id, date, title, body, url}) => {
    const noteDate = moment(date);

    return (
        <div className="journal__entry pointer">
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
                {body}
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
