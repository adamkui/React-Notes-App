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

    //On page load get notes data from local storage
    if (appStatus === 'init'){
        //Get local storage data and convert date prop
        const localStorageValue = localStorage.getItem('myNotes');
        let newNotesList = (localStorageValue !== undefined && localStorageValue !== null)
            ? JSON.parse(localStorageValue).map(note => {
                let date = new Date(Date.parse(note.dateForSort))  
                return {
                    ...note,
                    dateForSort: date
                }
            })
            : null;

        //Create new components based on local storage data
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
        
        //Update states
        setAppStatus('loaded');
        setNoteList(noteListFromLS)
        setEditorTitle((noteListFromLS.length > 0) ? noteListFromLS[0].props.title : '')
        setEditorDate((noteListFromLS.length > 0) ? noteListFromLS[0].props.createdAt : '')
        setEditorText((noteListFromLS.length > 0) ? noteListFromLS[0].props.noteText : '')
    }   

    useEffect(() => {
        //Update local storage whenever the noteList state changes
        if (noteList !== null && noteList !== undefined){
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
                setEditorDate={setEditorDate}
                noteList={noteList}
                setNoteList={setNoteList}
            />
        </div>
    )
}

export default Wrapper;