import React from 'react'

interface BluetoothPicsProps {
    sendDataToParent: (data: string) => void;
}

const BluetoothPics: React.FC<BluetoothPicsProps> = ({ sendDataToParent }) => {

    const handleGoBack = () => {
        sendDataToParent('album')
    }
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleGoBack}>Back</button>
        <br />
        BLUETOOTH
    </div>
  )
}

export default BluetoothPics
