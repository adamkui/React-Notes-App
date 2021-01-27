//React
import { useState } from 'react';

//Components
import Library from '../components/Library.js'
import Editor from './Editor.js';
import Note from './Note.js';

function Wrapper(){
    let currentDate;

    //Functions
    const getToday = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let MM = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let hh = String(today.getHours()).padStart(2, '0');
        let mm = String(today.getMinutes()).padStart(2, '0');
        let ss = String(today.getSeconds()).padStart(2, '0');
        currentDate =  `${yyyy}/${MM}/${dd} - ${hh}:${mm}:${ss}`;
    };
    getToday();

    const createNote = (noteTitle, createdAt, noteText) => {
        getToday();
        let newNote = <Note 
                        title={noteTitle}  
                        createdAt={(createdAt === "") ? currentDate : createdAt} 
                        message={noteText}   
                        dateTime={new Date()}
                    />;        
        let newList = (listOfNotes.length ===0 ) ? [newNote] : [...listOfNotes, newNote];
        setListOfNotes(newList)
    }

    //States
    const [noteTitle, setNoteTitle] = useState('New Note');
    const [createdAt, setCreatedAt] = useState(currentDate);
    const [noteText, setNoteText] = useState('Type your notes here...');
    const [listOfNotes, setListOfNotes] = useState([]);

    return(
        <div id="wrapper">
            <Library
                setNoteTitle={setNoteTitle}
                setCreatedAt={setCreatedAt}
                setNoteText={setNoteText}
                currentDate={currentDate}
                getToday={getToday}
                listOfNotes={listOfNotes}
                setListOfNotes={setListOfNotes}
                createNote={createNote}
            />
            <Editor 
                noteTitle={noteTitle}
                setNoteTitle={setNoteTitle}
                createdAt={createdAt}
                noteText={noteText}
                setNoteText={setNoteText}
                createNote={createNote}
                listOfNotes={listOfNotes}
                setListOfNotes={setListOfNotes}
            />
        </div>
    )
}

export default Wrapper;