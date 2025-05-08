import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import FireEventCard from '../components/FireEventCard';
import CausesSection from '../components/CausesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FireEventDetailModal from '../components/FireEventDetailModal';

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fireEvents = [
    {
      title: "Australian Bushfires (2019-2020)",
      description: "The 2019-2020 Australian bushfire season, known as 'Black Summer,' burned over 18 million hectares of land, destroying thousands of homes and displacing millions of animals. Extreme heat, drought, and strong winds fueled the fires, making them one of the worst wildfire disasters in history.",
      image: "/images/Australian Bushfires (2019-2020).jpg",
      additionalDetails: [
        "The fires burned for months, from June 2019 until May 2020, affecting nearly 3 billion animals and causing 34 human deaths.",
        "Smoke from the fires circumnavigated the globe, and the event was declared among the worst wildlife disasters in modern history by experts.",
        "The economic impact was estimated at over A$100 billion, including tourism losses and property damage."
      ],
      statistics: [
        "18.6 million hectares burned",
        "5,900+ buildings destroyed",
        "34 human fatalities",
        "3 billion animals affected",
        "A$100+ billion economic impact"
      ]
    },
    {
      title: "Amazon Rainforest Wildfires (2019)",
      description: "In 2019, the Amazon rainforest experienced one of its worst wildfire seasons, with over 72,000 fires recorded across Brazil. Deforestation, illegal land clearing, and extreme dry conditions contributed to the rapid spread of fires, threatening one of the world's most vital ecosystems.",
      image: "/images/Amazon Rainforest Wildfires (2019).jpg",
      additionalDetails: [
        "The Amazon produces 20% of the world's oxygen and is often referred to as 'the planet's lungs'.",
        "The fires were so intense that smoke blackened the sky over São Paulo, located thousands of kilometers away.",
        "International leaders called for action, with France's President Macron calling it an 'international crisis' during the G7 summit."
      ],
      statistics: [
        "72,000+ fires detected",
        "9,000+ square kilometers lost",
        "20% of world's oxygen produced by Amazon",
        "3 million+ species call the Amazon home",
        "40% increase in fires compared to 2018"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Real World Problems Section */}
        <section className="p-8 sm:p-10 lg:p-12 bg-blue-50 rounded-lg mx-4 sm:mx-6 lg:mx-8 my-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Real World Problems
          </h2>
          
          <div className="space-y-8">
            {fireEvents.map((event, index) => (
              <FireEventCard
                key={index}
                title={event.title}
                description={event.description}
                image={event.image}
                align={index % 2 === 0 ? "left" : "right"}
                onLearnMore={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </section>
        
        {/* Separate Causes Section */}
        <section className="p-8 sm:p-10 lg:p-12 bg-green-50 rounded-lg mx-4 sm:mx-6 lg:mx-8 my-8">
          <CausesSection />
        </section>
      </main>
      
      <Footer />

      {/* Modal for detailed view */}
      {selectedEvent && (
        <FireEventDetailModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
};

export default Home;