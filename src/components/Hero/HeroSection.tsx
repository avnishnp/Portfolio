"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TypedText = () => {
  const [text, setText] = React.useState('Computer Vision Engineer');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const roles = [
      "Robotics Engineer",
      "Computer Vision Engineer",
      "Machine Learning Engineer",
    ];

    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="flex items-center h-12">
      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 dark:text-blue-400">{text}</span>
      <span className="typing-cursor"></span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-24">
      <div className="container-custom">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I am <span className="text-blue-500 dark:text-blue-400">Avnish Patel</span>
            </h1>
            <div className="flex justify-center md:justify-start">
              <TypedText />
            </div>
            <p className="text-md sm:text-lg md:text-xl mt-4 mb-6 md:mb-8 text-gray-700 dark:text-gray-300">
              Turning Pixels into Perception
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/docs/CV.pdf" target="_blank" className="btn-primary">
                View Resume
              </Link>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl">
              <Image
                src="/docs/profile.jpg"
                alt="Avnish Patel"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
