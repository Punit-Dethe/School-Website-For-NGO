import React from 'react';

const Hopecard = () => {
    return (
        <section className="w-full bg-white px-4 sm:px-8 lg:px-12 py-16">
            {/* Full-width blue card with responsive layout */}
            <div className="w-full bg-[#6CC4E3] rounded-xl shadow-lg p-6 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px]">
                    {/* Left side: Text content */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif] leading-tight">
                            You are the <span className="underline underline-offset-4 decoration-white">hope of others.</span>
                        </h3>
                        <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>

                    {/* Right side: Image placeholder */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md h-80 lg:h-96 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hopecard;