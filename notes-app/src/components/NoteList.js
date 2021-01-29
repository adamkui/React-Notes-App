import Note from './Note.js';
import {v4 as uuidv4} from "uuid";

function NoteList(noteList, setNoteList){
    
    const NoteListComp = (noteList) => {
        if (noteList.noteList.noteList.noteList != undefined) {
            let newNoteList = noteList.noteList.noteList.noteList.sort((n1, n2) => n2.props.dateForSort - n1.props.dateForSort).map((note, i) => {
                return <Note 
                            key={uuidv4()}
                            title={note.props.title}
                            createdAt={note.props.createdAt}
                            noteText={note.props.noteText}
                            isActive={note.props.isActive}
                            listID={i}
                            noteList={noteList.noteList.noteList.noteList}
                            setNoteList={note.props.setNoteList}
                            setEditorTitle={note.props.setEditorTitle}
                            setEditorDate={note.props.setEditorDate}
                            setEditorText={note.props.setEditorText}
                        />
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