import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Message = () => {
  // Remove isVisible since it's not being used anywhere in the component
  const [currentLine, setCurrentLine] = useState(0);
 
  const birthdayMessage = [
    "Dear Big Sis,",
    "On this special day, I want you to know how much you mean to me.",
    "You've always been there for me, through thick and thin.",
    "Your kindness, strength, and love inspire me every day.",
    "I'm so grateful to have you as my sister.",
    "May this year bring you all the happiness, success, and joy you deserve.",
    "Happy Birthday!",
    "With all my love 💖,"
  ];
 
  useEffect(() => {
    // Remove setIsVisible since we removed the state variable
    
    const interval = setInterval(() => {
      setCurrentLine(prevLine => {
        if (prevLine < birthdayMessage.length - 1) {
          return prevLine + 1;
        } else {
          clearInterval(interval);
          return prevLine;
        }
      });
    }, 2000);
   
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <Link to="/" className="inline-flex items-center text-white mb-8 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
       
        <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-inner min-h-64">
            {birthdayMessage.slice(0, currentLine + 1).map((line, index) => (
              <p
                key={index}
                className={`mb-4 text-lg ${index === currentLine ? 'animate-fadeIn' : ''} ${index < 2 || index === birthdayMessage.length - 1 ? 'font-bold' : ''}`}
              >
                {line}
              </p>
            ))}
          </div>
         
          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentLine(birthdayMessage.length - 1)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg shadow transition-colors"
            >
              Show Full Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;