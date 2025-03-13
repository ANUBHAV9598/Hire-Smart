import React from 'react'
import { Link } from 'react-router-dom'

const SuccessCard = ({data}) => {
    return (
        <div className='w-[90vw] sm:w-[50vw] md:w-[35vw] lg:w-[17.1vw] h-[50vh] flex flex-col items-center overflow-hidden bg-white p-3 rounded-lg shadow-md'>
            {/* Background Image */}
            <div className='w-full h-[35%]'>
                <img className='object-cover w-full h-full rounded-md' src={data.img} alt="img" />
            </div>

            {/* Info Header */}
            <div className='flex items-center w-full gap-3 px-2 my-2'>
                {/* Profile Image */}
                <img className='object-cover rounded-full h-11 w-11' src={data.pImg} alt="img" />
                
                {/* Title & Name */}
                <div className='flex flex-col justify-center'>
                    <h1 className='text-base font-semibold sm:text-sm'>{data.title}</h1>
                    <h2 className='text-sm text-[#A1824A]'>{data.name}</h2>
                </div>
            </div>
            
            {/* Description */}
            <p className='w-full px-2 my-2 text-sm leading-tight text-center sm:leading-normal'>"{data.des}"</p>
            
            {/* Link */}
            <Link to={'/'} className='text-[0.9rem] sm:text-sm text-[#20A676] flex items-center gap-1 mt-auto'>
                Read More
                <i className='text-black text-[0.9rem] ri-arrow-right-s-line'></i>
            </Link>
        </div>
    )
}

export default SuccessCard
