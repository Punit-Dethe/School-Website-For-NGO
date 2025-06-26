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
          {/* Left side with image and title */}
          <div className="md:w-1/2 relative border-2 border-black rounded-2xl bg-[#f3ecd2] p-6">
            {/* Small title inside the left panel */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black inline-block">
                Frequently Asked
              </h3>
              <div className="inline-block bg-primary-orange text-white px-4 py-1 rounded-md border-2 border-black mt-1">
                <h3 className="text-2xl font-bold">Questions</h3>
              </div>
            </div>
            
            <img src={faqImage} alt="FAQ" className="rounded-2xl border-2 border-black mb-4" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            
            {/* Example FAQ item that's open */}
            <div className="relative mb-3">
              <div className="bg-secondary-orange rounded-xl border-2 border-black p-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-black">Can I have a discount?</h3>
                <FiX size={24} className="font-bold" />
              </div>
              
              {/* Note-like dropdown */}
              <div className="mt-2 relative">
                <div className="bg-[#FDF9E6] p-4 rounded-lg border-2 border-black transform rotate-1 shadow-md">
                  <p className="text-sm">
                    This is a <span className="font-bold">non-profit</span> event, and our goal is to make FlowFest as <span className="font-bold">affordable</span> as
                    we possibly can whilst delivering a <span className="font-bold">quality</span> day that you'll never forget. Due to
                    last year's feedback we are investing more in <span className="font-bold">comfort and quality</span> this year.
                    <br /><br />
                    To keep ticket prices as <span className="font-bold">low</span> as we can for <span className="font-bold">everyone</span>, we are <span className="font-bold">unable</span> to offer
                    discounts and appreciate your <span className="font-bold">support</span> for this community event.
                  </p>
                  <button className="bg-[#FF6B6B] text-white px-4 py-2 rounded-full font-bold hover:bg-[#FF4F4F] transition-colors duration-300 border-2 border-black mt-3">
                    Buy Tickets
                  </button>
                </div>
                {/* Star decoration */}
                <div className="absolute top-3 right-3 text-2xl">★</div>
              </div>
            </div>
            
            {/* Other FAQ items */}
            <div className="relative mb-3">
              <div className="bg-secondary-orange rounded-xl border-2 border-black p-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-black">How do I get there?</h3>
                <FiPlus size={24} className="font-bold" />
              </div>
            </div>
            
            <div className="relative mb-3">
              <div className="bg-secondary-orange rounded-xl border-2 border-black p-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-black">Is there food included?</h3>
                <FiPlus size={24} className="font-bold" />
              </div>
            </div>
          </div>
          
          {/* Right side with interactive FAQ */}
          <div className="md:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <div className="relative">
                  <div className="bg-secondary-orange rounded-xl border-2 border-black p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                    <h3 className="text-lg font-medium text-black">
                      {faq.question}
                    </h3>
                    <span>
                      {activeIndex === index ? <FiX size={24} className="font-bold" /> : <FiPlus size={24} className="font-bold" />}
                    </span>
                  </div>
                  
                  {activeIndex === index && (
                    <div className="mt-2 relative">
                      <div className="bg-[#FDF9E6] p-4 rounded-lg border-2 border-black transform rotate-1 shadow-md">
                        <p className="text-sm">
                          {faq.answer}
                        </p>
                        {/* Star decoration */}
                        <div className="absolute top-3 right-3 text-2xl text-[#f489a3]">★</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;