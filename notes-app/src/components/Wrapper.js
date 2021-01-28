import { useState, useEffect } from 'react';
import Library from './Library.js'
import Editor from './Editor.js';

function Wrapper(){
    const localStorageValue = localStorage.getItem('myNotes');

    //States
    const [noteList, setNoteList] = useState(localStorageValue != "undefined" ? JSON.parse(localStorageValue) : null);
    const [editorTitle, setEditorTitle] = useState('');
    const [editorDate, setEditorDate] = useState('');
    const [editorText, setEditorText] = useState('');

    useEffect(() => {
        if (noteList != null && noteList != undefined){
            localStorage.setItem('myNotes', JSON.stringify(noteList))
        }
    }, [noteList])

    return(
        <div id="wrapper">
            <Library
                noteList={noteList}
                setNoteList={setNoteList}
                setEditorTitle={setEditorTitle}
                setEditorDate={setEditorDate}
                setEditorText={setEditorText}
            />
            <Editor
                editorTitle={editorTitle}
                editorDate={editorDate}
                editorText={editorText}
                setEditorTitle={setEditorTitle}
                setEditorText={setEditorText}
                noteList={noteList}
                setNoteList={setNoteList}
            />
        </div>
    )
}

export default Wrapper;