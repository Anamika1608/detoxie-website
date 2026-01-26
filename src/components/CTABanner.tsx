"use client";

import { motion } from 'framer-motion';
import { hilmarLight, playbusBaysGt, poppins } from '@/lib/fonts';

const CTABanner = () => {
  return (
    <section className="pt-8 pb-12 md:pt-6 lg:pt-6 lg:pb-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#dcf1f8] to-[#e8f6fa]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative max-w-6xl mx-auto bg-gradient-to-br from-[#f4906e] to-[#ed7f5c] rounded-3xl overflow-hidden"
      >
        {/* Geometric Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 right-20 w-40 h-40 bg-white/10 rounded-full translate-y-1/2"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-white/10 rounded-lg rotate-45 -translate-y-1/2"></div>
        <div className="absolute bottom-10 right-48 w-16 h-16 bg-white/10 rounded-full"></div>

        <div className="relative px-8 py-12 lg:px-16 lg:py-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <img
                src="/illustrations/download-cta.png"
                alt="Download Detoxie"
                className="w-48 md:w-56 lg:w-64 drop-shadow-2xl"
              />
            </motion.div>

            {/* Content – text + button */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className={`text-2xl md:text-3xl lg:text-4xl text-white leading-tight ${hilmarLight.className} mb-3`}>
                Every scroll is time you{" "}
                <span className={`${playbusBaysGt.className} text-white/90 inline-block transform -rotate-2`}>
                  WON'T GET BACK
                </span>
              </h2>

              <p className={`${poppins.className} text-white/80 text-sm lg:text-base mb-6 max-w-md mx-auto lg:mx-0`}>
                Your goals aren't waiting. <br /> Take control of your screen time today.
              </p>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.detoxie"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-14 md:h-16"
                />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
