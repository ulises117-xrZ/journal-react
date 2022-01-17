import React from 'react'

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture "
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://c8.alamy.com/comp/WKTAE9/reactjs-coding-computer-language-javascript-internet-components-vector-illustration-WKTAE9.jpg)'
                }}
            >

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque?
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry
