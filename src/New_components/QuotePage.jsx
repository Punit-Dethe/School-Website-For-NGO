import React from 'react';

const QuoteSection = () => {
    return (
        <section className="w-full bg-white flex flex-col items-center px-2 sm:px-4 pt-12 pb-0">
            {/* Top row of quote cards */}
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl mb-16">

                <div className="bg-white rounded-xl shadow-lg w-64 h-40 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border border-gray-300 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.25)]">
                </div>
                <div className="bg-white rounded-xl shadow-lg w-64 h-40 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border border-gray-300 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.25)]">
                </div>
                <div className="bg-white rounded-xl shadow-lg w-64 h-40 flex items-center justify-center text-gray-400 text-center text-lg font-semibold border border-gray-300 drop-shadow-[4px_4px_0px_rgba(108,196,227,0.25)]">
                </div>

            </div>
            {/* Add a Quote heading and description */}
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif]">
                Add a <span className="underline underline-offset-4 decoration-[#6CC4E3]">Quote</span>
            </h2>
            <p className="text-gray-500 max-w-2xl text-center mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </section>
    );
};

export default QuoteSection;
