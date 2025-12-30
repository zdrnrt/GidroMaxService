import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} relative`}>
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="url(#paint0_linear_6371_1093)"/>
        <circle cx="100" cy="100" r="90" fill="url(#paint1_linear_6371_1093)"/>
        <path d="M99.667 58C99.667 58 74.667 83 74.667 108C74.667 121.75 85.917 133 99.667 133C113.417 133 124.667 121.75 124.667 108C124.667 83 99.667 58 99.667 58Z" fill="url(#paint2_linear_6371_1093)"/>
        <path opacity="0.4" d="M91.3333 112.166C95.9357 112.166 99.6667 106.57 99.6667 99.666C99.6667 92.7625 95.9357 87.166 91.3333 87.166C86.731 87.166 83 92.7625 83 99.666C83 106.57 86.731 112.166 91.3333 112.166Z" fill="white"/>
        <defs>
          <linearGradient id="paint0_linear_6371_1093" x1="10" y1="10" x2="18010" y2="18010" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6"/>
            <stop offset="0.5" stopColor="#1D4ED8"/>
            <stop offset="1" stopColor="#1E40AF"/>
          </linearGradient>
          <linearGradient id="paint1_linear_6371_1093" x1="10" y1="10" x2="18010" y2="18010" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.3"/>
            <stop offset="1" stopColor="white" stopOpacity="0.1"/>
          </linearGradient>
          <linearGradient id="paint2_linear_6371_1093" x1="74.667" y1="58" x2="6997.74" y2="4673.38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4"/>
            <stop offset="0.5" stopColor="#0891B2"/>
            <stop offset="1" stopColor="#0E7490"/>
          </linearGradient>
        </defs>
      </svg>

      {/*
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {// Gradient Definitions }
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#0891B2" />
            <stop offset="100%" stopColor="#0E7490" />
          </linearGradient>
          <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
          </filter>
        </defs>

        {// Shield Background }
        <path
          d="M24 4L8 10V22C8 32 16 40 24 44C32 40 40 32 40 22V10L24 4Z"
          fill="url(#shieldGradient)"
          filter="url(#shadow)"
        />

        {// Shield Highlight }
        <path
          d="M24 4L8 10V22C8 32 16 40 24 44C32 40 40 32 40 22V10L24 4Z"
          fill="url(#highlightGradient)"
        />

        {// Water Drop }
        <path
          d="M24 12C24 12 18 18 18 24C18 27.3 20.7 30 24 30C27.3 30 30 27.3 30 24C30 18 24 12 24 12Z"
          fill="url(#dropGradient)"
        />

        {// Water Drop Highlight }
        <ellipse
          cx="22"
          cy="22"
          rx="2"
          ry="3"
          fill="#FFFFFF"
          opacity="0.4"
        />

        {// Protection Lines }
        <path
          d="M14 16L20 22M28 22L34 16M14 32L20 26M28 26L34 32"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
      */}
    </div>
  );
};

export default Logo;