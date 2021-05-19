import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img alt='' src={imageUrl} max-width='400px' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecognition
