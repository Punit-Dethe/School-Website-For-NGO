import React, { useRef, useEffect, useState } from "react";

const sections = [
  {
    title: "Safe Rides",
    description:
      "Prioritizing the safety of female employees is paramount for all corporations. We ensure secure transportation with trained drivers and real-time tracking.",
    imageIndex: 0,
  },
  {
    title: "On Time Pickup",
    description:
      "Our dedicated on-time pickup service ensures that you arrive at the office promptly, helping maintain productivity and work schedules.",
    imageIndex: 0,
  },
  {
    title: "Hygienic Cabs",
    description:
      "We prioritize cleanliness in our cabs, ensuring they are sanitized after each ride for your health and peace of mind.",
    imageIndex: 1,
  },
  {
    title: "Cost Efficient",
    description:
      "We strategize rides to minimize company expenses, employing a point-to-point billing system that optimizes transportation costs.",
    imageIndex: 1,
  },
  {
    title: "Preventive Maintenance",
    description:
      "Our fleet preventive maintenance policy constrains us to ensure that vehicles are checked at proper intervals for safety and reliability.",
    imageIndex: 2,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We provide exceptional customer support through responsive inquiries, attentive in-ride experiences, and immediate assistance whenever needed.",
    imageIndex: 2,
  },
  {
    title: "Real-time Tracking",
    description:
      "Monitor your ride in real-time with our advanced GPS tracking system, ensuring transparency and peace of mind for both employees and employers.",
    imageIndex: 3,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Adapt to changing work schedules with our flexible booking system that accommodates last-minute changes and varying shift timings.",
    imageIndex: 3,
  },
];

const images = [
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const WhatWeDo = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((section, index) => {
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Calculate which image should be active
                // Sections 0,1 -> Image 0
                // Sections 2,3 -> Image 1
                // Sections 4,5 -> Image 2
                // Sections 6,7 -> Image 3
                const imageIndex = Math.floor(index / 2);

                if (imageIndex !== activeImageIndex) {
                  // Instantly change the image with fade effect
                  setActiveImageIndex(imageIndex);
                }
              }
            });
          },
          {
            threshold: 0.5, // Trigger when 50% of section is visible
            rootMargin: '0px'
          }
        );

        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [activeImageIndex]);

  return (
    <section className="relative bg-white">
      {/* Header */}
      <div className="w-full py-16 px-8 md:px-12" style={{ backgroundColor: '#f6f4ee' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-lg">
              What makes us different ?
            </h2>
            <p className="text-gray-400 mt-4 md:mt-2 max-w-xs text-base md:text-lg">
            At Prana Foundation, we provide education and care for children with disabilities, helping them learn, grow, and build confidence in a supportive environment.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Scroll Container */}
      <div className="relative">
        <div className="flex">
          {/* Left Side - Sticky Images */}
          <div className="w-1/2 sticky top-0 h-screen">
            <img
              src={images[activeImageIndex]}
              alt={`Service ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
          </div>

          {/* Right Side - Scrolling Sections */}
          <div className="w-1/2">
            {sections.map((section, index) => {
              // Define cycling background colors from the provided hex codes
              const cycleColors = [
                '#2bb3a3',
                '#1a9e90',
                '#0b9587',
              ];
              const bgColor = cycleColors[index % 3];

              // Since all cycling colors are dark, text should consistently be white
              const textColor = 'text-white';
              const numberColor = 'text-green-200'; // A light green for contrast on dark backgrounds

              return (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="h-screen flex items-center justify-center p-8 md:p-12"
                  style={{ backgroundColor: bgColor }}
                >
                  <div className="max-w-lg">
                    <div className="mb-6">
                      <span className={`text-6xl font-bold ${numberColor}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${textColor}`}>
                      {section.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${textColor} opacity-90`}>
                      {section.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
