import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"


export const loadNotes = async (uid)=> {
    // const noteSnap = await db.collection(`${uid}/journal/notes`).get();
    const noteSnap =  collection(db, `${uid}/journal/notes`);
    const data = await getDocs(noteSnap);
    const notes = [];
    data.forEach(note =>{
        notes.push({
            id: note.id,
            ...note.data()
        });
    })
    console.log(notes);
    return notes;
}