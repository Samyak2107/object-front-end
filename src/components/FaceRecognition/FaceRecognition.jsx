import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img alt='' src={imageUrl} width='100%' height='auto' style='max-width: 420px;' />
            </div>
        </div>
    )
}

export default FaceRecognition
