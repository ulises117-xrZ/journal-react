import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";




export const startNewNote = () => {
    return async (dispatch, getState) => {
        const auth = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = collection(db, `${auth}/journal/notes`);
        const upload = await addDoc(docRef, newNote);
        console.log(upload.id);
        dispatch(activeNote(upload.uid, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}
export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});