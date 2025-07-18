import React from 'react';

// --- DATA ---
// Data for the curriculum cards
const curriculumData = [
    { title: "Strings", description: "Violin, Fiddle, Viola, Cello, Bass, Harp", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2294bd9073df7e6ce86_icon_1.svg" },
    { title: "Keyboard", description: "Pianos, Harpsichords, Electronic Keyboards", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2298b497e78065a42d0_icon_2.svg" },
    { title: "Guitar", description: "Acoustic Guitar, Electric Guitar, Ukulele, Bass", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2291eb4ad95d7faab90_icon_3.svg" },
    { title: "Voice", description: "Classical, Broadway, Jazz, Pop, Rock, Folk", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2290a974854a325ea73_icon_4.svg" },
    { title: "Percussion", description: "Drums, Hand Percussion, Symphonic, Mallet", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b229be8e5c59e1eaea13_icon_5.svg" },
    { title: "Woodwinds", description: "Flute, Recorder, Piccolo, Clarinet, Saxophone", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2295c38f40af11de78b_icon_6.svg" },
    { title: "Brass", description: "Trombone, French Horn, Tuba, Euphonium", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b229c21faa787fd52dff_icon_7.svg" },
    { title: "Electronic", description: "Synthesizers, Drum Machines, Digital Pianos", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b229eaf853d7836b4e60_icon_8.svg" },
    { title: "World", description: "Various cultural and ethnic traditions", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b22908987eabc30398d6_icon_9.svg" },
];


// --- COMPONENTS ---

// Card for a single lesson type
const LessonCard = ({ iconUrl, title, description }) => (
    <a href="#" className="block p-6 text-center bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
        <img src={iconUrl} loading="eager" alt={`${title} icon`} className="w-12 h-12 mb-4 mx-auto" />
        <h3 className="text-xl font-bold text-gray-800 mb-2 font-lora">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </a>
);


// Main Curriculum Component
export default function Curriculum() {
    return (
        <div className="bg-white font-sans">
            {/* Add Google Fonts for 'Lora' */}
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
                .font-lora { font-family: 'Lora', serif; }
              `}
            </style>

            <section className="py-20 sm:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Changed items-center to items-start for top alignment */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Text Content (takes 2 of 5 columns) */}
                        <div className="lg:col-span-2">
                            <p className="text-lg font-semibold text-[#0D6E62] mb-2 tracking-wider">MUSIC LESSONS WE TEACH</p>
                            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 font-lora leading-tight">
                                Find out which instrument you or your child {' '}
                                <span className="bg-[linear-gradient(180deg,transparent_65%,#FCD34D_65%)]">
                                    can start learning!
                                </span>
                            </h2>
                            <p className="mt-6 text-lg text-gray-600">
                                Quis accumsan mi tellus sagittis ultrices. Imperdiet nunc ut tempor lacus nulla eget varius diam ut. Sem id quam.
                            </p>
                            <a href="#" className="mt-8 inline-block bg-[#0D6E62] text-white font-bold py-3 px-8 rounded-full hover:bg-[#118a7e] transition-colors duration-300 shadow-lg">
                                Try a Free Class
                            </a>
                        </div>

                        {/* Right Column: Lessons Grid (takes 3 of 5 columns) */}
                        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                            {curriculumData.map((lesson) => (
                                <LessonCard key={lesson.title} title={lesson.title} description={lesson.description} iconUrl={lesson.iconUrl} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
