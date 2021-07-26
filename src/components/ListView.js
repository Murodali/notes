import React,{useContext,useState} from 'react'
import {NotesContext} from '../context/NotesContext';
import ListItem from '../components/ListItem';
import Workspace from './Workspace';



function ListView() {

    const [notes,setNotes,selectedNote,SetselectedNote] = useContext(NotesContext);

    return (
        <div className="notes_list">
            {notes.map(note => (
                    <ListItem  key={note.id}  title={note.title} content={note.content} id={note.id} ></ListItem>
            ))}
            
        </div>
    )
}

export default ListView
