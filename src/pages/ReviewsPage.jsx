import React from 'react';

const reviews = [
  {
    name: 'William Smith',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Teachers here genuinely care. My son grew in confidence and academics. The small class sizes made all the difference.',
  },
  {
    name: 'Dustin Davis',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    text: 'I learned discipline, empathy and curiosity. The foundation set me up for collage and life.',
  },
  {
    name: 'Leon Taylor',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: 'A warm, inclusive school. The after-school music club is our child’s favorite part of the week.',
  },
  {
    name: 'Garfield Cohen',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    text: 'Mentorship from teachers extended beyond classrooms. I still come back to volunteer.',
  },
  {
    name: 'Alexia Howard',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    text: 'The curriculum is hands-on and values-based. My daughter is excited to go to school every day.',
  },
  {
    name: 'Halle Nadi',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    text: 'Art, sports, service—there’s space for every child to shine here.',
  },
  {
    name: 'Kristina Jenkins',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    text: 'Communication with teachers is excellent. We always feel included and informed.',
  },
  {
    name: 'Lenny Delgado',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    text: 'The values I picked up here continue to guide my choices in college.',
  },
  {
    name: 'Kelvin Minir',
    role: 'Parent',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    text: 'Safe campus, great staff, and a strong sense of community.',
  },
];

const Card = ({ item }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
    <div className="flex items-center gap-4 mb-4">
      <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="text-gray-900 font-semibold">{item.name}</p>
        <p className="text-gray-500 text-sm">{item.role}</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.text}</p>
    <div className="mt-4 flex justify-center">
      <svg className="text-gray-300" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M7.17 6C5.42 6 4 7.42 4 9.17v5.66C4 16.58 5.42 18 7.17 18h.66A2.17 2.17 0 0010 15.83V9.17C10 7.42 8.58 6 6.83 6h.34zM16.17 6C14.42 6 13 7.42 13 9.17v5.66C13 16.58 14.42 18 16.17 18h.66A2.17 2.17 0 0019 15.83V9.17C19 7.42 17.58 6 15.83 6h.34z" />
      </svg>
    </div>
  </div>
); 
const ReviewsPage = () => {
  return (
    <div className="bg-[#F5F3ED] font-sans">
      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-[#059669] text-white p-4 rounded-full shadow-lg z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Hero section */}
      <section className="relative bg-gradient-to-b from-[#065f46] to-[#047857] text-white overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 text-[#F5F3ED]">
          <svg viewBox="0 0 1440 150" fill="currentColor" preserveAspectRatio="none" className="w-full -mb-1">
            <path d="M0,50 C240,130,480,150,720,100 C960,50,1200,70,1440,150 L1440,151 L0,151 Z" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 text-center">
          <p className="uppercase tracking-[0.3em] text-sm font-medium opacity-80">TESTIMONIALS</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-serif font-medium tracking-tight">
            What parents and alumni
          </h1>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="-mt-16 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlight band */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#1f2937] text-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1600&auto=format&fit=crop"
              alt="Student coding"
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 md:opacity-100"
            />
            <div className="absolute inset-y-0 right-1/2 w-1/2 bg-gradient-to-r from-[#1f2937] to-transparent" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-10">
              <div className="pr-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&auto=format&fit=crop"
                    alt="Aaron Sandoval"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Aaron Sandoval</p>
                    <p className="text-white/70 text-sm">Alumni</p>
                  </div>
                </div>
                <p className="text-white/90 text-base leading-relaxed relative pl-8">
                  <span className="absolute left-0 top-1 text-3xl font-serif text-[#D8C9A3] opacity-50">“</span>
                  Teachers encouraged me to explore music and science with equal passion. That balance helped me discover who I am.
                </p>
              </div>
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(3, 6).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Student with guitar label */}
      <div className="text-center py-4">
        <p className="text-sm text-gray-500">Student with guitar</p>
      </div>

      {/* Highlight band 2 */}
      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#1f2937] text-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1542028682-f4f66b5a365a?q=80&w=1600&auto=format&fit=crop"
              alt="Student with guitar"
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 md:opacity-100"
            />
            <div className="absolute inset-y-0 right-1/2 w-1/2 bg-gradient-to-r from-[#1f2937] to-transparent" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-10">
              <div className="pr-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    alt="Duncan Craig"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Duncan Craig</p>
                    <p className="text-white/70 text-sm">Alumni</p>
                  </div>
                </div>
                <p className="text-white/90 text-base leading-relaxed relative pl-8">
                  <span className="absolute left-0 top-1 text-3xl font-serif text-[#D8C9A3] opacity-50">“</span>
                  The music program gave me the confidence to perform and collaborate with others, skills I use every day.
                </p>
              </div>
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(6, 9).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative bg-[#047857] text-white">
        <div className="absolute inset-x-0 top-0 text-[#F5F3ED]">
          <svg viewBox="0 0 1440 120" fill="currentColor" className="w-full -mt-1" preserveAspectRatio="none">
            <path d="M0,120 C240,80,480,60,720,60 C960,60,1200,80,1440,120 L1440,0 L0,0 Z" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h3 className="text-3xl font-bold font-serif">Subscribe to our newsletter to receive updates</h3>
          <form
            className="mt-6 flex gap-2 bg-white/10 p-2 rounded-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-transparent rounded-full px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="px-5 py-2 rounded-full bg-white text-emerald-800 font-semibold hover:bg-emerald-50 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg font-serif">Eurydice</h4>
              <p className="text-sm text-white/70">School of Music</p>
            </div>
            <div>
              <h5 className="font-semibold text-white/90">Address</h5>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>456 Music Ave</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white/90">Links</h5>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white/90">Social</h5>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>&copy; 2024 Eurydice School of Music. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Second Footer */}
      <footer className="bg-[#000] text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-xl font-bold font-serif mb-4">Contact Us</h4>
          <p className="text-white/70">123 Learning Lane, Education City, 12345</p>
          <p className="text-white/70">Email: info@pranaschool.com</p>
          <p className="text-white/70">Phone: (123) 456-7890</p>
          <div className="flex justify-center gap-4 mt-4 text-white/70">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
          <p className="mt-8 text-sm text-white/50">&copy; 2025 Prana School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ReviewsPage;
