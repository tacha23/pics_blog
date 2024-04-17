import React from 'react'

interface TagMenuProps {
    sendDataToParent: (data: string) => void;
}

const TagMenu: React.FC<TagMenuProps> = ({ sendDataToParent }) => {

    const handleGoBack = () => {
        sendDataToParent('')
    }
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleGoBack}>Back</button>
        <br />
      Tag Menu
    </div>
  )
}

export default TagMenu
