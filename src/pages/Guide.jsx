import { FaFireExtinguisher, FaTree, FaPhoneAlt, FaFirstAid, FaCampground, FaWater, FaFire } from 'react-icons/fa';
import { GiForest, GiPineTree, GiHealthNormal } from 'react-icons/gi';
import { MdOutlineSafetyCheck } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Guide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Forest Fire Safety Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential information to prevent, prepare for, and respond to forest fire emergencies in India
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Prevention Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-orange-100 rounded-full">
                <FaFire className="text-orange-600 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Forest Fire Prevention</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GuideCard
                icon={<FaCampground className="text-4xl text-green-600 mb-4" />}
                title="Safe Campfire Practices"
                content="Always extinguish campfires completely with water. Create a fire ring with stones and keep fires small. Never leave fires unattended in forest areas."
                image="/images/forest-campfire.jpg"
              />
              <GuideCard
                icon={<FaTree className="text-4xl text-brown-600 mb-4" />}
                title="Debris Management"
                content="Clear dry leaves and dead vegetation within 10 meters of forest edges. Report illegal burning activities to forest department immediately."
                image="/images/forest-debris.jpg"
              />
              <GuideCard
                icon={<GiPineTree className="text-4xl text-red-600 mb-4" />}
                title="Firebreak Creation"
                content="Support community efforts to create firebreaks in vulnerable forest areas. These gaps in vegetation help stop fire spread."
                image="/images/firebreak.jpg"
              />
            </div>
          </section>

          {/* Preparation Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-full">
                <GiForest className="text-blue-600 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Emergency Preparation</h2>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-600 p-8 mb-8 rounded-r-lg">
              <div className="flex items-start gap-4">
                <FaWater className="text-orange-600 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-3">Forest Fire Readiness</h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Know evacuation routes from forested areas you frequent",
                      "Pack emergency supplies (N95 masks, goggles, water)",
                      "Monitor forest fire alerts from IMD during dry seasons",
                      "Identify water sources near forest areas"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Checklist 
                icon={<MdOutlineSafetyCheck className="text-3xl text-blue-500" />}
                title="Before Entering Forests"
                items={[
                  'Check forest fire danger ratings',
                  'Inform someone of your travel plans',
                  'Carry a fire extinguisher or water',
                  'Have emergency contacts saved'
                ]}
              />
              <Checklist 
                icon={<FaFire className="text-3xl text-red-500" />}
                title="When Fire is Spotted"
                items={[
                  'Move perpendicular to wind direction',
                  'Head towards already burned areas if safe',
                  'Avoid canyons and steep slopes',
                  'Cover nose/mouth with wet cloth'
                ]}
              />
            </div>
          </section>

          {/* Response Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-100 rounded-full">
                <FaPhoneAlt className="text-red-600 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Emergency Response</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center gap-2">
                  <FaPhoneAlt className="text-orange-500" />
                  During a Forest Fire
                </h3>
                <StepByStep
                  steps={[
                    'Call forest department immediately if you spot fire',
                    'Move to low-lying areas with less vegetation',
                    'Stay low where air is less smoky',
                    'If trapped, find a body of water or cleared area'
                  ]}
                />
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center gap-2">
                  <GiHealthNormal className="text-blue-500" />
                  After Exposure
                </h3>
                <StepByStep
                  steps={[
                    'Seek medical help for smoke inhalation',
                    'Monitor for breathing difficulties',
                    'Flush eyes with clean water if irritated',
                    'Stay hydrated and rest'
                  ]}
                />
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-r-lg">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <FaFirstAid className="text-red-600 text-3xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-3">Emergency Contacts (India)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    For forest fire emergencies, immediately contact:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-medium text-gray-800">
                        <span className="font-bold">Forest Fire Control:</span> 101 (or local forest office)
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-medium text-gray-800">
                        <span className="font-bold">Disaster Management:</span> 1070
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-medium text-gray-800">
                        <span className="font-bold">National Emergency:</span> 112
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-medium text-gray-800">
                        <span className="font-bold">Medical Emergency:</span> 108
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const GuideCard = ({ icon, title, content, image }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  </div>
);

const Checklist = ({ icon, title, items }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
    <div className="flex items-center gap-4 mb-6">
      {icon}
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="bg-green-100 text-green-600 rounded-full p-1 mt-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const StepByStep = ({ steps }) => (
  <div className="relative">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-orange-200 to-red-200"></div>
    {steps.map((step, index) => (
      <div key={index} className="relative pl-8 mb-6 last:mb-0">
        <div className="absolute left-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
          {index + 1}
        </div>
        <p className="text-gray-700 pl-2">{step}</p>
      </div>
    ))}
  </div>
);

export default Guide;