import { useState,createContext,useEffect } from "react";
import db from '../db';


export const NotesContext =createContext();

function NotesContextProvider(props) {


    const [notes,setNotes] = useState([])

    useEffect(() => {

        db.table('notes')
        .toArray()
        .then((notes) => {
            setNotes(notes)
            console.log(notes)
        })
     
    }, [])


    return(
        <NotesContext.Provider value={[notes,setNotes]}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider;