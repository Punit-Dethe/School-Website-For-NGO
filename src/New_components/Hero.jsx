import React from 'react'

const Hero = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden -mt-[88px]">
            <div className='w-full h-full flex pt-[88px]'>
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
