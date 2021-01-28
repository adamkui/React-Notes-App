import { FaRegSave } from 'react-icons/fa';

function Editor({editorTitle, editorDate, editorText, editorButton}){

    const ShowButton = (props) => {
        let show = props.show
        if (show){
            return <FaRegSave id="editor-save-btn" />
        } else {
            return null
        }
    }

    return(
        <div id="editor">
            <div id="editor-header">
                <div id="editor-header-left">
                    <textarea rows="1" value={editorTitle} ></textarea>
                    <h5>{editorDate}</h5>
                </div>
                <div id="editor-header-right">
                    <ShowButton show= {editorButton} />
                </div>
            </div>  

            <textarea id="editor-main-editor" value={editorText} ></textarea>
            
        </div>
    )
}

export default Editor;