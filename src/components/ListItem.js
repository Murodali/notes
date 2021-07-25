import React from 'react'

function ListItem({title,content,key}) {
    return (
        <div className="list_item" key={key}>

            <h3> {title}  </h3>
            <p> {content} </p>
            
        </div>
    )
}

export default ListItem
