import React, { useState, useEffect } from 'react';

// --- Reusable Component for the Video Modal ---
const VideoModal = ({ isOpen, onClose, videoId }) => {
    if (!isOpen) return null;

    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={onClose} // Close modal on overlay click
        >
            <div 
                className="relative bg-black w-full max-w-4xl rounded-lg shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            >
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-3 text-white text-4xl font-bold hover:text-gray-300 z-10"
                >
                    &times;
                </button>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                        id="youtube-iframe" 
                        className="w-full h-full" 
                        src={videoUrl}
                        title="YouTube video player"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

// --- "Quote" Section Component ---
const QuoteSection = () => {
    return (
        <section className="relative w-full bg-[#e0deda] pt-20 sm:pt-24 lg:pt-32 pb-24">
            {/* Top Wave */}
            <img 
                src="https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b243d94eb70c07e3d5d0_wave_2.svg" 
                loading="eager" 
                alt="Top Wave" 
                className="absolute top-0 left-0 w-full h-auto" 
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                {/* Top row of quote cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full mb-20">
                    <div className="bg-white rounded-2xl h-80 md:h-72 lg:h-80 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                        {/* Card Content Placeholder */}
                    </div>
                    <div className="bg-white rounded-2xl h-80 md:h-72 lg:h-80 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                        {/* Card Content Placeholder */}
                    </div>
                    <div className="bg-white rounded-2xl h-80 md:h-72 lg:h-80 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                        {/* Card Content Placeholder */}
                    </div>
                </div>
                
                {/* Quote heading and description */}
                <div className="w-full text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif]">
                        Add a <span className="underline underline-offset-4 decoration-[#6CC4E3]">Quote</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>

            {/* Bottom Wave */}
            <img 
                src="https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b24345927405279287d1_wave_3.svg" 
                loading="eager" 
                alt="Bottom Wave" 
                className="absolute bottom-0 left-0 w-full h-auto" 
            />
        </section>
    );
};


// --- "Our Story" Section Component ---
const OurStory = () => {
    return (
        // Using the requested background color #f0eee6
        <div className="bg-[#f0eee6] relative overflow-hidden pt-20 sm:pt-24 lg:pt-32 pb-16">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Left Column: Image and Text */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white p-3 rounded-2xl shadow-lg aspect-square">
                         <div className="bg-gray-200 h-full w-full rounded-xl"></div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
                        </p>
                    </div>
                </div>

                {/* Middle Column: Tall Image */}
                <div className="bg-white p-3 rounded-2xl shadow-lg h-full self-stretch">
                    <div className="bg-gray-200 h-full w-full rounded-xl min-h-[20rem] md:min-h-0"></div>
                </div>

                {/* Right Column: Title and Text */}
                <div className="text-gray-800">
                    <h2 className="text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'cursive', color: '#333' }}>
                        Our Story
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                </div>
            </div>
        </div>
    );
};


// --- "Performance Spotlights" Section Component ---
const HopeCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);

    return (
        <>
            {/* Restored original green background color */}
            <div className="bg-[#0d9488] relative overflow-hidden pt-20 sm:pt-24 lg:pt-32 pb-32 sm:pb-40 lg:pb-48">
                <div className="absolute inset-0 z-0">
                    <img src="https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b229e00682054217f8dc_abstract_green.svg" loading="eager" alt="" className="absolute top-0 left-0 w-1/3 max-w-md opacity-20 -translate-x-1/4 -translate-y-1/4 transform rotate-[-15deg]" />
                    <img src="https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b229e00682054217f8dc_abstract_green.svg" loading="eager" alt="" className="absolute bottom-0 right-0 w-1/3 max-w-md opacity-20 translate-x-1/4 translate-y-1/4 transform rotate-[-10deg]" />
                </div>
                <img src="https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b243d94eb70c07e3d5d0_wave_2.svg" loading="eager" alt="Top Wave" className="absolute top-0 left-0 w-full h-auto" />
                <div className="content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="block-heading-center text-center max-w-3xl mx-auto">
                        <div className="text-[#facc15] font-semibold tracking-wider uppercase">
                            Performance Spotlights
                        </div>
                        <h2 className="heading text-white font-bold text-4xl sm:text-5xl lg:text-6xl mt-2">
                            One of the only music schools of its kind
                        </h2>
                        <p className="text-gray-200 mt-6 text-lg max-w-2xl mx-auto">
                            Our unique approach to music education fosters creativity and passion in students of all ages. Discover a vibrant community where you can learn, perform, and grow as a musician.
                        </p>
                    </div>
                    <div onClick={openModal} className="relative max-w-4xl mx-auto mt-12 mb-[-8rem] sm:mb-[-10rem] lg:mb-[-12rem] cursor-pointer group">
                        <img 
                            src="https://assets-global.website-files.com/63e831145b939f85f3946000/63edeaa591a37f50fcef0529_lightbox.jpg" 
                            loading="eager" 
                            alt="Music lesson with an accordion" 
                            className="image-lightbox w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 border-8 border-white"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1362x766/cccccc/666666?text=Image+Not+Found'; }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                                <div className="text-lg">Play Video</div>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b24345927405279287d1_wave_3.svg" loading="eager" alt="Bottom Wave" className="absolute bottom-0 left-0 w-full h-auto z-20" />
            </div>
            <VideoModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                videoId="v1M4ydNlgP0"
            />
        </>
    );
};

// --- Main App Component ---
export default function App() {
    const bodyStyles = {
        fontFamily: "'Inter', sans-serif",
        backgroundColor: '#f0eee6', // Set main page background to match OurStory section
    };
    
    return (
        <div style={bodyStyles} className="antialiased">
            <QuoteSection />
            <OurStory />
            <HopeCard />
        </div>
    );
}
