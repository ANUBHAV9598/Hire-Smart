import React from 'react'
import TopRatedCard from './ui/TopRatedCard'
import { TopRatedWorkerData } from '../data/index'

const TopRatedWorker = () => {
    return (
        <div className='w-full h-fit bg-[#F5F0E5] p-4 sm:p-6 md:p-10'>
            <h1 className='my-3 text-2xl font-black sm:text-3xl'>Top Rated Workers</h1> 
            <TopRatedCard data={TopRatedWorkerData} />
        </div>
    )
}

export default TopRatedWorker
