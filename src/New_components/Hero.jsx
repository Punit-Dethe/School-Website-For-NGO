import React from 'react'
import Navbar from "./Navbar.jsx";

const Hero = () => {
    return (
        <div className="min-h-screen mb-4 bg-transparent bg-center flex flex-col items-center w-screen h-screen overflow-hidden">
            <div className='w-full h-screen flex'>
                <div className='absolute w-screen'>
                    <Navbar/>
                </div>
                <div className='absolute w-[50rem] h-[30rem] border-4 border-black rounded-2xl top-[10rem] left-[40rem] right-2.5 bg-white z-10'>

                </div>
                <div className='w-3/5 flex flex-col items-center justify-center  bg-[#6CC4E3] h-full'>
                    <div className='max-w-[25rem] mr-24'>
                        <h1 className='text-white text-8xl font-bold'>Give <span className='underline underline-offset-4 decoration-4 under '> Hope </span> To Children In Need</h1>
                        <div className='flex gap-8 mt-10'>
                            <button className='bg-[#F97028] text-white font-bold p-2 w-44 rounded-full'> Donate </button>
                            <button className='bg-transparent hover:bg-gray-400 p-2 w-50 text-white font-bold rounded-full border-2 border-white'> What is written here </button>
                        </div>
                    </div>

                </div>
                <div className='w-2/5 bg-[#02A856] h-full'>

                </div>
            </div>
        </div>
    )
}
export default Hero
