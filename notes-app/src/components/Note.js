import { useState } from 'react';

function Note({title, createdAt, noteText, isActive, listID, noteList, setNoteList, setEditorTitle, setEditorDate, setEditorText }){
    
    const changeActiveNote = (e) => {
        let index = e.target.dataset.listid;
        let eTitle = noteList[index].props.title;      
        let eDate = noteList[index].props.createdAt;      
        let eText = noteList[index].props.noteText;      
        let reselectedNoteList = noteList.map((note, i) => {
            return <Note
                        key={note.key}
                        title={note.props.title}
                        createdAt={note.props.createdAt}
                        noteText={note.props.noteText}
                        dateForSort={note.props.dateForSort}
                        isActive={(i == index) ? 'note active' : 'note'}
                        listID={note.props.listID}
                        noteList={note.props.noteList}
                        setNoteList={note.props.setNoteList}
                        setEditorTitle={note.props.setEditorTitle}
                        setEditorDate={note.props.setEditorDate}
                        setEditorText={note.props.setEditorText}
                    />
        })

        //Update states
        setNoteList(reselectedNoteList)
        setEditorTitle(eTitle)
        setEditorDate(eDate)
        setEditorText(eText)
    }

    return(
        <div className={isActive} data-listid={listID} onClick={changeActiveNote} >
            <h1>{(title.length > 20) ? title.substring(0,20).concat('...') : title}</h1>
            <h5>{createdAt}</h5>
            <p>{(noteText.length > 25) ? noteText.substring(0,25).concat('...') : noteText }</p>
         </div>
    )
}

export default Note;