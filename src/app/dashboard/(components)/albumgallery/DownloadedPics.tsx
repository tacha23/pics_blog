import React from 'react'

interface DownloadedPicsProps {
    sendDataToParent: (data: string) => void;
}

const DownloadedPics: React.FC<DownloadedPicsProps> = ({ sendDataToParent }) => {

    const handleGoBack = () => {
        sendDataToParent('album')
    }
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleGoBack}>Back</button>
        <br />
        DOWNLOADS
    </div>
  )
}

export default DownloadedPics
