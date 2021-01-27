import { FaRegSave } from 'react-icons/fa';
import Note from './Note.js';

function Editor({noteTitle, setNoteTitle, createdAt, noteText, setNoteText, createNote, listOfNotes, setListOfNotes}){
    const SaveNote = () => {
        let newArr = listOfNotes.filter(note => {
            if(note.props.createdAt != createdAt){
                return note
            }
        })

        if (newArr.length > 0){
            setListOfNotes([...newArr, (<Note title={noteTitle} createdAt={createdAt} message={noteText} dateTime={new Date()} />)])
        } else {
            createNote(noteTitle, createdAt, noteText)
        }
    }

    return (
        <div id="editor">
            <div id="editor-header">
                <div id="editor-header-left">
                    <textarea rows="1" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}></textarea>
                    <h5>Created at: { createdAt }</h5>
                </div>
                <div id="editor-header-right" onClick={SaveNote}>
                    <FaRegSave id="editor-save-btn" />
                </div>
            </div>

            <textarea id="editor-main-editor" value={ noteText } onChange={(e) => setNoteText(e.target.value) } ></textarea>
        </div>
    )
}

export default Editor;