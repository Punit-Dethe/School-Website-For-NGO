import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import faqImage from '../assets/Screenshot 2025-06-26 122635.png';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cardColors = ['#A8DDEB', '#8ACCE0', '#6CC4E3', '#4EABC9', '#3D93B0'];

  const faqs = [
    {
      question: 'What are u doing',
      answer: 'Food and beverages will be available for purchase from various vendors at the event. We will have options to cater to different dietary needs.'
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
    <section className="py-16" style={{ backgroundColor: '#F0F9FF' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-5xl font-bold text-black mb-3">
            Frequently Asked
          </h2>
          <div 
            className="bg-[#A8DDEB] text-black px-6 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_#000000]"
            style={{ transform: 'rotate(2deg)' }}
          >
            <h2 className="text-5xl font-bold">Questions</h2>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side with just the image */}
          <div className="md:w-1/2">
            <img src={faqImage} alt="FAQ" className="rounded-2xl border-2 border-black" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>
          
          {/* Right side with interactive FAQ */}
          <div className="md:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 relative">
                {/* FAQ Question Button */}
                <div 
                  className="rounded-xl border-2 border-black p-6 flex justify-between items-center cursor-pointer z-20 relative"
                  style={{ backgroundColor: cardColors[index % cardColors.length] }}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-black">
                    {faq.question}
                  </h3>
                  <span>
                    {activeIndex === index ? <FiX size={24} className="font-bold" /> : <FiPlus size={24} className="font-bold" />}
                  </span>
                </div>
                
                {/* Dropdown Content - tilted with left side lower */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0, marginTop: '-35px', marginBottom: '70px' }}
                      exit={{ opacity: 0, height: 0, y: -20, marginTop: '0px', marginBottom: '0px' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="relative overflow-hidden"
                    >
                      <div className="rounded-lg border-2 border-black transform rotate-[-2deg] shadow-md z-0 relative w-[95%] mx-auto min-h-[120px] p-5 pb-8" style={{ backgroundColor: '#E0F7FF' }}>
                        <div className="pt-8 pb-6">
                          <p className="text-lg">
                            {faq.answer}
                          </p>
                        </div>
                        {/* Star decoration - bottom right */}
                        <div className="absolute bottom-3 right-3 text-4xl transform -rotate-12" style={{ color: '#A8DDEB' }}>★</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;