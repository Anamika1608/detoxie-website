"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { hilmarLight, playbusBaysGt, poppins } from '@/lib/fonts';

// Features Data
const features = [
  {
    title: "Set Timers &",
    highlightWord: "TODOS",
    description: "Add custom timers, to-do lists and vision photos to stay focused on what matters most.",
    imageSrc: "/detoxie/task.png",
    imageAlt: "Timer and Todos Feature",
  },
  {
    title: "Smart Overlay on",
    highlightWord: "INSTAGRAM",
    description: "Your timers and tasks appear automatically when you open Reels after you have crossed your daily time limit, reminding you of your goals.",
    imageSrc: "/detoxie/overlay.png",
    imageAlt: "Instagram Overlay Feature",
  },
  {
    title: "Take a Break with",
    highlightWord: "VACATION MODE",
    description: "On holiday? Toggle Vacation Mode to pause all overlays until you're ready to refocus.",
    imageSrc: "/detoxie/vacation-mode.jpg",
    imageAlt: "Vacation Mode Feature",
  },
];

// Wrapper component to handle individual feature visibility
const FeatureItemWrapper = ({
  index,
  feature,
  scrollProgress
}: {
  index: number;
  feature: typeof features[0];
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const totalFeatures = features.length;
  const segmentSize = 1 / totalFeatures;
  const start = index * segmentSize;
  const end = (index + 1) * segmentSize;
  const isFirst = index === 0;
  const isLast = index === totalFeatures - 1;

  // First feature: visible from start, fades out at end of its segment
  // Middle features: fade in at start, fade out at end
  // Last feature: fade in at start, stays visible
  const opacity = useTransform(
    scrollProgress,
    isFirst
      ? [0, end - 0.05, end + 0.05]
      : [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    isFirst
      ? [1, 1, 0]
      : isLast
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollProgress,
    isFirst
      ? [0, end - 0.1, end]
      : [start, start + 0.1, end - 0.1, end],
    isFirst
      ? [0, 0, -40]
      : isLast
        ? [40, 0, 0, 0]
        : [40, 0, 0, -40]
  );

  const scale = useTransform(
    scrollProgress,
    isFirst
      ? [0, end - 0.1, end]
      : [start, start + 0.1, end - 0.1, end],
    isFirst
      ? [1, 1, 0.95]
      : isLast
        ? [0.95, 1, 1, 1]
        : [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-14 lg:gap-24 px-8 lg:px-16"
    >
      {/* Image Side */}
      <div className="relative flex-shrink-0 pt-8 md:pt-0">
        <div className="absolute -inset-4 bg-gradient-to-br from-[#f9dace]/40 to-[#dcf1f7]/40 rounded-[2.5rem] blur-2xl"></div>
        <div className="relative w-60 md:w-72 lg:w-80 rounded-3xl shadow-2xl overflow-hidden">
          <img
            src={feature.imageSrc}
            alt={feature.imageAlt}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-1 max-w-xl text-center lg:text-left pt-4 md:pt-0 lg:pl-6">
        <h3 className={`text-2xl md:text-3xl lg:text-5xl text-gray-900 leading-tight ${hilmarLight.className} mb-4`}>
          {feature.title}{" "}
          <span className={`${playbusBaysGt.className} text-[#E46533] inline-block transform -rotate-2`}>
            {feature.highlightWord}
          </span>
        </h3>
        <p className={`${poppins.className} text-gray-700 leading-relaxed text-base lg:text-lg`}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[180vh] md:h-[220vh] lg:h-[250vh] bg-gradient-to-b from-[#e8f6fa] via-[#f0f9fb] to-[#dcf1f7]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center pt-12 lg:pt-10 px-6 pb-4"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl text-gray-900 ${hilmarLight.className} mb-2`}>
            Here's how it{" "}
            <span className={`${playbusBaysGt.className} text-[#E46533] inline-block transform -rotate-2`}>
              WORKS
            </span>
          </h2>
        </motion.div>

        {/* Feature Display Area */}
        <div className="relative flex-1 max-w-6xl mx-auto w-full">
          {features.map((feature, index) => (
            <FeatureItemWrapper
              key={index}
              index={index}
              feature={feature}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
