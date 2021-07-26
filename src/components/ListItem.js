import React from 'react'
import Workspace from './Workspace';


function ListItem({title,content,onNoteSelected }) {
    <Workspace onNoteSelected></Workspace>
    return (
        <div className="list_item"  >
            <h3> {title}  </h3>
            <p> {content} </p>

       
        </div>
    )
}

export default ListItem
