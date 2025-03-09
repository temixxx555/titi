import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Countdown = () => {
  // Set the next birthday to March 10, 2026
  const getNextBirthday = () => {
    const now = new Date();
    const nextBirthday = new Date(now.getFullYear() + 1, 2, 10); // March is month 2 (0-indexed)
    if (now > nextBirthday) {
      nextBirthday.setFullYear(now.getFullYear() + 1); // If March 10 has passed this year, move to next year
    }
    return nextBirthday;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const futureDate = getNextBirthday();

    const calculateTimeLeft = () => {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const birthday = new Date(futureDate.getFullYear(), futureDate.getMonth(), futureDate.getDate());

      // Check if today is the birthday
      const isBirthdayToday =
        today.getDate() === birthday.getDate() &&
        today.getMonth() === birthday.getMonth() &&
        today.getFullYear() === birthday.getFullYear();

      setIsToday(isBirthdayToday);

      if (isBirthdayToday) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const difference = futureDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // If the date has passed (shouldn't happen with our logic, but just in case)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center py-8 px-4 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
      <div className="max-w-4xl w-full text-center">
        <Link
          to="/"
          className="inline-flex items-center text-white mb-6 hover:underline transition-colors"
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

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {isToday ? "Happy Birthday, Mummy Jay! 🎉" : "Countdown to Mummy Jay's Birthday"}
          </h1>
          <p className="text-base sm:text-lg text-white mt-2">
            {isToday
              ? "Today is your special day!"
              : `Next birthday: March 10, ${getNextBirthday().getFullYear()}`}
          </p>
        </div>

        {isToday ? (
          <div className="animate-bounce text-center">
            <div className="inline-block bg-white p-8 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <p className="text-lg text-white mt-4">Let’s celebrate!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-40 backdrop-blur-lg rounded-lg p-4 sm:p-6 text-center shadow-md transition-transform hover:scale-105"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600 mb-2 animate-countdown">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-pink text-sm sm:text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <p className="text-base sm:text-lg text-white">
            {isToday
              ? "Time to make this day unforgettable!"
              : "Counting down to the big celebration!"}
          </p>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-countdown {
          animation: pulse 0.5s infinite alternate;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default Countdown;