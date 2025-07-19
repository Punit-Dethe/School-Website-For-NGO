import React from 'react';

// --- DATA ---
// Data for the curriculum cards, updated for a school's academic subjects
const curriculumData = [
    { title: "English & Literacy", description: "Reading, writing, and communication skills.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2294bd9073df7e6ce86_icon_1.svg" },
    { title: "Mathematics", description: "Numeracy, problem-solving, and critical thinking.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2298b497e78065a42d0_icon_2.svg" },
    { title: "Science", description: "Exploring the natural world through discovery and experimentation.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2291eb4ad95d7faab90_icon_3.svg" },
    { title: "Social Studies", description: "Understanding history, geography, and civic responsibility.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2290a974854a325ea73_icon_4.svg" },
    { title: "Arts & Creativity", description: "Fostering imagination through drawing, painting, and crafts.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b229be8e5c59e1eaea13_icon_5.svg" },
    { title: "Health & Wellness", description: "Promoting physical and mental well-being.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b2295c38f40af11de78b_icon_6.svg" },
    { title: "Computer Literacy", description: "Introducing essential digital skills for the modern world.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b229c21faa787fd52dff_icon_7.svg" },
    { title: "Life Skills", description: "Practical knowledge for personal and social development.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b229eaf853d7836b4e60_icon_8.svg" },
    { title: "Environmental Studies", description: "Learning about and caring for our planet.", iconUrl: "https://cdn.prod.website-files.com/63e831145b939f85f3946000/63e9b22908987eabc30398d6_icon_9.svg" },
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
        <div className="bg-[#00816d] font-sans">
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
                            <p className="text-lg font-semibold text-gray-200 mb-2 tracking-wider">OUR CURRICULUM</p>
                            <h2 className="text-6xl lg:text-7xl font-bold text-white font-lora leading-tight">
                                A Holistic Approach to {' '}
                                <span className="bg-[linear-gradient(180deg,transparent_65%,#FCD34D_65%)]">
                                    Education
                                </span>
                            </h2>
                            <p className="mt-6 text-xl text-gray-200">
                                Our curriculum is designed to nurture intellectual curiosity, critical thinking, and a love for learning, empowering every child to reach their full potential.
                            </p>
                            <a href="#" className="mt-8 inline-block bg-white text-[#00816d] font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg">
                                Learn More
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
