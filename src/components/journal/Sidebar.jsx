import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import JournalEntries from './JournalEntries'

const Sidebar = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleAddEntry = ()=>{
        dispatch(startNewNote())
    }
    
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {auth.name}</span>
                </h3>
                <button className="btn" onClick={handleLogout}>Logout</button>
            </div>

            <div className="journal__new-entry"
                onClick ={handleAddEntry}
            >
                <i className="far fa-calendar-plus fa-2x"></i>
                <p className="mt-5">New entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar
