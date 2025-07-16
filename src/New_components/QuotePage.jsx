import React from 'react';

const QuoteSection = () => {
    return (
        <section className="w-full bg-white px-4 sm:px-8 lg:px-12 pt-12 pb-16">
            {/* Top row of quote cards - Full width responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mb-16">
                <div className="bg-white rounded-xl shadow-lg h-48 md:h-40 lg:h-48 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border border-gray-300 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.25)]">
                </div>
                <div className="bg-white rounded-xl shadow-lg h-48 md:h-40 lg:h-48 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border border-gray-300 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.25)]">
                </div>
                <div className="bg-white rounded-xl shadow-lg h-48 md:h-40 lg:h-48 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border border-gray-300 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.25)]">
                </div>
            </div>
            
            {/* Quote heading and description - Full width */}
            <div className="w-full text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif]">
                    Add a <span className="underline underline-offset-4 decoration-[#6CC4E3]">Quote</span>
                </h2>
                <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </section>
    );
};

export default QuoteSection;
