import React from 'react';

const Hopecard = () => {
    return (
        <section className="w-full bg-white px-4 sm:px-8 lg:px-12 py-20">
            {/* Single blue card matching reference image */}
            <div className="w-full bg-[#6CC4E3] rounded-3xl p-8 md:p-12 lg:p-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center h-full">
                    {/* Left side: Text content - Takes up 3 columns */}
                    <div className="lg:col-span-3 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif] leading-tight">
                            You are the <span className="underline underline-offset-4 decoration-white">hope of others.</span>
                        </h3>
                        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        </p>
                    </div>

                    {/* Right side: White rounded square - Takes up 2 columns */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                        <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] border-2 border-gray-100" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hopecard;