"use client";

import React from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import leftArrow from '../../public/arrow.svg';
import starIcon from '../../public/star.svg';

const hilmarLight = localFont({ src: '../../public/fonts/Hilmar-Light.otf' });

const playbusBaysGt = localFont({ src: '../../public/fonts/PlaybusBaysGt.otf' });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#dcf1f7] via-[#e8f6fa] to-white min-h-screen flex relative overflow-hidden">
      <a href="mailto:anamikaagg07@gmail.com">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden sm:flex absolute top-10 right-14 z-30 items-center gap-2 px-4 py-2 text-black font-semibold rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:bg-white transition-colors"
        >
          Contact Me
        </motion.button>
      </a>

      <main className="relative flex flex-col items-center text-center px-4 py-10 max-w-7xl mx-auto">

        {/* Badge with Star Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-2 px-4 py-2 text-black font-semibold rounded-xl bg-[#f9dace] transition-colors transform"
        >
          <Image src={starIcon} alt="Star" width={18} height={18} />
          <span>Soon on Play Store</span>
        </motion.div>

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

          {/* Arrow Image between Left and Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute left-[calc(100px)] md:left-[calc(200px)] lg:left-[calc(50px)] bottom-9 -translate-y-1/2 z-20 w-16 h-16 md:w-20 md:h-20"
          >
            <Image
              src={leftArrow}
              alt="Arrow"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          {/* Center Content */}
          <div className="relative z-20 flex flex-col items-center">
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

          {/* Arrow Image between Center and Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="absolute right-[calc(100px)] md:right-[calc(200px)] lg:right-[calc(50px)] bottom-9 -translate-y-1/2 z-20 w-16 h-16 md:w-20 md:h-20 "
          >
            <Image
              src={leftArrow}
              alt="Arrow"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

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