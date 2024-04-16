import React from 'react'
// import CameraRollPics from './album-gallery/CameraRollPics';

interface AlbumMenuProps {
    sendDataToParent: (data: string) => void;
}

const AlbumMenu: React.FC<AlbumMenuProps> = ({ sendDataToParent }) => {

    const handleGoBack = () => {
        sendDataToParent('')
    }

    const handleClick = (albumSelected: string) => {
      console.log("albumSelected", albumSelected)
      sendDataToParent(albumSelected)
    }


  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleGoBack}>Back</button>
        <br />
        <br />
        <br />

        <main className={`grid p-16`}>
        <div className={`grid justify-center`}>
            <div className={`grid`}>
                <p className={`mb-4 pb-4 text-5xl font-semibold underline decoration-wavy decoration-2`}>
                  Album Menu
                </p>
            </div>
        </div>

        <div className={`grid grid-cols-3 items-center gap-4`}>
            <div className={`flex col-span-3 justify-center pb-8`}>
                <p className={`text-2xl font-bold`}>Explore</p>
            </div>
            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('camera-roll')}>
                    <span className="">Camera Roll</span>
                </div>
            </div>

            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('ss')}>
                    <span className="">Screenshots</span>
                </div>
            </div>

            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('downloaded')}>
                    <span className="">Downloads</span>
                </div>
            </div>

            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('bluetooth-downloads')}>
                    <span className="">Bluetooth</span>
                </div>
            </div>
        </div>
    </main>
    </div>
  )
}

export default AlbumMenu
