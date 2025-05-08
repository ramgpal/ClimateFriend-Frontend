import { motion } from 'framer-motion';
import { GiElectric, GiCigarette, GiCampfire, GiLightningStorm, GiFireworkRocket, GiChemicalTank } from 'react-icons/gi';

const CausesSection = () => {
  const causes = [
    {
      title: "Electrical Short Circuits",
      description: "Faulty wiring, overloaded circuits, or damaged appliances can cause sparks, leading to fires.",
      image: "/images/Electrical Short Circuits.jpg",
      icon: <GiElectric className="text-3xl text-blue-600" />
    },
    {
      title: "Improper Disposal of Cigarettes",
      description: "Discarded cigarette butts can ignite dry grass or garbage, causing fast-spreading fires.",
      image: "/images/Improper Disposal of Cigarettes.jpg",
      icon: <GiCigarette className="text-3xl text-orange-600" />
    },
    {
      title: "Unattended Campfire",
      description: "Leaving cooking unattended near flammable materials can lead to fires.",
      image: "/images/Unattended Campfire.png",
      icon: <GiCampfire className="text-3xl text-red-600" />
    },
    {
      title: "Forest Dry Leaves & Lightning Strikes",
      description: "Dry vegetation can ignite from a lightning strike, especially in dry seasons.",
      image: "/images/Forest Dry Leaves & Lightning Strikes.png",
      icon: <GiLightningStorm className="text-3xl text-yellow-600" />
    },
    {
      title: "Fireworks & Accidents",
      description: "Misuse of fireworks near dry areas can cause accidental fires during celebrations.",
      image: "/images/Fireworks & Accidents.jpg",
      icon: <GiFireworkRocket className="text-3xl text-purple-600" />
    },
    {
      title: "Flammable Chemical",
      description: "Improper storage of flammable chemicals can lead to massive fires when exposed to heat or sparks.",
      image: "/images/Flammable Chemical.jpg",
      icon: <GiChemicalTank className="text-3xl text-green-600" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Causes of Fires</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
      </motion.div>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {causes.map((cause, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={cause.image} 
                alt={cause.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                {cause.icon}
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                {cause.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{cause.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CausesSection;