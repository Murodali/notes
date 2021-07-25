import React from 'react'
import Workspace from './Workspace';


function ListItem({title,content,keyItem}) {
    return (
        <div className="list_item" key={keyItem}>

            <h3> {title}  </h3>
            <p> {content} </p>

            <Workspace title={title} content={content} keyItem={keyItem} ></Workspace>
            
        </div>
    )
}

export default ListItem
