//React
import { useState } from 'react';
import uuid from 'react-uuid';

//Font Awesome
import { FaRegEdit } from 'react-icons/fa';

//Components
import Note from './Note.js';

function Library({setNoteTitle, setCreatedAt, setNoteText, listOfNotes, createNote, setCurrentUuid}){

    

    return(
        <div id='library'>
            <div id="library-header">
                <h1>Notes</h1>
                <FaRegEdit id="library-edit-btn" onClick={(e) => createNote("New Note", "", "Type your notes here...")} />
            </div>

            <div id="library-notes">
                {listOfNotes.sort((e1, e2) => e2.props.dateTime - e1.props.dateTime).map((note) => (
                    <Note 
                        key={uuid()}
                        note={note}
                        setNoteTitle={setNoteTitle}
                        setCreatedAt={setCreatedAt}
                        setNoteText={setNoteText}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;