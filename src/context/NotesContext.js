import { useState,createContext,useEffect } from "react";
import db from '../db';


export const NotesContext =createContext();

function NotesContextProvider(props) {

    const [notes,setNotes] = useState([])
    const [selectedNote, SetselecttdNote] = useState([]);

    const addNote = (newNote) => {
        setNotes((prevNotes) => {
            return prevNotes.concat(newNote)
        })
    }

    const removeNote = (noteId) => {

        setNotes( prevNotes => {
            return prevNotes.filter(note => note.id !== noteId )
        });
    }
    useEffect(() => {

        db.table('notes')
        .toArray()
        .then((notes) => {
            setNotes(notes)
        })
    }, [])

    return(
        <NotesContext.Provider value={[notes,setNotes,addNote,removeNote,selectedNote, SetselecttdNote]}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider;