import { useState } from 'react';
import Library from './Library.js'
import Editor from './Editor.js';

function Wrapper(){
    //States
    const [noteList, setNoteList] = useState();
    const [editorTitle, setEditorTitle] = useState('');
    const [editorDate, setEditorDate] = useState('');
    const [editorText, setEditorText] = useState('');
    const [editorButton, setEditorButton] = useState(false);

    return(
        <div id="wrapper">
            <Library
                noteList={noteList}
                setNoteList={setNoteList}
                setEditorTitle={setEditorTitle}
                setEditorDate={setEditorDate}
                setEditorText={setEditorText}
                setEditorButton={setEditorButton}
            />
            <Editor
                editorTitle={editorTitle}
                editorDate={editorDate}
                editorText={editorText}
                editorButton={editorButton}
            />
        </div>
    )
}

export default Wrapper;