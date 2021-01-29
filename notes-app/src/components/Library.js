import { useState, useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import NoteList from './NoteList.js';
import Note from './Note';

function Library({noteList, setNoteList, setEditorTitle, setEditorDate, setEditorText }){

    const currentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let MM = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let hh = String(today.getHours()).padStart(2, '0');
        let mm = String(today.getMinutes()).padStart(2, '0');
        let ss = String(today.getSeconds()).padStart(2, '0');
        return `${yyyy}/${MM}/${dd} - ${hh}:${mm}:${ss}`;
    }

    const createNote = () => {
        let [title, date, noteText, isActive] = ['New note', currentDate(), 'Type here your notes', 'note active'];
        let newNote = (<Note 
                            title={title}
                            createdAt={date}
                            noteText={noteText}
                            dateForSort={new Date()}
                            isActive={isActive}
                            noteList={noteList}
                            setNoteList={setNoteList}
                            setEditorTitle={setEditorTitle}
                            setEditorDate={setEditorDate}
                            setEditorText={setEditorText}
                         />)
        let unselectedNoteList = noteList != undefined 
            ? noteList.sort((n1, n2) => n2.props.dateForSort - n1.props.dateForSort).map(note => {
                return <Note 
                            key={note.key}
                            title={note.props.title}
                            createdAt={note.props.createdAt}
                            noteText={note.props.noteText}
                            dateForSort={note.props.dateForSort}
                            isActive='note'
                            listID={note.props.listID}
                            noteList={note.props.noteList}
                            setNoteList={note.props.setNoteList}
                            setEditorTitle={note.props.setEditorTitle}
                            setEditorDate={note.props.setEditorDate}
                            setEditorText={note.props.setEditorText}
                        />
            }) 
            : null;

        setNoteList(noteList != undefined ? [newNote, ...unselectedNoteList] : [newNote])
        setEditorTitle(title);
        setEditorDate(date);
        setEditorText(noteText);
    }

    const List1 = (noteList) => {
        if (noteList){
            return <NoteList noteList={noteList} setNoteList={setNoteList} />
        } else {
            return []
        }
    }

    return(
        <div id="library">
            <div id="library-header">
                <h1>Notes</h1>
                <FaRegEdit id="library-edit-btn" onClick={createNote} />
            </div>
            <List1 noteList={noteList} />
        </div>
        
    )
}

export default Library;