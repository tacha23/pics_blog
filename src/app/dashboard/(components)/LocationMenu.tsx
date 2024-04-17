import React from 'react'

interface LocationMenuProps {
    sendDataToParent: (data: string) => void;
}

const LocationMenu: React.FC<LocationMenuProps> = ({ sendDataToParent }) => {

    const handleGoBack = () => {
        sendDataToParent('')
    }
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleGoBack}>Back</button>
        <br />
      Location Menu
    </div>
  )
}

export default LocationMenu
