import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import faqImage from '../assets/Screenshot 2025-06-26 122635.png';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'WHat are u doing',
      answer: 'chuhc uieweo cbwiebc w w we we wwt w we wev ew w w we wewgwfwfsvw ww w w we we wweew uiwgcuy gwecwec vwiubniwe iuwb iwe iwu igbuyiweubwiv vwv wvwevwevwe we we ouwbiuweci wvwwee w w w w'
    },
    {
      question: 'How do I get there?',
      answer: 'Details about transportation and directions will be provided closer to the event date. Please check our website for updates.'
    },
    {
      question: 'Is there food included?',
      answer: 'Food and beverages will be available for purchase from various vendors at the event. We will have options to cater to different dietary needs.'
    },
    {
      question: 'What should I bring?',
      answer: 'We recommend bringing comfortable clothing, sunscreen, a reusable water bottle, and any personal items you may need. A detailed list will be shared closer to the event.'
    },
    {
      question: 'Will there be an afterparty?',
      answer: 'Information regarding an official afterparty will be announced soon. Stay tuned to our social media channels and website for updates!'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black inline-block">
            Frequently Asked
          </h2>
          <div className="inline-block bg-primary-orange text-white px-6 py-2 rounded-lg mt-2 border-2 border-black shadow-[4px_4px_0px_#000000]">
            <h2 className="text-5xl font-bold">Questions</h2>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side with just the image */}
          <div className="md:w-1/2">
            <img src={faqImage} alt="FAQ" className="rounded-2xl border-2 border-black" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
          </div>
          
          {/* Right side with interactive FAQ */}
          <div className="md:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 relative">
                {/* FAQ Question Button */}
                <div className="bg-secondary-orange rounded-xl border-2 border-black p-4 flex justify-between items-center cursor-pointer z-20 relative" onClick={() => toggleFAQ(index)}>
                  <h3 className="text-lg font-medium text-black">
                    {faq.question}
                  </h3>
                  <span>
                    {activeIndex === index ? <FiX size={24} className="font-bold" /> : <FiPlus size={24} className="font-bold" />}
                  </span>
                </div>
                
                {/* Dropdown Content - tilted with left side lower */}
                {activeIndex === index && (
                  <div className="relative" style={{ marginTop: '-25px', marginBottom: '70px' }}>
                    <div className="bg-beige p-5 pb-8 rounded-lg border-2 border-black transform rotate-[-2deg] shadow-md z-0 relative w-[95%] mx-auto min-h-[120px]">
                      <div className="pt-10">
                        <p className="text-sm">
                          {faq.answer}
                        </p>
                      </div>
                      {/* Star decoration */}
                      <div className="absolute top-5 right-3 text-2xl text-light-pink">★</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;