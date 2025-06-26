import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent',
    content: 'The program has been transformative for my child. The holistic approach to education has helped them develop not just academically but also emotionally and socially.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'Educator',
    content: 'As an educator, I\'ve seen firsthand how this program helps children develop essential life skills. The curriculum is well-structured and engaging.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Community Leader',
    content: 'The impact on our community has been remarkable. Children are more confident, empathetic, and better prepared for life\'s challenges.',
    rating: 5
  }
];

const Testimonial = () => {
  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-yellow-400 text-2xl mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;