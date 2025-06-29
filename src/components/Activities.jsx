import React from 'react';
// Note: Using the single provided screenshot for all speaker images.
// In a real application, these should be separate, optimized image files.
import speakerLineupImage from '../assets/Screenshot 2025-06-26 031635.png';

const speakers = [
  {
    name: 'Vlad Magdalin',
    category: 'Keynote',
    description: "Our founding Webflow father. Our dad joke aficionado. He puts the mad into Magdalin and will be kicking off FlowFest '25 as our keynote speaker!",
    bgColor: 'bg-yellow-400',
    imgStyle: { objectPosition: '25% 15%' }
  },
  {
    name: 'Ilja van Eck',
    category: 'Development',
    description: "Oh 'Eck, we've only gone and secured the web wizard himself. Co-founder of Osmo & Webflow superstar, we can't wait to learn from Ilja!",
    bgColor: 'bg-orange-400',
    imgStyle: { objectPosition: '70% 15%' }
  },
  {
    name: 'Cassie Evans',
    category: 'Animation',
    description: "Our GSAP fairy codemother is here to sprinkle some tween magic, animation goodness & Webflow's deepest darkest secrets now she's on the inside.",
    bgColor: 'bg-orange-400',
    imgStyle: { objectPosition: '25% 80%' }
  },
  {
    name: 'Stephanie Bruce',
    category: 'Design',
    description: "Devs want to work with her, designers want to be her. Steph has hit the ground running with her stunning web work and will be sharing her expert freelancer growth tips.",
    bgColor: 'bg-pink-400',
    imgStyle: { objectPosition: '50% 50%' } // This one is more central in the screenshot part
  },
    {
    name: 'Ross Plaskow',
    category: 'Animation',
    description: "We've all wanted to animate something cool with Rive, and Ross is here to show us how with his ridiculously fun and slick style.",
    bgColor: 'bg-yellow-400',
    imgStyle: { objectPosition: '75% 80%' }
  },
];

const SpeakerCard = ({ speaker }) => (
  <div className="w-full">
    <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-[8px_8px_0px_#000]">
      <div className="relative">
        <div className={`absolute inset-0 ${speaker.bgColor} rounded-xl transform -rotate-2`}></div>
        <div className="relative transform rotate-1">
            <div className="absolute top-2 left-2 bg-white text-black text-sm font-bold px-3 py-1 rounded-md border-2 border-black z-10">{speaker.category}</div>
            <img 
                src={speakerLineupImage} 
                alt={speaker.name} 
                className="w-full h-80 object-cover rounded-xl border-2 border-black"
                style={speaker.imgStyle}
            />
            <div className="absolute bottom-2 right-2 bg-white text-black text-lg font-bold px-4 py-2 rounded-md border-2 border-black z-10">{speaker.name}</div>
        </div>
      </div>
      <p className="mt-6 text-lg text-gray-700 font-medium">
        {speaker.description}
      </p>
    </div>
  </div>
);


const Activities = () => {
  return (
    <section id="speakers" className="py-24 bg-[#f3ecd2]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-1 lg:sticky top-24">
            <h2 className="text-6xl font-extrabold text-black tracking-tighter">
              Our 2025
            </h2>
            <div className="relative inline-block my-2">
                <div className="absolute -inset-2 bg-orange-400 rounded-xl transform -rotate-2"></div>
                <h3 className="relative text-6xl font-extrabold text-white px-4 py-2 rounded-xl border-2 border-black">
                    Speaker Lineup
                </h3>
            </div>
            <p className="mt-6 text-lg font-medium text-gray-600">
              Yep, we got Vladdy Daddy for the keynote. Plus some absolute legends that will also be sharing the stage. (More speaker announcements to come!)
            </p>
            <button className="mt-8 bg-pink-400 text-black font-bold text-xl py-4 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              Buy Tickets
            </button>
          </div>

          {/* Right Column - Speaker Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Stagger the columns manually for the desired effect */}
              <div className="space-y-16">
                <SpeakerCard speaker={speakers[0]} />
                <SpeakerCard speaker={speakers[2]} />
                <SpeakerCard speaker={speakers[4]} />
              </div>
              <div className="space-y-16 mt-0 md:mt-24">
                <SpeakerCard speaker={speakers[1]} />
                <SpeakerCard speaker={speakers[3]} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Activities;
