// components/FireEventCard.js
import { motion } from 'framer-motion';

const FireEventCard = ({ title, description, image, align, onLearnMore }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-center`}
    >
      <motion.div 
        className="w-full md:w-1/2 relative overflow-hidden rounded-xl shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        {/* Background blur for low-res images */}
        <div 
          className="absolute inset-0 bg-gray-200 blur-md scale-110 z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7
          }}
        />
        
        {/* Main image with overlay */}
        <div className="relative z-10 h-64 w-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-xl"
            style={{
              objectPosition: 'center',
              backdropFilter: 'blur(2px)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
        </div>
      </motion.div>
      
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLearnMore}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FireEventCard;