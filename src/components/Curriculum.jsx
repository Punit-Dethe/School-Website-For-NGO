import React from 'react';

// --- SVG Icon Components (with thinner stroke) ---
// The stroke width has been reduced for a finer, more delicate appearance.

const StringsIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.8 3.8c.2-.3.3-.6.3-.9 0-.8-.7-1.5-1.5-1.5-.3 0-.6.1-.9.3L3.8 16.8c-.2.3-.3.6-.3.9 0 .8.7 1.5 1.5 1.5.3 0 .6-.1.9-.3L16.8 3.8z" />
    <path d="M7.5 12.5 3.7 16.3" />
    <path d="m12.5 7.5 3.8-3.8" />
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <path d="M12 12c-2 0-3.5-2-3.5-5C8.5 4 12 2 12 2s3.5 2 3.5 5c0 3-1.5 5-3.5 5Z" />
  </svg>
);

const KeyboardIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8.5v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    <path d="M4 12.5h14" />
    <path d="M4 16.5h14" />
    <path d="M10 20.5v-8" />
    <path d="M6 12.5v-8" />
    <path d="M14 12.5v-8" />
    <path d="M18 12.5v-8" />
  </svg>
);

const GuitarIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c-3.33 0-5-1.67-5-5 0-3.33 1.67-5 5-5s5 1.67 5 5c0 3.33-1.67 5-5 5Z" />
    <path d="M12 12v9" />
    <path d="M16 21h-8" />
    <path d="M12 12a4.2 4.2 0 0 0-4 4c0 2.2 1.8 4 4 4s4-1.8 4-4a4.2 4.2 0 0 0-4-4Z" />
    <path d="m14.5 6.5-5-5" />
  </svg>
);

const VoiceIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);

const PercussionIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.38 2.62a1 1 0 0 0-1.13.38l-3.63 6a1 1 0 0 0 .38 1.12l.25.13c.38.2.87.05 1.12-.38l6-3.63a1 1 0 0 0-.38-1.12l-.13-.25a1 1 0 0 0-1.12-.38z" />
    <path d="m12.5 11.5-3 3" />
    <path d="M4.62 21.38a1 1 0 0 0 1.13-.38l3.63-6a1 1 0 0 0-.38-1.12l-.25-.13a1 1 0 0 0-1.12.38l-6 3.63a1 1 0 0 0 .38 1.12l.13.25c.2.38.69.53 1.12.38z" />
    <path d="M12 22a7 7 0 0 0 7-7" />
    <path d="M2 12a7 7 0 0 0 7 7" />
  </svg>
);

const WoodwindsIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.28 12.36a1 1 0 0 0-1.03-1.03l-2.62.4-2.2-3.48a1 1 0 0 0-1.3-.38l-2.23 1.11a1 1 0 0 1-1.25-.26L8.8 6.55a1 1 0 0 0-1.32-.23l-2.05 1.37a1 1 0 0 0-.32 1.34l3.36 5.2a1 1 0 0 0 1.35.33l2.05-1.37a1 1 0 0 1 1.32.23l1.8 2.25a1 1 0 0 0 1.25.26l2.23-1.11a1 1 0 0 0 .38-1.3z" />
    <path d="M5.5 16.5c-1.5 1.5-4 1.5-4 0" />
    <path d="m12.5 10.5 8-8" />
  </svg>
);

const BrassIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.5 8C14 8 16 9 16 11H8c0-2 2-3 3.5-3S12.5 8 12.5 8z" />
    <path d="M8 11v5" />
    <path d="M16 11v5" />
    <path d="M18 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2" />
    <path d="M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <path d="M6 11V9a2 2 0 0 1 2-2h.5" />
    <path d="M18 9a2 2 0 0 0-2-2h-.5" />
    <path d="m10 8-1.8-3.2c-.4-.8.2-1.8 1.1-1.8h1.4c.9 0 1.5.9 1.1 1.8L14 8" />
  </svg>
);

const ElectronicIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 8h10" />
    <path d="M10 12h4" />
    <path d="M8 16h8" />
    <path d="M12 3v18" />
  </svg>
);

const WorldIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
    <path d="M12 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    <path d="M16.5 10.5 12 15" />
    <path d="m9.5 15.5-5 5" />
    <path d="m14.5 4.5-5 5" />
  </svg>
);

// --- Data for the instrument cards ---
const curriculumData = [
  { icon: StringsIcon, title: 'Strings', description: 'Violin, Fiddle, Viola, Cello, Bass, Harp' },
  { icon: KeyboardIcon, title: 'Keyboard', description: 'Pianos, Harpsichords, Electronic Keyboards' },
  { icon: GuitarIcon, title: 'Guitar', description: 'Acoustic Guitar, Electric Guitar, Ukulele, Bass' },
  { icon: VoiceIcon, title: 'Voice', description: 'Classical, Broadway, Jazz, Pop, Rock, Folk' },
  { icon: PercussionIcon, title: 'Percussion', description: 'Drums, Hand Percussion, Symphonic, Mallet' },
  { icon: WoodwindsIcon, title: 'Woodwinds', description: 'Flute, Recorder, Piccolo, Clarinet, Saxophone' },
  { icon: BrassIcon, title: 'Brass', description: 'Trombone, French Horn, Tuba, Euphonium' },
  { icon: ElectronicIcon, title: 'Electronic', description: 'Synthesizers, Drum Machines, Digital Pianos' },
  { icon: WorldIcon, title: 'World', description: 'Various cultural and ethnic traditions' },
];

// --- Reusable Card Component ---
const InstrumentCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/80 border border-gray-200/90 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-gray-300/90 hover:-translate-y-1 shadow-sm">
    <Icon className="w-10 h-10 mb-5 text-sky-500" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

// --- Main Curriculum Component ---
const Curriculum = () => {
  return (
    <div className="bg-slate-50 font-sans w-full py-20 px-4 sm:px-6 lg:py-28 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-16 items-center">
        
        {/* Left Text Section (Spanning 2 of 5 columns) */}
        <div className="lg:col-span-2 lg:pr-8">
          <p className="text-sm font-bold text-sky-600 uppercase tracking-widest">
            MUSIC LESSONS WE TEACH
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-gray-900 tracking-tight leading-tight">
            Find out which instrument you or{' '}
            <span className="relative inline-block">
                your child can
                <svg className="absolute -bottom-2 left-0 w-full h-auto" viewBox="0 0 254 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12.0002C32.3333 4.83357 114.5 -5.49982 251 9.00018" stroke="#FBBF24" strokeWidth="10" strokeLinecap="round"/>
                </svg>
            </span>
            {' '}
            <span className="relative inline-block">
              start learning!
              <svg className="absolute -bottom-2.5 left-0 w-full h-auto" viewBox="0 0 310 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12.0002C35.6667 4.83357 142 -5.49982 307 9.00018" stroke="#FBBF24" strokeWidth="10" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="mt-10 text-lg text-gray-600 leading-relaxed">
            Quis accumsan mi tellus sagittis ultrices. Imperdiet nunc ut tempor lacus nulla eget varius diam ut. Sem id quam.
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="inline-block bg-sky-500 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Try a Free Class
            </a>
          </div>
        </div>

        {/* Right Grid Section (Spanning 3 of 5 columns) */}
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-6">
          {curriculumData.map((item, index) => (
            <InstrumentCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


// --- App Component ---
// This is the main component that renders our Curriculum component.
export default function App() {
  return (
    // Added link to Inter font for better visual matching
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
          <Curriculum />
      </div>
    </>
  );
}
