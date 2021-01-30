import {FaInfoCircle} from 'react-icons/fa';

function Info(props){
    const closeInfo = (e) => {
        if (!document.getElementById('info-message-wrapper').contains(e.target)){
            props.setInfoOpacity(0);
            setTimeout(() => props.setInfoDisplay('none'), 500);
        }
    }

    return(
        <div id="info" style={ { display: `${props.infoDisplay}`, opacity: `${props.infoOpacity}` } } onClick={(e) => closeInfo(e)}>
            <div id="info-message-wrapper">
                <p><FaInfoCircle id='info-message-icon' /><br/><b>Data storage: </b>This application is using the browser's local storage to save your notes. Please make sure to keep this in mind when clearing browser history, as you can loose your notes when clearing the local storage.</p>
                <p><FaInfoCircle id='info-message-icon' /><br/><b>Privacy note:</b> As this application is not using a login system, anyone accessing this user on your computer will be able to see notes you store in this application. Passwords, or sensitive data is not recommended to store in this application, and the author of the application can't take responsibility for any harm caused by ignoring this note.</p>
            </div>
        </div>
    )
}

export default Info;