import React,{useContext} from 'react'
import {NotesContext} from '../context/NotesContext';
import ListItem from '../components/ListItem';


function ListView() {


    const [notes,setNotes] = useContext(NotesContext);


    return (
        <div className="notes_list">
            {notes.map(note => (
          
                    <ListItem title={note.title} content={note.content} key={note.id}></ListItem>
                
            ))}
            
        </div>
    )
}

export default ListView
