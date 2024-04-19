import React from 'react'

interface CameraRollPicsProps {
    sendDataToParent: (data: string) => void;
    prevPage?: string
}

const CameraRollPics: React.FC<CameraRollPicsProps> = ({ sendDataToParent, prevPage = '' }) => {

  console.log("camera roll initiated")

    const handleGoBack = (data: string) => {
        sendDataToParent(data)
    }
  return (
    <div>
        <a href="/dashboard/albumgallery">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleGoBack(prevPage)}>Back to { prevPage }</button>
        </a>
        <a href="/dashboard">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Back to Gallery</button>
        </a>
        <br />
        CAMERA ROLL
    </div>
  )
}

export default CameraRollPics
