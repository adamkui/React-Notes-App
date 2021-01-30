import { FaTrashAlt } from 'react-icons/fa';
import Note from './Note'

function Editor({editorTitle, editorDate, editorText, setEditorTitle, setEditorText, setEditorDate, noteList, setNoteList}){
    
    const changeTitle = (e) => {
        setEditorTitle(e.target.value)
        const changedTitleList = noteList.map(note =>{
            return <Note
                key={note.key}
                title={(note.props.isActive === "note active") ? e.target.value : note.props.title}
                createdAt={note.props.createdAt}
                noteText={note.props.noteText}
                dateForSort={note.props.dateForSort}
                isActive={(note.props.isActive === "note active") ? 'note active' : 'note'}
                listID={note.props.listID}
                noteList={note.props.noteList}
                setNoteList={note.props.setNoteList}
                setEditorTitle={note.props.setEditorTitle}
                setEditorDate={note.props.setEditorDate}
                setEditorText={note.props.setEditorText}
            />
        })
        setNoteList(changedTitleList)
    }

    const changeText = (e) => {
        setEditorText(e.target.value)
        const changedTextList = noteList.map(note =>{
            return <Note
                key={note.key}
                title={note.props.title}
                createdAt={note.props.createdAt}
                noteText={(note.props.isActive === "note active") ? e.target.value : note.props.noteText}
                dateForSort={note.props.dateForSort}
                isActive={(note.props.isActive === "note active") ? 'note active' : 'note'}
                listID={note.props.listID}
                noteList={note.props.noteList}
                setNoteList={note.props.setNoteList}
                setEditorTitle={note.props.setEditorTitle}
                setEditorDate={note.props.setEditorDate}
                setEditorText={note.props.setEditorText}
            />
        })
        setNoteList(changedTextList)
    }

    const deleteNote = (e) => {
        //Get active note index
        let c;
        noteList.sort((e1, e2) => e2.props.createdAt - e1.props.createdAt).forEach((note, i) => {
            if (note.props.isActive === 'note active'){
                c = i;
            }
        });
        c = (c === 0) ? c : (c - 1);

        //Update editor states
        let [newTitle, newDate, newText] = [];
        noteList.sort((e1, e2) => e2.props.createdAt - e1.props.createdAt).forEach((note, i) => {
            if (i === c){
                [newTitle, newDate, newText] = [note.props.title, note.props.createdAt, note.props.newText]
            }
        })
        setEditorTitle((noteList.length === 1) ? '' : newTitle)
        setEditorDate((noteList.length === 1) ? '' : newDate)
        setEditorText((noteList.length === 1) ? '' : newText)

        //Update noteList state by removing active note
        setNoteList(noteList.sort((e1, e2) => e2.props.dateForSort - e1.dateForSort).filter((note, i) => {
            if (note.props.isActive !== 'note active'){
                return note;
            } 
        }).map((note, i) => {
            return <Note 
                        key={note.key}
                        title={note.props.title}
                        createdAt={note.props.createdAt}
                        noteText={note.props.noteText}
                        dateForSort={note.props.dateForSort}
                        isActive={(i === c) ? 'note active' : 'note'}
                        listID={note.props.listID}
                        noteList={note.props.noteList}
                        setNoteList={note.props.setNoteList}
                        setEditorTitle={note.props.setEditorTitle}
                        setEditorDate={note.props.setEditorDate}
                        setEditorText={note.props.setEditorText}
                    />
        }))
    }

    return(
        <div id="editor">
            <div id="editor-header">
                <textarea rows="1" value={editorTitle} onChange={changeTitle} ></textarea>
                <h5>{editorDate}</h5>
                <FaTrashAlt id="editor-delete-btn" onClick={deleteNote}/>
            </div>  
            <textarea id="editor-main-editor" value={editorText} onChange={changeText}></textarea>
        </div>
    )
}

export default Editor;