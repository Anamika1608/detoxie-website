"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

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
    <div className="bg-[#FDFCFB] min-h-screen">
    
      <div className="">
        {/* Header Navigation */}


        {/* Main Hero Content */}
        <main className="relative flex flex-col items-center text-center px-4 pt-16 pb-20 md:pt-8 md:pb-32">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 mb-4 flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 text-black font-semibold rounded-xl bg-[#f5c5b3] transition-colors transform">
            <span>Soon on Play Store</span>
          </div>

        </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative text-5xl md:text-7xl text-gray-900 max-w-4xl leading-tight ${hilmarLight.className}`}
          >
            <span className="absolute top-0 -left-8 md:-left-16 text-3xl font-serif text-gray-400 transform -rotate-12">
              ✨
            </span>
            Stop Mindless Scrolling, <br />
            reclaim your{" "}
            <span
              className={`${playbusBaysGt.className} text-[#E46533] inline-block transform -rotate-3 `}
            >
              FOCUS
            </span>

            <span className="absolute bottom-0 -right-8 md:-right-16 text-3xl font-serif text-gray-400 transform rotate-12">🧘</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${poppins.className} mt-4 mb-10 max-w-xl text-gray-700 leading-relaxed`}
          >
            Combat Instagram Reels addiction with timers, to-do list overlays, and your personal vision photos to motivate you to work instead of scroll.
          </motion.p>


          {/* Action Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors transform hover:-translate-y-0.5">
              <Play size={16} className="fill-white" />
              <span>Join waiting list</span>
            </button>
          </motion.div> */}

        </main>
      </div>

      {/* Bottom Illustration Cards */}
      <div className="relative w-full mt-[-80px] md:mt-[-120px]">
        {/* Left image - behind main */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute left-[10%] md:left-[20%] top-8 w-48 md:w-64 h-auto bg-blue-300 rounded-3xl shadow-xl z-0"
        >
          <img src="/detoxie/permission.jpg" alt="Welcome Screen Illustration" className="w-full h-full object-cover rounded-3xl" />
        </motion.div>
        
        {/* Right image - behind main */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute right-[10%] md:right-[20%] top-8 w-48 md:w-64 h-auto bg-yellow-300 rounded-3xl shadow-xl z-0"
        >
          <img src="/detoxie/home.jpg" alt="Settings Screen Illustration" className="w-full h-full object-cover rounded-3xl" />
        </motion.div>
        
        {/* Main image - centered and in front */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute z-10 left-1/2 -translate-x-1/2 top-0 w-52 md:w-72 h-auto bg-pink-300 rounded-3xl shadow-2xl"
        >
          <img src="/detoxie/welcome.jpg" alt="Home Screen Illustration" className="w-full h-full object-cover rounded-3xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;