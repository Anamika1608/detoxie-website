"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import leftArrow from '../../public/arrow.svg';

const hilmarBold = localFont({ src: '../../public/fonts/Hilmar-Bold.otf' });
const hilmarRegular = localFont({ src: '../../public/fonts/Hilmar-Regular.otf' });
const hilmarMedium = localFont({ src: '../../public/fonts/Hilmar-Medium.otf' });
// thin, light
const hilmarThin = localFont({ src: '../../public/fonts/Hilmar-Thin.otf' });
const hilmarLight = localFont({ src: '../../public/fonts/Hilmar-Light.otf' });

// import udon soup font
const udonSoup = localFont({ src: '../../public/fonts/DK-Udon-Soup.otf' });

const playbusBaysGt = localFont({ src: '../../public/fonts/PlaybusBaysGt.otf' });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // include weights you want
});

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#dcf1f7] via-[#e8f6fa] to-white min-h-screen flex relative overflow-hidden">
    
    {/* Alternative Options - Replace the div above with any of these:
    
    // Option 2: Blue to Light Peach (Complements your orange accent)
    <div className="bg-gradient-to-br from-[#dcf1f7] via-[#e8f6fa] to-[#fef7f0] min-h-screen flex relative overflow-hidden">
    
    // Option 3: Radial gradient from center
    <div className="bg-[radial-gradient(ellipse_at_center,_#dcf1f7_0%,_#f0f9fc_50%,_#ffffff_100%)] min-h-screen flex relative overflow-hidden">
    
    // Option 4: Diagonal soft gradient
    <div className="bg-gradient-to-tr from-[#dcf1f7] to-[#f8fcfd] min-h-screen flex relative overflow-hidden">
    
    // Option 5: Three-color subtle blend
    <div className="bg-gradient-to-br from-[#dcf1f7] via-[#ffffff] to-[#f5f9fb] min-h-screen flex relative overflow-hidden">
    
    // Option 6: Mesh gradient effect (more modern)
    <div className="bg-[conic-gradient(at_top_right,_#dcf1f7_0%,_#ffffff_25%,_#e8f6fa_50%,_#ffffff_75%,_#dcf1f7_100%)] min-h-screen flex relative overflow-hidden">
    
    */}
    
      {/* Main Hero Content */}
      <main className="relative flex flex-col items-center text-center px-4 py-10 max-w-7xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-2 px-4 py-2 text-black font-semibold rounded-xl bg-[#f9dace] transition-colors transform"
        >
          <span>Soon on Play Store</span>
        </motion.div>

        {/* Main Content Container */}
        <div className="relative flex items-center justify-center w-full">

          {/* Left Image - Welcome Screen */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute left-0 md:left-[-100px] lg:left-[-350px] top-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-64 h-auto bg-blue-300 rounded-3xl shadow-xl z-10 mt-10"
          >
            <img src="/detoxie/welcome.jpg" alt="Welcome Screen" className="w-full h-full object-cover rounded-3xl" />
          </motion.div>

          {/* Center Content */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`relative text-4xl md:text-6xl lg:text-7xl text-gray-900 max-w-4xl leading-tight ${hilmarLight.className} mb-6`}
            >
              Stop Mindless Scrolling, <br />
              reclaim your{" "}
              <span
                className={`${playbusBaysGt.className} text-[#E46533] inline-block transform -rotate-3 `}
              >
                FOCUS
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${poppins.className} max-w-xl text-gray-700 leading-relaxed text-center`}
            >
              Combat Instagram Reels addiction with timers, to-do list overlays, and your personal vision photos to motivate you to work instead of scroll.
            </motion.p>

            {/* Center Small Image/Icon Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 mb-8 w-40 md:w-56 lg:w-64 rounded-2xl flex items-center justify-center shadow-xl z-10 transform translate-y-8"
            >
              <img src="/detoxie/permission-edited.jpg" alt="Home Screen" className="w-full h-full object-cover rounded-3xl" />
            </motion.div>
          </div>

          {/* Right Image - Home Screen */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute right-0 md:right-[-100px] lg:right-[-350px] top-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-64 h-auto bg-yellow-300 rounded-3xl shadow-xl z-10 mt-10"
          >
            <img src="/detoxie/home.jpg" alt="Home Screen" className="w-full h-full object-cover rounded-3xl" />
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default HeroSection;