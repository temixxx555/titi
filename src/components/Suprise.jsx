import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Surprise = () => {
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const surpriseMessages = [
    "You are amazing, Mummy Jay!",
    "Wishing you a year full of blessings!",
    "May all your dreams come true!",
    "You deserve all the happiness!",
    "Happy birthday to the best sister ever!",
    "You light up everyone's lives!",
    "Keep shining bright like a diamond!",
    "You're the greatest gift to our family!",
  ];

  useEffect(() => {
    if (opened) {
      setShowConfetti(true);
      const randomMessage = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
      setMessage(randomMessage);

      const confettiTimer = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(confettiTimer);
    }
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleReset = () => {
    setOpened(false);
    setMessage('');
    setShowConfetti(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-between py-8 px-4 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 overflow-hidden">
      <div className="max-w-4xl w-full text-center">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-white mb-6 hover:text-pink-200 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-fadeIn">
            A Special Surprise
          </h1>
          <p className="text-base sm:text-lg text-white mt-2 animate-fadeIn delay-200">
            For Mummy Jay’s Birthday Celebration
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          {!opened ? (
            <div className="relative animate-bounce-slow">
              <div
                className="gift-box cursor-pointer group relative w-48 h-48 md:w-64 md:h-64"
                onClick={handleOpen}
              >
                <div className="gift-box-top bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg w-full h-full shadow-lg transform transition-all duration-300 group-hover:scale-105">
                  <div className="absolute top-0 left-1/2 w-10 h-full bg-pink-700 transform -translate-x-1/2 opacity-80"></div>
                  <div className="absolute top-1/2 left-0 w-full h-10 bg-pink-700 transform -translate-y-1/2 opacity-80"></div>
                </div>
                <div className="absolute top-0 left-1/2 w-16 h-16 bg-purple-600 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md shadow-md transition-transform duration-300 group-hover:rotate-55"></div>
              </div>
              <p className="mt-6 text-white text-lg sm:text-xl font-medium animate-pulse">
                Tap to unwrap your surprise!
              </p>
            </div>
          ) : (
            <div className="text-center animate-fadeIn">
              {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-10">
                  {Array.from({ length: 150 }).map((_, i) => {
                    const size = Math.random() * 12 + 4;
                    const left = Math.random() * 100;
                    const animDuration = Math.random() * 3 + 2;
                    const color = ['#ff6b6b', '#5f27cd', '#54a0ff', '#ff9f43', '#10ac84'][Math.floor(Math.random() * 5)];
                    const shape = Math.random() > 0.5 ? 'rounded-full' : 'rounded';

                    return (
                      <div
                        key={i}
                        className={`absolute top-0 ${shape}`}
                        style={{
                          left: `${left}%`,
                          width: `${size}px`,
                          height: `${size}px`,
                          backgroundColor: color,
                          animation: `fall ${animDuration}s ease-out`,
                          transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                      />
                    );
                  })}
                </div>
              )}

              <div className="bg-white bg-opacity-40 backdrop-blur-lg rounded-xl p-6 sm:p-8 max-w-lg mx-auto shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 animate-slideUp">
                  {message}
                </h2>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full animate-bounce"
                      style={{
                        backgroundColor: ['#ff6b6b', '#5f27cd', '#54a0ff', '#ff9f43', '#10ac84'][i],
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={handleReset}
                  className="bg-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
                >
                  Open Another Surprise
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Message */}
        <div className="mt-8">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-md">
            <p className="text-black text-base sm:text-lg">
              Every moment with you is a treasure—Happy Birthday, Mummy Jay!
            </p>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fall {
          0% {
            transform: translateY(-20vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Surprise;