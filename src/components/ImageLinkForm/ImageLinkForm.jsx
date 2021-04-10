import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='mt2'>
            <p className='f3'>
                {'Input any image you want to scan and our app will detect what object it is.'}
            </p>
            <div className='center mt2'>
                <div className='center form pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <div className="vl"></div>
                <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>          
                </div>
        </div>
        </div>
    )
}

export default ImageLinkForm
