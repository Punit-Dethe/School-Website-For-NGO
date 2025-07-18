import React, { useState } from "react";

// Testimonial data matching the reference design
const testimonials = [
  {
    name: "Annemarie Buitelaar",
    title: "CEO Adevinta Benelux (Marktplaats & 2dehands.be)",
    testimonial: "We've been successfully collaborating with OPP for years to ensure that millions of Marktplaats users enjoy a seamless and secure payment experience.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    companyLogo: "Marktplaats",
    companyIcon: "M"
  },
  {
    name: "Sarah Johnson", 
    title: "Director of Operations, TechCorp",
    testimonial: "The partnership with Prana Foundation has transformed how we approach community engagement and sustainable development in our operations.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    companyLogo: "TechCorp",
    companyIcon: "T"
  },
  {
    name: "Michael Chen",
    title: "Founder & CEO, GreenTech Solutions", 
    testimonial: "Prana Foundation's innovative approach to education and community development has been instrumental in our mission to create positive social impact.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    companyLogo: "GreenTech",
    companyIcon: "G"
  },
  {
    name: "Emma Rodriguez",
    title: "Head of Sustainability, EcoVentures",
    testimonial: "Working with Prana Foundation has been transformative for our community outreach programs and environmental initiatives.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    companyLogo: "EcoVentures", 
    companyIcon: "E"
  },
  {
    name: "David Park",
    title: "Managing Director, Innovation Labs",
    testimonial: "The collaborative approach and expertise of Prana Foundation has helped us achieve remarkable results in our social impact projects.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    companyLogo: "Innovation Labs",
    companyIcon: "I"
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
    <section className="bg-gray-50 py-16 font-sans overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Cards Container */}
        <div className="flex items-center justify-center relative h-[500px]">
          
          {/* Left Partial Card */}
          <div className="absolute left-0 w-[500px] h-[400px] transform -translate-x-40 opacity-25">
            <div className="bg-white rounded-3xl shadow-lg p-10 h-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-orange-200 overflow-hidden flex-shrink-0">
                  <img
                    src={prev.avatar}
                    alt={prev.name}
                    className="w-full h-full object-cover"
                  />
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
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
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
                
                {/* Right Small Avatar */}
                <div className="w-20 h-20 rounded-full bg-orange-200 overflow-hidden flex-shrink-0 opacity-70">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Testimonial Text */}
              <div className="mb-10">
                <p className="text-xl text-gray-800 leading-relaxed">
                  {current.testimonial}
                </p>
              </div>
              
              {/* Company Logo - Centered */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    {current.companyIcon}
                  </span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {current.companyLogo}
                </span>
              </div>
            </div>
          </div>

          {/* Right Partial Card */}
          <div className="absolute right-0 w-[500px] h-[400px] transform translate-x-40 opacity-25">
            <div className="bg-white rounded-3xl shadow-lg p-10 h-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-orange-200 overflow-hidden flex-shrink-0">
                  <img
                    src={next.avatar}
                    alt={next.name}
                    className="w-full h-full object-cover"
                  />
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
            className="w-12 h-12 rounded-full bg-purple-200 hover:bg-purple-300 flex items-center justify-center text-purple-700 transition-all duration-200"
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
            className="w-12 h-12 rounded-full bg-purple-200 hover:bg-purple-300 flex items-center justify-center text-purple-700 transition-all duration-200"
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
