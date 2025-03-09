import { useState } from 'react';
import { Link } from 'react-router-dom';

const Wishes = () => {
  const initialWishes = [
    { id: 2, name: "Dad", message: "To my amazing daughter on her special day. I'm so proud of the person you've become. Happy birthday!", color: "bg-blue-100" },
    { id: 1, name: "Mom", message: "Happy birthday to my wonderful daughter! May this year bring you all the happiness and success you deserve.", color: "bg-pink-100" },
   
    { id: 3, name: "Eniola", message: "Happy birthday to my darling sis! Wishing you a fantastic birthday filled with joy and laughter. You deserve the best!", color: "bg-purple-100" },
    { id: 4, name: "temi", message: "Happy birthday to the most amazing person I know! May your day be as special as you are.", color: "bg-yellow-100" },
 
  ];

  const [wishes, setWishes] = useState(initialWishes);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const colors = ["bg-pink-100", "bg-blue-100", "bg-purple-100", "bg-yellow-100", "bg-green-100", "bg-indigo-100"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newWish.name.trim() === '' || newWish.message.trim() === '') return;
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    setWishes([
      ...wishes,
      {
        id: Date.now(),
        name: newWish.name,
        message: newWish.message,
        color: randomColor
      }
    ]);
    
    setNewWish({ name: '', message: '' });
    setIsFormVisible(false);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-white mb-8 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Birthday Wishes</h1>
        <p className="text-lg text-white text-center mb-8">Messages of love and celebration for Mummy Jay</p>
        
        <div className="mb-8 text-center">
          <button 
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="bg-white hover:bg-pink-50 text-pink-600 font-bold py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            {isFormVisible ? 'Cancel' : 'Add Your Wish'}
          </button>
        </div>
        
        {isFormVisible && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Add Your Birthday Wish</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={newWish.name}
                  onChange={(e) => setNewWish({...newWish, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message"
                  value={newWish.message}
                  onChange={(e) => setNewWish({...newWish, message: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
                  placeholder="Write your birthday wish here..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors"
              >
                Submit Wish
              </button>
            </form>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish) => (
            <div 
              key={wish.id} 
              className={`${wish.color} rounded-lg p-6 shadow-lg transform transition-all hover:scale-105`}
            >
              <p className="text-gray-800 font-medium mb-4">{wish.message}</p>
              <p className="text-right text-gray-600 font-bold">- {wish.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishes;