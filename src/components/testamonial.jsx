import React, { useState } from "react";

// Testimonial data matching the reference design
const testimonials = [
  {
    name: "Anjali Mehra",
    title: "Parent",
    testimonial: "Prana Foundation has been a blessing for my son. The one-on-one attention he receives has boosted his confidence and learning. We feel truly supported here.",
    avatar: "A",
    companyLogo: "Prana",
    companyIcon: "P"
  },
  {
    name: "Rajesh Iyer",
    title: "Volunteer",
    testimonial: "Volunteering at Prana has been one of the most rewarding experiences of my life. The children are so full of energy and creativity, and the team genuinely cares for every child",
    avatar: "R",
    companyLogo: "Prana",
    companyIcon: "P"
  },
  {
    name: "Sneha Kulkarni",
    title: "Parent",
    testimonial: "My daughter loves the art and dance workshops! She has found new ways to express herself, and I’ve seen such a positive change in her personality.",
    avatar: "S",
    companyLogo: "Prana",
    companyIcon: "P"
  },
  {
    name: "Vikram Sharma",
    title: "Donor",
    testimonial: "Working with Prana Foundation has been transformative for our community outreach programs and environmental initiatives.",
    avatar: "V",
    companyLogo: "Prana",
    companyIcon: "P"
  },
  {
    name: "Pooja Nair",
    title: "Parent",
    testimonial: "The therapists and teachers at Prana treat every child with so much patience and care. My child looks forward to going every single day!",
    avatar: "P",
    companyLogo: "Prana",
    companyIcon: "P"
  }
];

// Arrow component for navigation
const Arrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
  >
    {direction === "left" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    )}
  </button>
);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    return {
      prev: testimonials[prevIndex],
      current: testimonials[currentIndex],
      next: testimonials[nextIndex]
    };
  };

  const { prev, current, next } = getVisibleCards();

  return (
    <section className="bg-[#f6f4ee] py-16 font-sans overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Know what parents think
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the experiences and feedback from parents who have entrusted us with their children's education and well-being.
          </p>
        </div>
        {/* Cards Container */}
        <div className="flex items-center justify-center relative h-[500px]">

          {/* Left Partial Card */}
          <div className="absolute left-0 w-[500px] h-[400px] transform -translate-x-40 opacity-25">
            <div className="bg-white rounded-3xl shadow-lg p-10 h-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-orange-200 overflow-hidden flex-shrink-0">
                  <h1 className="text-white text-lg font-bold">
                    {testimonials.avatar}
                  </h1>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {prev.name}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {prev.title}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                {prev.testimonial}
              </p>
            </div>
          </div>

          {/* Center Main Card */}
          <div className="w-[650px] h-[450px] z-10">
            <div className="bg-white rounded-3xl shadow-2xl p-12 h-full relative">
              <div className="flex items-start gap-8 mb-8">
                {/* Main Avatar */}
                <div className="w-32 h-32 rounded-full bg-orange-200 overflow-hidden flex-shrink-0">
                  <h1 className="text-white text-lg font-bold">
                    {testimonials.avatar}
                  </h1>
                </div>

                {/* Name and Title */}
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    {current.name}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {current.title}
                  </p>
                </div>

                {/* Right Small Avatar Removed */}
              </div>

              {/* Testimonial Text */}
              <div className="mb-10">
                <p className="text-xl text-gray-800 leading-relaxed">
                  {current.testimonial}
                </p>
              </div>

              {/* Company Logo Section Removed */}
            </div>
          </div>

          {/* Right Partial Card */}
          <div className="absolute right-0 w-[500px] h-[400px] transform translate-x-40 opacity-25">
            <div className="bg-white rounded-3xl shadow-lg p-10 h-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-orange-200 overflow-hidden flex-shrink-0 justify-center items-center">
                  <h1 className="text-white text-lg font-bold">
                    {testimonials.avatar}
                  </h1>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {next.name}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {next.title}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                {next.testimonial}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-[#008e78] hover:bg-[#007a68] flex items-center justify-center text-white transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-[#008e78] hover:bg-[#007a68] flex items-center justify-center text-white transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
