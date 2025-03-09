import { useState } from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../assets/WhatsApp Image 2025-03-09 at 19.18.32_efb9535d.jpg';
import photo2 from '../assets/ll.jpg';
import photo3 from '../assets/get.jpg';
import photo4 from '../assets/fam.jpg';
import photo5 from '../assets/n.jpg';
import photo6 from '../assets/convocation.jpg';
import photo7 from '../assets/twins.jpg';
import photo8 from '../assets/peg.jpg';
const Gallery = () => {
  const photos = [
    { id: 1, src: photo6, caption: "Convocation" },
    { id: 2, src: photo2, caption: "Engagement" },
    { id: 3, src: photo8, caption: "tiera on the way" },
    { id: 4, src: photo3, caption: "Beach getaway" },
    { id: 5, src: photo4, caption: "Family" },
    { id: 6, src: photo1, caption: "Mummy jay leading the family dance group" },
    { id: 7, src: photo5, caption: "Nysc days" },
    { id: 8, src: photo7, caption: "Twins" },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center text-white mb-8 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Precious Memories</h1>
        <p className="text-lg text-white text-center mb-12">A collection of beautiful moments with Mummy Jay</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all hover:scale-105"
              onClick={() => openModal(photo)}
            >
              <img 
                src={photo.src} 
                alt={photo.caption} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Photo Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.caption} 
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-4">
                <p className="text-lg font-medium">{selectedPhoto.caption}</p>
                <button 
                  className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;