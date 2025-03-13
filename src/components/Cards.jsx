import React from 'react'
import Card from './ui/Card'
import { CardsData } from '../data/index'

const Cards = () => {
    return (
        <div className='w-full p-4 sm:p-6 md:p-10 h-fit'>
            <h1 className='mb-6 text-2xl font-black sm:text-3xl md:text-4xl'>Browse by Category</h1>
            <Card data={CardsData} />
        </div>
    )
}

export default Cards
