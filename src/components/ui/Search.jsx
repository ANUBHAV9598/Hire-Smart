import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <div className='ml-[60%] w-full h-12 flex items-center gap-3'>
            <div className='border-2 searchBorder border-[#F5DEB3] flex items-center justify-between rounded-md'>
                <input className='w-96 h-12 text-black bg-transparent px-3 border-none outline-none' type="text" placeholder='What type of worker do you need?' />
                <i className="ri-search-line text-2xl px-3"/>
            </div>
            <Link to={'/'} className='Linkk px-4 py-2 text-white fomt-semibold border-2 border-[#009963] bg-[#009963] rounded hover:bg-[#009963]/90'>Find Workers</Link>
        </div>
    )
}

export default Search