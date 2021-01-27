function Note({note, setNoteTitle, setCreatedAt, setNoteText}){
    
    const updateEditor = (note) => {
        setNoteTitle(note.props.title);
        setCreatedAt(note.props.createdAt);
        setNoteText(note.props.message);
    }

    return(
        <div className="note" onClick={ () => updateEditor(note)}>
            <h1>{ note.props.title }</h1>
            <h5>{ note.props.createdAt }</h5>
            <p> {`${note.props.message.substring(0, 50).replaceAll('.', '')}...`} </p>
        </div>
    )
}

export default Note;