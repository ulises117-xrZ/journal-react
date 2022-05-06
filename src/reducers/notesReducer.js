import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.updateListNotes:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case types.notesUpdates:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note :
                        note
                )
            }
        case types.notesDelete:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                active: null
            }
        case types.cleanNotes:
            return {
                ...state, notes: [],
                active: null,
            }
        default:
            return state;
    }
};

export default notesReducer;
