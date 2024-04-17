"use client"

import React from 'react'
import Image from "next/image"

interface GalleryMenuProps {
    sendDataToParent: (data: string) => void;
}

const GalleryMenu: React.FC<GalleryMenuProps> = ({ sendDataToParent }) => {

    const handleClick = (type: string) => {
        console.log(`click on ${type}`);

        sendDataToParent(type);
    }

  return (
    <main className={`grid p-16`}>
        <div className={`grid justify-center`}>
            <div className={`grid`}>
                <p className={`mb-4 pb-4 text-5xl font-semibold underline decoration-wavy decoration-2`}>
                    Photo Gallery
                </p>
            </div>
        </div>

        <div className={`grid grid-cols-3 items-center gap-4`}>
            <div className={`flex col-span-3 justify-center pb-8`}>
                <p className={`text-2xl font-bold`}>Explore</p>
            </div>
            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('location')}>
                    <Image src="/sample/1.jpeg" width="100" height="100" alt="Sample Picture 1" />
                    <span className="">By Location</span>
                </div>
            </div>

            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('person')}>
                    <Image src="/sample/2.jpeg" width="100" height="100" alt="Sample Picture 2" />
                    <span className="">By Person</span>
                </div>
            </div>

            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('time')}>
                    <Image src="/sample/3.jpeg" width="100" height="100" alt="Sample Picture 3" />
                    <span className="">By Time</span>
                </div>
            </div>

            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('album')}>
                    <Image src="/sample/4.jpeg" width="100" height="100" alt="Sample Picture 4" />
                    <span className="">By Album</span>
                </div>
            </div>

            <div className={`flex justify-stretch py-2 items-center hover:bg-gray-400 hover:text-white`}>
                <div className="flex-col" onClick={() => handleClick('tag')}>
                    <Image src="/sample/5.jpeg" width="100" height="100" alt="Sample Picture 5" />
                    <span className="">By Tag</span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default GalleryMenu
