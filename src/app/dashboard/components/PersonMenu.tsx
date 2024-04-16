import React from 'react'

interface PersonMenuProps {
    sendDataToParent: (data: string) => void;
}

const PersonMenu: React.FC<PersonMenuProps> = ({ sendDataToParent }) => {

    const handleGoBack = () => {
        sendDataToParent('')
    }
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleGoBack}>Back</button>
        <br />
      Person Menu
    </div>
  )
}

export default PersonMenu
