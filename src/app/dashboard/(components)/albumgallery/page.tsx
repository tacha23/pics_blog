"use client"

import React from 'react'
import CameraRollPics from './CameraRollPics'

const AlbumGallery = () => {

  const handleChildClick = (data: string) => {
    console.log("album gallery page", data)
  }

  return (
    <div>
      <a href="/dashboard">DASHBOARD</a>
      <br />
      
      Album Gallery Page
      <br />

      <CameraRollPics sendDataToParent={handleChildClick} prevPage="album" ></CameraRollPics>
    </div>
  )
}

export default AlbumGallery
