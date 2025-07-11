import React from 'react';

const Hopecard = () => {
    return (
        <section className="w-full bg-white flex flex-col items-center px-2 sm:px-4 pt-0 pb-0">
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mb-12">
                {/* Blue box with quote */}
                <div className="flex-1 bg-[#6CC4E3] rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-center min-h-[250px]">
                    <div className='flex flex-col items-start md:items-start'>
                        <h3 className="text-xl font-bold mb-2 text-white font-['MouldyCheeseRegular-WyMWG','Outfit',sans-serif]">
                            You are the <span className="underline underline-offset-4 decoration-white">hope of others.</span>
                        </h3>
                        <p className="text-white text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>

                    {/* Empty rounded shadow box */}
                    <div className="flex-1 flex flex-col items-center mt-8 mb-8 md:mt-0 md:mb-0 md:items-start">
                        <div className="w-80 h-96 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hopecard;