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

// --- Top Curve Wave Component (Top of Quote Section) ---
const TopCurveWave = () => (
    <div className="w-full overflow-hidden relative bg-white">
        <svg
            width="100%"
            height="80"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full"
        >
            <path
                d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z"
                fill="#eceae4"
            />
        </svg>
    </div>
);


// --- "Quote" Section Component ---
const QuoteSection = () => {
    return (
        <section className="relative w-full bg-[#eceae4] pt-20 sm:pt-24 lg:pt-32 pb-32">


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
                        Empowering Every <span className="underline underline-offset-4 decoration-[#6CC4E3]">Child’s Journey</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
                        At Prana, we believe that every child, regardless of their physical or mental challenges, carries within them a spark of limitless potential. With patience, care, and the right opportunities, that spark can become a guiding light—helping them discover new skills, build confidence, and grow into individuals who inspire the world. Our mission is not just to teach, but to nurture, uplift, and remind every child that they are capable of achieving dreams beyond boundaries.
                    </p>
                </div>
            </div>

            <img src="https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b24345927405279287d1_wave_3.svg" loading="eager" alt="Bottom Wave" className="absolute bottom-0 left-0 w-full h-auto z-20" />
        </section>
    );
};


// --- "Our Story" Section Component ---
const OurStory = () => {
    return (
        // Using the requested background color #f6f4ee and adding a gradient
        <div className="bg-gradient-to-b from-[#f6f4ee] to-[#f0eee6] relative overflow-hidden pb-24">
            {/* Top S-curve Wave - Positioned at very top to merge with above section */}


            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Left Column: Image and Text */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white p-3 rounded-2xl shadow-lg aspect-square">
                        <div className="bg-gray-200 h-full w-full rounded-xl"></div>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg">
                            Today, Prana is more than a school, it is a community of hope, growth, and possibilities. Every day, we work to help children discover their strengths, unlock their potential, and take steps towards a brighter future.
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
                        What began as a small child development and physiotherapy centre in Thane has now grown into a holistic learning and support space for children with physical and mental challenges.<br></br>
                        <br></br>
                        Founded by Dr. Payal Jain, a passionate physiotherapist with a vision to help children live beyond limitations, the journey started under the name Pra-Sadh Physio Fitness & Child Development Centre. At the time, the focus was on physiotherapy, pediatric care, and rehabilitation, helping children overcome developmental delays, mobility issues, and neurological challenges.
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
                {/* This wave is untouched, as requested */}
                <img src="https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b243d94eb70c07e3d5d0_wave_2.svg" loading="eager" alt="Top Wave" className="absolute top-0 left-0 w-full h-auto transform scale-x-[-1]" />
                <div className="content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="block-heading-center text-center max-w-3xl mx-auto">
                        <div className="text-[#facc15] font-semibold tracking-wider uppercase">
                            Performance Spotlights
                        </div>
                        <h2 className="heading text-white font-bold text-4xl sm:text-5xl lg:text-6xl mt-2">
                            One of the only non-profit schools of its kind
                        </h2>
                        <p className="text-gray-200 mt-6 text-lg max-w-2xl mx-auto">
                            we do not only teach but also provide a platform for the students to showcase their talents.
                        </p>
                    </div>
                    <div onClick={openModal} className="relative max-w-4xl mx-auto mt-12 mb-[-8rem] sm:mb-[-10rem] lg:mb-[-12rem] cursor-pointer group">
                        <img
                            src="https://assets-global.website-files.com/63e831145b939f85f3946000/63edeaa591a37f50fcef0529_lightbox.jpg"
                            loading="eager"
                            alt="Music lesson with an accordion"
                            className="image-lightbox w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 border-8 border-white"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1362x766/cccccc/666666?text=Image+Not+Found'; }}
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

// --- Heart-Shaped Image Display ---
const HeartImageDisplay = ({
    imageUrl = "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    altText = "Children learning and playing",
    size = "large"
}) => {
    const sizeClasses = {
        small: "w-48 h-48 sm:w-56 sm:h-56",
        medium: "w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80",
        large: "w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
    };

    return (
        <div className={`relative ${sizeClasses[size]} mx-auto`}>
            {/* SVG for perfect heart shape */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
                        <path d="M0.5,0.9 C0.5,0.9 0.1,0.65 0.1,0.35 C0.1,0.15 0.25,0.05 0.4,0.15 C0.45,0.1 0.5,0.15 0.5,0.15 C0.5,0.15 0.55,0.1 0.6,0.15 C0.75,0.05 0.9,0.15 0.9,0.35 C0.9,0.65 0.5,0.9 0.5,0.9 Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* Heart-shaped image container */}
            <div className="relative w-full h-full">
                {/* Main image with heart clipping */}
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-full object-cover shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                    style={{
                        clipPath: 'url(#heart-clip)',
                        transform: 'scale(1.2)',
                        transformOrigin: 'center center'
                    }}
                    loading="lazy"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                    }}
                />

                {/* Subtle overlay for better visual appeal */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ clipPath: 'url(#heart-clip)', transform: 'scale(1.2)', transformOrigin: 'center center' }}
                />

                {/* Optional floating heart icon */}
                <div className="absolute top-6 right-6 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Decorative elements around the heart */}
            <div className="absolute -inset-6 opacity-40 pointer-events-none">
                <div className="absolute top-2 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-2 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1500"></div>
            </div>
        </div>
    );
};


// --- Hero Section Component ---
const HeroSection = () => {
    return (
        <section className="relative bg-[#0d9488] text-white min-h-screen flex items-center overflow-hidden pb-32 pt-20 -mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text */}
                    <div className="text-center md:text-left">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight drop-shadow-md">
                            Inspiring Young<br />Lives Through<br />Education
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-md mx-auto md:mx-0 drop-shadow">
                            Unleash your inner passion. Join our school today!
                        </p>
                        <button className="mt-8 bg-gray-900 bg-opacity-80 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-100 transition-colors shadow-lg">
                            Our Programs
                        </button>
                    </div>

                    {/* Right Column - Hero Image */}
                    <div className="relative flex items-center justify-center w-full">
                        <div className="w-full max-w-2xl">
                            <img
                                src="/Image/hero.png"
                                alt="Children learning and growing at Prana Foundation"
                                className="w-full h-auto max-w-full object-contain rounded-2xl"
                                style={{ clipPath: 'none' }}
                                loading="lazy"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom curve separator */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-32">
                    <path
                        d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z"
                        fill="#eceae4"
                    />
                </svg>
            </div>
        </section>
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
            <HeroSection />
            <QuoteSection />
            <OurStory />
            <HopeCard />
        </div>
    );
}
