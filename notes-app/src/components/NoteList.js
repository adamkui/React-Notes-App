import Note from './Note.js';
import {v4 as uuidv4} from "uuid";

function NoteList(noteList){

    const NoteListComp = (noteList) => {
        if (noteList.noteList.noteList.noteList != undefined) {
            let newNoteList = noteList.noteList.noteList.noteList.sort((n1, n2) => {
                return n2.props.dateForSort - n1.props.dateForSort
            }).map(note => {
                return <Note key={uuidv4()} title={note.props.title} createdAt={note.props.createdAt} noteText={note.props.noteText} isActive={note.props.isActive}/>
            })
            return newNoteList;
        } else {
            return null;
        }
    }

    return (
        <div id="library-notes">
            <NoteListComp noteList={noteList} />
        </div>
    )
}

export default NoteList;