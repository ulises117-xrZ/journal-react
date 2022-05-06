import Swal from "sweetalert2";
import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { log } from "../utils/logs";
import { fileUpload } from "../helpers/fileUpload";


const updateListNote = (note)=>({
    type: types.updateListNotes,
    payload: note
})

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
        dispatch(activeNote(upload.id, newNote));
        dispatch(updateListNote({...newNote, id: upload.id}))
    }
}
//to activate the note and edit it.
export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})


//to load notes from firebase
//@Parameter uid to search the users notes
export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

//@Parameter notes for add the notes from firebase to the store
export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});
//end loading notes from firebase


//grabar en base de datos
export const startSavingNote = (note) => {
    return async (dispatch, getState) => {
        try {

            const { uid } = getState().auth;
            const noteToFirestore = { ...note };
            if (!note.url) {
                delete noteToFirestore.url;
            }
            delete noteToFirestore.id;
            const ref = doc(db, `/${uid}/journal/notes/${note.id}`)
            await setDoc(ref,
                { ...noteToFirestore }
            )
            Swal.fire(
                'Done',
                'Data has been updated',
                'success'
            )
            dispatch(refreshNotes(note.id, noteToFirestore));
        } catch (e) {
            log(e);
        }
    }
}

export const refreshNotes = (id, note) => ({
    type: types.notesUpdates,
    payload: {
        id, note: {
            id, ...note
        }
    }
})

export const startUploadingFile = (file) => {
    return async (dispatch, state) => {

        const { active: activeNote } = state().notes;

        Swal.fire({
            title: "Subiendo a la nube...",
            text: "Espera por favor",
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSavingNote(activeNote));
        Swal.close();

    }
}

export const startDeletingNote = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const useReference = doc(db, `${uid}/journal/notes/${id}`)
        try {
            await deleteDoc(useReference);
            dispatch(deleteNote(id));
            Swal.fire({
                title: "Exito",
                text: "Nota eliminada correctamente",
                icon: 'success',
            })
        } catch (e) {
            throw e;
        }
    }
}


export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const cleanNotes = ()=>({
    type: types.cleanNotes
})
