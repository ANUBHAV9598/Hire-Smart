import React from 'react'
import Navbar from './Navbar'
import Carousel from './ui/Carousel'
import { CarouselSlider } from '../data/index'

const Home = () => {
    return (
        <div className='w-screen h-screen overflow-clip relative'>
            <Navbar/>
            <Carousel data = {CarouselSlider}/>
        </div>
    )
}

export default Home