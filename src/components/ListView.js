import React,{useContext} from 'react'
import {NotesContext} from '../context/NotesContext';
import ListItem from '../components/ListItem';


function ListView() {


    const [notes,setNotes] = useContext(NotesContext);


    return (
        <div className="notes_list">
            {notes.map(note => (

                <div className="notes_list_container"> 
          
                    <ListItem title={note.title} content={note.content} keyItem={note.id}></ListItem>

                    </div>
                
            ))}
            
        </div>
    )
}

export default ListView
