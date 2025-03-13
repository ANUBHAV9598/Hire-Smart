import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BlogCard = ({ data }) => {
    return (
        <div className='w-full sm:w-72 md:w-80 h-auto min-h-[50vh] overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105'>
            {/* Blog Image */}
            <div className='w-full overflow-hidden h-36'>
                <img 
                    src={data.img} 
                    alt="blog-img" 
                    className='object-cover w-full h-full'
                />
            </div>

            {/* Blog Content */}
            <div className='flex flex-col justify-between h-full px-4 py-3'>
                <h2 className='text-xs sm:text-[0.7rem] uppercase text-[#A1824A] font-semibold tracking-wide'>
                    {data.subTitle}
                </h2>
                <h1 className='text-base font-bold leading-tight sm:text-lg'>
                    {data.title}
                </h1>
                <p className='text-sm text-gray-600 line-clamp-3'>
                    {data.des}
                </p>
                {/* Read More Button */}
                <div className='flex items-center gap-2 text-[#20A676] cursor-pointer group'>
                    <Link to={'/'} className='text-sm font-semibold group-hover:underline'>Read Article</Link>
                    <FaArrowRightLong className='text-sm transition-transform group-hover:translate-x-1' />
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
