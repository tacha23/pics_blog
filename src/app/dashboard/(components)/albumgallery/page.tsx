"use client"

import React, { useState, useEffect } from 'react'

import AlbumMenu from '../AlbumMenu';
import CameraRollPics from './CameraRollPics';
import ScreenshotsPics from './ScreenshotsPics';
import DownloadedPics from './DownloadedPics';
import BluetoothPics from './BluetoothPics';

const AlbumGallery = () => {

    const [showComponent, setShowComponent] = useState('')

    const handleClick = (albumSelected: string) => {
      console.log("albumSelected", albumSelected)
      setShowComponent(albumSelected)
    }

    const handleChildClick = (data: string) => {
      console.log("data from child", data)
      setShowComponent(data)
    }

    const renderContent = () => {
      if(showComponent !== '' && showComponent !== 'album') {
        switch(showComponent) {
          case 'camera-roll':
                  return <CameraRollPics sendDataToParent={handleChildClick} prevPage="album" ></CameraRollPics>
              case 'ss':
                  return <ScreenshotsPics sendDataToParent={handleChildClick}></ScreenshotsPics>
              case 'downloaded':
                  return <DownloadedPics sendDataToParent={handleChildClick}></DownloadedPics>
              case 'bluetooth-downloads':
                  return <BluetoothPics sendDataToParent={handleChildClick}></BluetoothPics>
        }
      } else {
        return (
          <AlbumMenu sendDataToParent={handleClick}></AlbumMenu>
        )
      }
    }

    useEffect(() => {
      renderContent()
    }, [showComponent])


  return (
    <div>
      <main className={`grid p-4`}>
      
        { renderContent() }
      
      </main>
    </div>
  )
}

export default AlbumGallery
