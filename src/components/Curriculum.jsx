import React from 'react';

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Curriculum</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Elementary School (Grades 1-5)</h3>
            <p className="text-gray-600">Our elementary curriculum focuses on building a strong foundation in core subjects like math, science, and language arts, while also encouraging creativity and curiosity.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Middle School (Grades 6-8)</h3>
            <p className="text-gray-600">In middle school, students delve deeper into complex subjects and develop critical thinking and problem-solving skills through a project-based learning approach.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">High School (Grades 9-12)</h3>
            <p className="text-gray-600">Our high school program prepares students for college and beyond, with a focus on advanced placement courses, leadership development, and real-world learning experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
