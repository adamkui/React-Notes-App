import { useState } from 'react';
import loaderImg from '../logo.svg'

function Loader(){

    const [loaderOpacity, setLoaderOpacity] = useState(1);
    const [loaderDisplay, setLoaderDisplay] = useState('flex');
    const [imgOpacity, setImgOpacity] = useState(1);

    setTimeout(() => {
        setImgOpacity(0)
        setTimeout(() => setLoaderOpacity(0), 500);
        setTimeout(() => setLoaderDisplay('none'), 1000);
    }, 750);

    return (
        <div id="loader" style={ { opacity: `${loaderOpacity}`, display: `${loaderDisplay}`} }>
            <img src={loaderImg} alt="loader-img" style={ { opacity: `${imgOpacity}`} } />
            <p id="loader-p" style={ { opacity: `${imgOpacity}`} }>Logo created by: Marton Izsaki ⓒ2021</p>
        </div>
    )
}

export default Loader;