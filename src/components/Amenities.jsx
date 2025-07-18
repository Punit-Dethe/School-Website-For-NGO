import React from 'react';

const Amenities = () => {
  return (
    <section className="w-full bg-[#eceae4] py-16 md:py-24 relative overflow-hidden">

      <div className="absolute w-[800px] h-[800px] bg-green-400 rounded-full opacity-10 blur-3xl" 
           style={{ left: 'calc(40% - 400px)', top: 'calc(40% - 400px)' }}></div>
      
      <div className="absolute w-[800px] h-[800px] bg-green-600 rounded-full opacity-15 blur-3xl"
           style={{ left: 'calc(60% - 400px)', top: 'calc(60% - 400px)' }}></div>
           
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">

        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Ethical Commitment</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We are dedicated to upholding the highest standards of integrity, transparency, and accountability in all our endeavors.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-4">

          {/* Card 1: Transparency */}
          <div className="col-span-12 md:col-span-6 bg-white/70 backdrop-blur rounded-xl p-4 flex flex-col h-full relative overflow-hidden border border-gray-200">
            <div className="flex flex-col h-full relative z-10">
              <div className="flex-1 flex items-center justify-center mb-4 relative">
                <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=1471&auto=format&fit=crop" alt="Transparency" className="h-48 w-full object-cover rounded-lg"/>
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Transparency &<br/>Accountability</h2>
                <p className="text-neutral-700 text-sm md:text-base">
                  We believe in open communication and clear reporting. Our stakeholders have the right to know how resources are utilized to create impact.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Community Focus */}
          <div className="col-span-12 md:col-span-6 bg-white/70 backdrop-blur rounded-xl p-4 flex flex-col h-full relative overflow-hidden border border-gray-200">
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-center justify-center md:justify-center pt-4 md:pt-8 pb-4 md:pb-0 md:pl-52 relative">
                 <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop" alt="Community" className="h-40 w-full object-cover rounded-lg"/>
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Community-Centric<br />Approach</h2>
                <p className="text-neutral-700 text-sm md:text-base">
                  Our programs are designed with and for the communities we serve, ensuring their voices are heard and needs are at the forefront of our work.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Sustainability */}
          <div className="col-span-12 md:col-span-4 bg-white/70 backdrop-blur rounded-xl p-4 flex flex-col h-full relative overflow-hidden border border-gray-200">
            <div className="flex justify-center items-center mb-0 order-1 relative">
              <div className="relative w-full flex items-center justify-center z-10">
                <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1374&auto=format&fit=crop" alt="Sustainability" className="w-56 h-56 object-cover rounded-lg"/>
              </div>
            </div>
            
            <div className="flex flex-col h-full order-2">
              <div>
                <h2 className="text-3xl font-bold mb-4 leading-tight">Sustainable Practices</h2>
                <p className="text-neutral-700 mb-6 text-sm md:text-base">
                  We are committed to environmentally responsible operations, protecting our planet for future generations.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Respect & Dignity */}
          <div className="col-span-12 md:col-span-8 flex flex-col gap-4">

            <div className="bg-white/70 backdrop-blur rounded-xl p-8 flex flex-col h-full relative overflow-hidden border border-gray-200">
              <div className="flex flex-col h-full">
                <div className="w-full flex justify-end mb-4 pr-8">
                  <img src="https://images.unsplash.com/photo-1604881991720-f91add269612?q=80&w=1374&auto=format&fit=crop" alt="Respect" className="h-32 w-auto object-cover rounded-lg"/>
                </div>
                <div className="w-full">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Respect & Dignity for All</h2>
                  <p className="text-neutral-700 text-sm md:text-base">
                    We treat every individual with respect and dignity, fostering an inclusive environment where everyone feels valued and empowered.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-white/30 backdrop-blur rounded-xl p-8 flex flex-col md:flex-row justify-between items-center border border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-0 whitespace-nowrap">Join Us in Making a Difference</h2>
              <a 
                href="#"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors border border-yellow-400">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities; 