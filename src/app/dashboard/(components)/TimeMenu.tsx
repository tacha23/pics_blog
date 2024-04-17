import React from 'react'

interface TimeMenuProps {
    sendDataToParent: (data: string) => void;
}

const TimeMenu: React.FC<TimeMenuProps> = ({ sendDataToParent }) => {

    const handleGoBack = () => {
        sendDataToParent('')
    }
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleGoBack}>Back</button>
        <br />
      Time Menu
    </div>
  )
}

export default TimeMenu
