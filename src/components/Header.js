import React from 'react'
import {RiEditBoxLine,RiDeleteBin5Line,RiSearchLine} from 'react-icons/ri';

function Header() {
    return (
        <div className="header">
            <p>Notes Clone</p>
            <div className="header_buttons">

            <RiEditBoxLine/>
  
            <RiDeleteBin5Line/>

            </div>

            <div className="header_searchbox">
                <div className="search_input">
                <RiSearchLine/><input type="text" placeholder="search"></input>
                </div>
     
 
            </div>
            
        </div>
    )
}

export default Header;
