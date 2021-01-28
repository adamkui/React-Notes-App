import { useState } from 'react';

function Note({key, title, createdAt, noteText, isActive}){
    return(
        <div className={isActive} data-listid={key} >
            <h1>{title}</h1>
            <h5>{createdAt}</h5>
            <p>{noteText}</p>
         </div>
    )
}

export default Note;