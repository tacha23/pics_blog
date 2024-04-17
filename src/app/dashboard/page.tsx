"use client"

import React, { useState } from 'react'

import Navbar from "../navbar";
import Navbar2 from "../navbar2";
import Image from "next/image"
import GalleryMenu from "./(components)/GalleryMenu";
import LocationMenu from './(components)/LocationMenu';
import PersonMenu from './(components)/PersonMenu';
import TimeMenu from './(components)/TimeMenu';
import AlbumMenu from './(components)/AlbumMenu';
import TagMenu from './(components)/TagMenu';
import CameraRollPics from './(components)/albumgallery/CameraRollPics';
import ScreenshotsPics from './(components)/albumgallery/ScreenshotsPics';
import DownloadedPics from './(components)/albumgallery/DownloadedPics';
import BluetoothPics from './(components)/albumgallery/BluetoothPics';

export default function Dashboard() {

    const [showComponent, setShowComponent] = useState('')

    const handleChildClick = (data: string) => {
        console.log("data from child", data)
        setShowComponent(data)
    }

    const [componentToRender, setComponentToRender] = useState('')

    const renderContent = () => {
        switch(showComponent) {
            case 'location':
                return <LocationMenu sendDataToParent={handleChildClick}></LocationMenu>
            case 'person':
                return <PersonMenu sendDataToParent={handleChildClick}></PersonMenu>
            case 'time':
                return <TimeMenu sendDataToParent={handleChildClick}></TimeMenu>
            case 'album':
                return <AlbumMenu sendDataToParent={handleChildClick}></AlbumMenu>
            case 'tag':
                return <TagMenu sendDataToParent={handleChildClick}></TagMenu>
            case 'camera-roll':
                return <CameraRollPics sendDataToParent={handleChildClick} prevPage="album" ></CameraRollPics>
            case 'ss':
                return <ScreenshotsPics sendDataToParent={handleChildClick}></ScreenshotsPics>
            case 'downloaded':
                return <DownloadedPics sendDataToParent={handleChildClick}></DownloadedPics>
            case 'bluetooth-downloads':
                return <BluetoothPics sendDataToParent={handleChildClick}></BluetoothPics>
            default:
                return <GalleryMenu sendDataToParent={handleChildClick}></GalleryMenu>
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            {
                renderContent()
            }
            {/* <GalleryMenu sendDataToParent={handleChildClick}></GalleryMenu> */}
        </div>
    )
}