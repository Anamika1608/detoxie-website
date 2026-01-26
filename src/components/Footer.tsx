"use client";

import { poppins } from '@/lib/fonts';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-[#e8f6fa]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className={`${poppins.className} text-gray-800 text-sm`}>
          © {currentYear}{" "}
          <a
            href="https://anamikaagg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#E46533] transition-colors"
          >
            Anamika Aggarwal
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
