import React from 'react';

// Placeholder images for the slider
const imageUrls = [
  'https://images.unsplash.com/photo-1541432182332-9b2a79658607?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519687258029-71c82f5b7f20?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1502014389994-711306d1c4b1?auto=format&fit=crop&w=1200&q=80',
];

const Hero = () => {
    // Basic state for a simple image slider
    const [currentImage, setCurrentImage] = React.useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
    };

    return (
        <div className="relative font-sans overflow-hidden">
            <section className="bg-[#fdefe4] pt-20 pb-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column */}
                        <div className="text-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Kalam', cursive" }}>
                                Every Life Is Important
                            </h1>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="text-sm text-gray-500 mb-10">
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                                    DONATE
                                </button>
                                <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                                    Activities
                                </button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="relative p-4 mt-10 md:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-[40px] transform -rotate-3"></div>
                            <div className="relative bg-white p-2 rounded-[35px] shadow-2xl">
                                <div className="relative overflow-hidden rounded-[30px]">
                                    <img src={imageUrls[currentImage]} alt="Happy children" className="w-full h-[450px] object-cover transition-transform duration-500 ease-in-out" />
                                    {/* Slider controls */}
                                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-colors text-gray-800 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-colors text-gray-800 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Curved bottom separator that transitions to the next section's background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'translateY(1px)' }}>
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[120px]">
                    <path d="M0,120 C240,0 1200,0 1440,120 L1440,121 L0,121 Z" fill="#000000"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
