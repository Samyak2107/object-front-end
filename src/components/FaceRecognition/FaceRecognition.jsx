import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img className='display-img' alt='' src={imageUrl} />
            </div>
        </div>
    )
}

export default FaceRecognition
