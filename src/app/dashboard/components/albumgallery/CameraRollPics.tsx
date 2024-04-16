import React from 'react'

interface CameraRollPicsProps {
    sendDataToParent: (data: string) => void;
    prevPage?: string
}

const CameraRollPics: React.FC<CameraRollPicsProps> = ({ sendDataToParent, prevPage = '' }) => {

    const handleGoBack = (data: string) => {
        sendDataToParent(data)
    }
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleGoBack(prevPage)}>Back to { prevPage }</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleGoBack('')}>Back to Gallery</button>
        <br />
        CAMERA ROLL
    </div>
  )
}

export default CameraRollPics
