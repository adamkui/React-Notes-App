import { useState, useEffect } from 'react';
import Library from './Library.js'
import Editor from './Editor.js';
import Note from './Note';
import {v4 as uuidv4} from "uuid";

function Wrapper(){
    //States
    const [noteList, setNoteList] = useState();
    const [editorTitle, setEditorTitle] = useState('');
    const [editorDate, setEditorDate] = useState('');
    const [editorText, setEditorText] = useState('');
    const [appStatus, setAppStatus] = useState('init');

    if (appStatus === 'init'){
        //Get date from local storage
        const localStorageValue = localStorage.getItem('myNotes');
        let newNotesList = (localStorageValue != undefined && localStorageValue != null)
            ? JSON.parse(localStorageValue).map(note => {
                let date = new Date(Date.parse(note.dateForSort))  
                return {
                    ...note,
                    dateForSort: date
                }
            })
            : null;

        let noteListFromLS;
        if (newNotesList != null){
            noteListFromLS = newNotesList.sort((e1, e2) => e2 - e1).map((note, i) => {
                return (
                    <Note 
                        key={uuidv4()}
                        title={note.title}
                        createdAt={note.createdAt}
                        noteText={note.noteText}
                        dateForSort={note.dateForSort}
                        isActive={note.isActive}
                        listID={i}
                        noteList={null}
                        setNoteList={setNoteList}
                        setEditorTitle={setEditorTitle}
                        setEditorDate={setEditorDate}
                        setEditorText={setEditorText}
                    />
                )
            })
        }

        setAppStatus('loaded');
        setNoteList(noteListFromLS)
        setEditorTitle(noteListFromLS[0].props.title)
        setEditorDate(noteListFromLS[0].props.createdAt)
        setEditorText(noteListFromLS[0].props.noteText)
    }   

    useEffect(() => {
        if (noteList != null && noteList != undefined){
            const newList = JSON.stringify(noteList.map(note =>{
                return {
                    createdAt: note.props.createdAt,
                    dateForSort: String(note.props.dateForSort),
                    isActive: note.props.isActive,
                    noteText: note.props.noteText,
                    title: note.props.title
                }
            }))

            localStorage.setItem('myNotes', newList)
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