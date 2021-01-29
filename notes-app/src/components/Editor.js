import { FaRegSave } from 'react-icons/fa';
import Note from './Note'

function Editor({editorTitle, editorDate, editorText, setEditorTitle, setEditorText, noteList, setNoteList}){
    
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

    return(
        <div id="editor">
            <div id="editor-header">
                <textarea rows="1" value={editorTitle} onChange={changeTitle} ></textarea>
                <h5>{editorDate}</h5>
            </div>  
            <textarea id="editor-main-editor" value={editorText} onChange={changeText}></textarea>
        </div>
    )
}

export default Editor;