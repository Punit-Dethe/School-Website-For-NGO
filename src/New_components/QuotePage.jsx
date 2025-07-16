import React from 'react';

const QuoteSection = () => {
    return (
        <section className="w-full bg-white px-4 sm:px-8 lg:px-12 pt-12 pb-16">
            {/* Top row of quote cards - Full width responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full mb-20">
                <div className="bg-white rounded-2xl h-80 md:h-72 lg:h-80 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                </div>
                <div className="bg-white rounded-2xl h-80 md:h-72 lg:h-80 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                </div>
                <div className="bg-white rounded-2xl h-80 md:h-72 lg:h-80 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                </div>
            </div>
            
            {/* Quote heading and description - Full width */}
            <div className="w-full text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif]">
                    Add a <span className="underline underline-offset-4 decoration-[#6CC4E3]">Quote</span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
        </section>
    );
};

export default QuoteSection;
