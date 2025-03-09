import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import Countdown from './components/Countdown';
import Surprise from './components/Suprise'; // Note: Typo in 'Suprise' (should be 'Surprise')
import { useState, useEffect } from 'react';
import audioFile from './assets/tt.mp3'; // Imported audio file
import Message from './components/Messsage';

function App() {
  const [confettiActive, setConfettiActive] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audio] = useState(new Audio(audioFile)); // Use imported file
  const [audioError, setAudioError] = useState(null);

  useEffect(() => {
    // Audio setup with error handling
    audio.onloadeddata = () => {
      console.log('Audio loaded successfully');
    };
    audio.onerror = (e) => {
      setAudioError('Failed to load audio file. Check the file path or format.');
      console.error('Audio error:', e);
    };
    audio.onended = () => {
      audio.currentTime = 0; // Reset to start
      audio.play(); // Restart for looping
    };

    const playAudio = async () => {
      if (audioPlaying) {
        try {
          await audio.play();
          audio.loop = true; // Ensure looping
          console.log('Audio playing');
        } catch (error) {
          setAudioPlaying(false); // Reset if play fails
          console.error('Audio playback failed:', error);
          setAudioError('Browser blocked autoplay. Click the play button to start.');
        }
      } else {
        audio.pause();
      }
    };

    playAudio();

    // Cleanup
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audioPlaying, audio]);

  const toggleMusic = () => {
    setAudioPlaying((prev) => !prev);
    setAudioError(null); // Clear error on manual toggle
  };

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 5000);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
        {/* Audio Controls */}
        <div className="fixed top-4 right-4 z-50 flex gap-4">
          <button
            onClick={toggleMusic}
            className="p-3 bg-white/90 rounded-full shadow-lg hover:bg-pink-100 transition-all flex items-center gap-2"
            title={audioPlaying ? 'Pause Music' : 'Play Music'}
          >
            <span className="text-pink-600 font-medium hidden sm:inline">
              {audioPlaying ? 'Pause' : 'Play'}
            </span>
            {audioPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-6.504-3.76A1 1 0 007 8.36v7.28a1 1 0 001.248.952l6.504-3.76a1 1 0 000-1.904z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={triggerConfetti}
            className="p-3 bg-white/90 rounded-full shadow-lg hover:bg-pink-100 transition-all flex items-center gap-2"
            title="Launch Confetti"
          >
            <span className="text-pink-600 font-medium hidden sm:inline">Celebrate</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-600"
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
          </button>
        </div>

        {/* Audio Error Message */}
        {audioError && (
          <div className="fixed top-16 right-4 z-50 bg-red-500 text-white p-2 rounded-lg shadow-lg">
            {audioError}
          </div>
        )}

        {confettiActive && <Confetti />}

        <Routes>
          <Route path="/" element={<Hero triggerConfetti={triggerConfetti} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/countdown" element={<Message />} />
          <Route path="/surprise" element={<Surprise />} />
        </Routes>
      </div>
    </Router>
  );
}

// Enhanced Confetti Component
const Confetti = () => {
  const colors = ['#ff718d', '#fdff8f', '#9e6fff', '#6fffe9', '#6fff8d', '#ff6fb7'];
  const pieces = Array.from({ length: 150 });

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {pieces.map((_, i) => {
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 4 + 2;
        const animationDelay = Math.random() * 1;

        return (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%',
              animation: `fall ${animationDuration}s ease-in-out ${animationDelay}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20vh) rotate(0deg);
            opacity: 1;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default App;