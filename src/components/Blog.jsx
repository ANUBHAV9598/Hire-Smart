import React from 'react'
import BlogCard from './ui/BlogCard'
import { BlogData } from '../data/index'
import Marquee from "react-fast-marquee";

const Blog = () => {
    return (
        <div className='w-full h-fit bg-[#F0F0E5] p-4 sm:p-6 md:p-10'>
            <h1 className='mb-4 text-2xl font-black sm:text-3xl'>Latest from Our Blog</h1>
            <Marquee
                gradient={false}
                speed={80}  // Slightly reduced for better readability
                direction="left"
                pauseOnHover
                className="max-w-full overflow-hidden"
            >
                {BlogData.map((item, index) => (
                    <div key={index} className="mx-2 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[22vw]">
                        <BlogCard data={item} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Blog
