import React from 'react'
import '../../../../Web Dev/Projects/Prana/src/assets/fonts/fonts.css';

const Navbar = () => {
    return (
        <div className='w-full h-16 flex justify-between item-center'>
            <div className='ml-12 p-4'>
                <h1 className='text-white font-mould font-bold text-2xl'>Prana</h1>
            </div>
            <div className='flex items-center gap-10'>
                <ul className='flex items-center gap-12 font-semibold text-white'>
                    <a href='#Home' className='hover:text-red-400 cursor-pointer'>Home</a>
                    <a href='#About' className='hover:text-red-400 cursor-pointer'>About Us</a>
                    <a href='#Curriculum' className='hover:text-red-400 cursor-pointer'>Curriculum</a>
                    <a href='#Activities' className='hover:text-red-400 cursor-pointer'>Activities</a>
                    <a href='#Reviews' className='hover:text-red-400 cursor-pointer'>Reviews</a>
                    <a href='#FAQ' className='hover:text-red-400 cursor-pointer'>FAQ</a>
                </ul>

            </div>
            <div className='mr-12 p-4 '>
                <button className='bg-transparent hover:bg-gray-400 p-2 w-36 text-white font-bold rounded-full border-2 border-white '>Donate</button>
            </div>
        </div>
    )
}
export default Navbar
