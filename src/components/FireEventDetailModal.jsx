import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FireEventDetailModal = ({ event, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl"
      >
        {/* Image Section */}
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 shadow-lg z-10"
          >
            &times;
          </button>
          
          <div className="w-full flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="max-w-full max-h-[50vh] overflow-hidden flex justify-center rounded-lg border border-gray-200">
              <img 
                src={event.image} 
                alt={event.title} 
                className="max-w-full max-h-[50vh] object-scale-down"
                style={{
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Enhanced Text Content Section */}
        <div className="p-8 space-y-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-2 font-serif tracking-tight">
              {event.title}
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full mb-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose-lg text-gray-700 leading-relaxed"
          >
            <p className="text-xl mb-6">{event.description}</p>
            
            {event.additionalDetails && (
              <div className="space-y-4 border-l-4 border-blue-100 pl-6 my-6">
                {event.additionalDetails.map((detail, index) => (
                  <p key={index} className="text-lg">
                    <span className="text-blue-500 font-semibold">•</span> {detail}
                  </p>
                ))}
              </div>
            )}
          </motion.div>
          
          {event.statistics && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Key Statistics
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.statistics.map((stat, index) => (
                  <motion.li 
                    key={index} 
                    whileHover={{ x: 5 }}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  >
                    <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{stat}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FireEventDetailModal;