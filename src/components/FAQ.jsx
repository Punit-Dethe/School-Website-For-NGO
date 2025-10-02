import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What makes Prana Foundation different to other organizations?',
      answer: 'Prana Foundation focuses on sustainable community development through education, combining traditional wisdom with modern approaches to create lasting positive impact.'
    },
    {
      question: 'How much does Prana Foundation charge?',
      answer: 'Our services are provided free of charge to communities in need. We are funded through donations and grants to ensure accessibility for all.'
    },
    {
      question: 'What kind of support do you provide for children?',
      answer: 'We provide education, therapy, skill development, vocational training, and creative workshops like art, music, dance, and storytelling, ensuring all-round development.'
    },
    {
      question: 'How much do the programs cost?',
      answer: 'Many of our workshops are free or low-cost. For specialized programs, we keep fees minimal to ensure accessibility for every family.'
    },
    {
      question: 'Can parents be involved in the programs?',
      answer: 'Yes! We regularly conduct parent-child workshops and family sessions to strengthen bonds and support the child’s learning journey'
    },
    {
      question: 'How can I contribute or volunteer?',
      answer: 'You can support us by donating, sponsoring a child, funding a workshop, or volunteering your time and skills with our children.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#eceae4] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div className="relative">
            {/* FAQ Label */}
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                FAQ
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              What would you like to<br />
              know about Prana<br />
              Foundation?
            </h2>

            {/* Talk to us Button */}
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Talk to us
            </button>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-3xl overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-[#007a68] hover:bg-[#006354] transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="text-white font-medium">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-white transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
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