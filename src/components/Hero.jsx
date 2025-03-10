import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = ({ triggerConfetti }) => {
  const [showCake, setShowCake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCake(true);
      triggerConfetti();
    }, 1000);

    return () => clearTimeout(timer);
  }, [triggerConfetti]);

  return (
    <div className='h-screen flex flex-col items-center justify-between py-8 px-4 overflow-hidden'>
      <div className='flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl'>
        {/* Header Section */}
        <div className='mb-6'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg animate-bounce'>
            Happy Birthday 🎉!
          </h1>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-white drop-shadow-lg animate-pulse'>
           Big SIs 💖
          </h2>
        </div>

        {/* Cake Section */}
        {showCake && (
          <div className='my-4 animate-fadeIn'>
            <div className='text-[60px] sm:text-[80px] md:text-[100px] animate-bounce-cake'>
              🎂
            </div>
          </div>
        )}

        {/* Message Section */}
        <p className='text-base sm:text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto'>
          On this blesssed day, we celebrate the amazing person you are. May
          your day be filled with joy, laughter, and unforgettable moments!
        </p>

        {/* Navigation Buttons */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl'>
          <Link
            to='/gallery'
            className='bg-red bg-opacity-20 backdrop-blur-lg rounded-xl p-4 text-white hover:bg-opacity-30 transition-all transform hover:-translate-y-1 shadow-lg flex flex-col items-center border border-2 border-black-500 border-solid'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 sm:h-8 sm:w-8 mb-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <span className='text-sm sm:text-base md:text-lg font-medium'>
              Gallery
            </span>
          </Link>

          <Link
            to='/wishes'
            className='bg-red bg-opacity-20 backdrop-blur-lg rounded-xl p-4 text-white hover:bg-opacity-30 transition-all transform hover:-translate-y-1 shadow-lg flex flex-col items-center border border-2 border-black-500 border-solid'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 sm:h-8 sm:w-8 mb-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
              />
            </svg>
            <span className='text-sm sm:text-base md:text-lg font-medium'>
              Wishes
            </span>
          </Link>

          <Link
            to='/countdown'
            className='bg-red bg-opacity-20 backdrop-blur-lg rounded-xl p-4 text-white hover:bg-opacity-30 transition-all transform hover:-translate-y-1 shadow-lg flex flex-col items-center  border border-2 border-black-500 border-solid'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 sm:h-8 sm:w-8 mb-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 10h8M8 14h6M21 12c0 4.418-4.03 8-9 8-1.47 0-2.87-.324-4.09-.903L3 21l1.31-4.09C3.477 15.285 3 13.71 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
              />
            </svg>

            <span className='text-sm sm:text-base md:text-lg font-medium'>
              Message
            </span>
          </Link>

          <Link
            to='/surprise'
            className='bg-red bg-opacity-20 backdrop-blur-lg rounded-xl p-4 text-white hover:bg-opacity-30 transition-all transform hover:-translate-y-1 shadow-lg flex flex-col items-center  border border-2 border-black-500 border-solid'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 sm:h-8 sm:w-8 mb-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
              />
            </svg>
            <span className='text-sm sm:text-base md:text-lg font-medium'>
              Surprise
            </span>
          </Link>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .animate-bounce-cake {
          animation: bounceCake 2s infinite;
        }
        @keyframes bounceCake {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
