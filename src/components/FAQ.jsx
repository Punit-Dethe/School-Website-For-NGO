import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import faqImage from '../assets/Screenshot 2025-06-26 122635.png';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I have a discount?',
      answer: (
        <>
          This is a <span className="font-bold">non-profit</span> event, and our goal is to make FlowFest as <span className="font-bold">affordable</span> as
          we possibly can whilst delivering a <span className="font-bold">quality</span> day that you'll never forget. Due to
          last year's feedback we are investing more in <span className="font-bold">comfort and quality</span> this year.
          <br /><br />
          To keep ticket prices as <span className="font-bold">low</span> as we can for <span className="font-bold">everyone</span>, we are <span className="font-bold">unable</span> to offer
          discounts and appreciate your <span className="font-bold">support</span> for this community event.
          <br /><br />
          <button className="bg-[#FF6B6B] text-white px-6 py-3 rounded-full font-bold hover:bg-[#FF4F4F] transition-colors duration-300 border-2 border-black">
            Buy Tickets
          </button>
        </>
      ),
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
    <section className="py-16 bg-[#FDF9E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black inline-block">
            Frequently Asked
          </h2>
          <div className="inline-block bg-[#FF7A00] text-white px-6 py-2 rounded-lg mt-2 border-2 border-black shadow-[4px_4px_0px_#000000]">
            <h2 className="text-5xl font-bold">Questions</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <img src={faqImage} alt="FAQ" className="rounded-2xl border-2 border-black" style={{ width: '100%', height: '450px' }} />
          </div>
          <div className="md:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <div className="relative">
                  {/* Shadow */}
                  <div className="bg-white rounded-xl h-full w-full absolute top-1 left-1 border-2 border-black"></div>
                  
                  {/* Main container */}
                  <div className="relative bg-[#f3a20f] rounded-xl border-2 border-black">
                    
                    <button
                      className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-lg font-medium text-black relative z-10">
                        {faq.question}
                      </h3>
                      <span className="ml-4 text-black">
                        {activeIndex === index ? <FiMinus size={28} className="font-bold" /> : <FiPlus size={28} className="font-bold" />}
                      </span>
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index ? 'max-h-screen' : 'max-h-0'
                      }`}
                    >
                      <div className="px-4 pb-4">
                        <div className="p-4 bg-white rounded-lg border-2 border-black">
                          <div className="text-gray-700">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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