import React from 'react'
import SuccessCard from './ui/SuccessCard'
import { SuccessStoriesData } from '../data/index'

const Success = () => {
    return (
        <div className='w-full h-auto min-h-[80vh] p-4 sm:p-6 md:p-10'>
            <h1 className='my-3 text-2xl font-black sm:text-3xl'>Success Stories</h1>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {SuccessStoriesData.map((item, index) => (
                    <SuccessCard key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default Success
