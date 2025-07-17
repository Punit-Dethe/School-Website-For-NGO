import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
// Import the logo from assets
import logo from '../assets/LOGO/Logo.png';

// Utility function for class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({ className = '' }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const menuRef = useRef(null);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setWindowHeight(window.innerHeight);
      setIsMobileMenuOpen(true);
      setTimeout(() => setMenuItemsVisible(true), 50);
    } else {
      setMenuItemsVisible(false);
      setIsMobileMenuOpen(false);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // Control shrink/blur effect
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    // Control hide/show on scroll
    if (latest > previous && latest > window.innerHeight && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const downloadAnimationVariants = {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -15, opacity: 0 },
  };

  const navItems = [
    { name: 'Home', hoverName: 'Start', link: '/' },
    { name: 'Curriculum', hoverName: 'Learn', link: '#curriculum' },
    { name: 'About Us', hoverName: 'Story', link: '#about-us' },
    { name: 'Activities', hoverName: 'Play', link: '#activities' },
  ];

  return (
    <>
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-40 w-full", className)}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-135%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {/* Desktop Navbar */}
      <motion.div
        animate={{
          width: visible ? "40%" : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{
          minWidth: "800px",
          willChange: "transform, width",
        }}
        className={cn(
          "relative z-[60] mx-auto hidden max-w-7xl self-start rounded-full lg:flex"
        )}
      >
        {/* Background effects layer */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: visible ? "rgba(230, 240, 255, 0.8)" : "transparent",
            backdropFilter: visible ? "blur(10px)" : "none",
            boxShadow: visible ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset" : "none",
            willChange: "background-color, backdrop-filter, box-shadow",
          }}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            type: "tween",
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
        
        {/* Content layer */}
        <div className="relative z-10 flex w-full flex-row items-center justify-between px-2 py-2">
          <Link to="/" className="relative z-20 mr-2 flex items-center px-1 py-1 text-sm font-normal">
            <img src={logo} alt="Prana Logo" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-medium text-black ml-2">Prana</span>
          </Link>

          <NavItems items={navItems} visible={visible} isHomePage={isHomePage} />

          <div className="flex items-center space-x-2 ml-2">
            <a
              href="#donate"
              onMouseEnter={() => setIsDownloadHovered(true)}
              onMouseLeave={() => setIsDownloadHovered(false)}
              className={cn(
                "relative inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 gap-1 shadow-md hover:shadow-lg transition-colors duration-200",
                visible
                  ? "bg-black hover:bg-gray-800 focus:ring-black"
                  : "bg-[#4f36b6] hover:bg-[#3b2a89] focus:ring-[#4f36b6]"
              )}
            >

              <div className="relative h-5">
                <span className="font-medium opacity-0">Donate</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isDownloadHovered ? "Support" : "Donate"}
                      variants={downloadAnimationVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      {isDownloadHovered ? "Support" : "Donate"}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navbar - Optimized */}
      <motion.div
        className={cn(
          "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent lg:hidden"
        )}
        initial={false}
        animate={{
          scale: visible ? 0.95 : 1,
          y: visible ? 20 : 0,
          borderRadius: "23px",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
          mass: 0.5,
          restDelta: 0.001
        }}
        style={{
          width: '100%',
          willChange: 'transform, border-radius',
          WebkitTransform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'subpixel-antialiased',
        }}
      >
        {/* Background effects layer */}
        <motion.div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            backgroundColor: visible ? "rgba(230, 240, 255, 0.8)" : "transparent",
            backdropFilter: visible ? "blur(10px)" : "none",
            boxShadow: visible ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset" : "none",
            willChange: "background-color, backdrop-filter, box-shadow",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "easeInOut",
          }}
        />
        
        {/* Content layer */}
        <div className={cn(
          "relative z-10 flex w-full items-center justify-between px-4 transition-all duration-300 ease-in-out",
          visible ? 'py-3' : 'py-4'
        )} style={{ minHeight: '64px' }}>
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Prana Logo" 
              className={cn(
                "rounded-full object-cover transition-all duration-300 ease-in-out",
                visible ? "h-7 w-7" : "h-8 w-8"
              )}
            />
            <span className="text-lg font-medium text-black ml-2">Prana</span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className={cn(
              "p-2 dark:text-gray-300 dark:hover:text-white",
              isHomePage && !visible
                ? 'text-white hover:text-purple-200'
                : 'text-gray-700 hover:text-gray-900'
            )}
          >
            {isMobileMenuOpen ? (
              <IconX className="h-6 w-6" />
            ) : (
              <IconMenu2 className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.div>
      </motion.div>

        {/* Mobile Menu (Full Screen Overlay) */}
        <div 
          ref={menuRef}
          className={`fixed top-0 left-0 w-screen z-[9999] lg:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundColor: '#FFF7ED',
            background: `linear-gradient(to left, rgba(108, 43, 199, 0.2), #FFF7ED 70%), #FFF7ED`,
            height: `${windowHeight}px`,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            willChange: 'transform',
            opacity: 1,
          }}
        >
          {/* Close Button (Mobile Menu) */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 p-2 focus:outline-none z-10"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Menu Content */}
          <div 
            className="flex-1 flex flex-col pl-6 pr-6 pt-40 pb-6 overflow-y-auto"
            style={{
              WebkitOverflowScrolling: 'touch',
              paddingBottom: 'calc(env(safe-area-inset-bottom) + 1.5rem)'
            }}
          >
            {/* Navigation Links (Mobile Menu) */}
            <div className="space-y-8 flex-1">
              {navItems.map((item, index) => {
                const isAnchorLink = item.link.startsWith('#');
                const handleClick = (e) => {
                  toggleMobileMenu();
                  if (isAnchorLink) {
                    e.preventDefault();
                    const element = document.getElementById(item.link.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                };

                return isAnchorLink ? (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={handleClick}
                    className={`block text-5xl font-normal text-gray-800 hover:text-[#6c2bc7] transition-all duration-250 ${
                      menuItemsVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{
                      transitionDelay: menuItemsVisible ? `${index * 75}ms` : '0ms',
                      fontFamily: "'Work Sans', sans-serif"
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.link}
                    className={`block text-5xl font-normal text-gray-800 hover:text-[#6c2bc7] transition-all duration-250 ${
                      menuItemsVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{
                      transitionDelay: menuItemsVisible ? `${index * 75}ms` : '0ms',
                      fontFamily: "'Work Sans', sans-serif"
                    }}
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Download Button (Mobile Menu) */}
            <div className="mt-auto mb-8">
              <a
                href="#donate"
              className={`w-full text-center bg-black text-white hover:bg-gray-900 hover:text-white py-4 rounded-full text-xl font-medium transition-colors duration-200 ${
                  menuItemsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: menuItemsVisible ? `${navItems.length * 75}ms` : '0ms',
                  fontFamily: "'Work Sans', sans-serif",
                  display: 'block',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  marginBottom: 'env(safe-area-inset-bottom, 20px)'
                }}
              >
                Donate
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

const NavItems = ({ items, visible, isHomePage }) => {
  const [hovered, setHovered] = useState(null);

  const animationVariants = {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -15, opacity: 0 },
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className="hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium transition duration-200 lg:flex"
    >
      {items.map((item, idx) => {
        const isAnchorLink = item.link.startsWith('#');
        
        const linkContent = (
          <>
            {/* longest of the two words */}
            <span className="font-medium opacity-0">
              {item.hoverName.length > item.name.length ? item.hoverName : item.name}
            </span>

            {/* Animated text position */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={hovered === idx ? item.hoverName : item.name}
                  variants={animationVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  {hovered === idx ? item.hoverName : item.name}
                </motion.span>
              </AnimatePresence>
            </div>
          </>
        );

        const linkClassName = `relative inline-flex justify-center px-3 py-2 transition-colors duration-200 cursor-pointer text-black ${isHomePage && !visible ? 'hover:text-purple-200' : 'hover:text-purple-800'}`;

        return isAnchorLink ? (
          <a
            key={idx}
            href={item.link}
            onClick={(e) => scrollToSection(e, item.link.substring(1))}
            onMouseEnter={() => setHovered(idx)}
            className={linkClassName}
          >
            {linkContent}
          </a>
        ) : (
          <Link
            key={idx}
            to={item.link}
            onMouseEnter={() => setHovered(idx)}
            className={linkClassName}
          >
            {linkContent}
          </Link>
        );
      })}
    </motion.div>
  );
};
export default Navbar;
