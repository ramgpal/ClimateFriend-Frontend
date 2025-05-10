// pages/DetectionResult.js
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const DetectionResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  const [coords, setCoords] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [emailStatus, setEmailStatus] = useState('');
  const [isSending, setIsSending] = useState(false); // Track if the email is being sent

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation not supported.');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setLocationError('Unable to retrieve location.');
        }
      );
    }
  }, []);

  const handleNotify = () => {
    if (isSending) return; // Prevent sending email if it's already being sent

    setIsSending(true); // Disable the button by setting sending flag to true
    const now = new Date().toLocaleString();

    const locationText = coords
      ? `${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`
      : locationError || 'Location unavailable';

    const templateParams = {
      location: locationText,
      datetime: now
    };

    // Access values from .env file
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        () => {
          setEmailStatus('Notification sent to authorities.');
          alert('Notification sent to authorities.');
        },
        (error) => {
          console.error('FAILED...', error);
          setEmailStatus('Failed to send notification.');
          alert('Failed to send notification. Please try again.');
        }
      )
      .finally(() => {
        setIsSending(false); // Re-enable the button after sending process
      });
  };

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center">
          <h2>No detection result found.</h2>
          <button onClick={() => navigate('/try-now')} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
            Go Back
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const { detections, message } = result;
  const fireDetected = detections?.some(d => d.label === 'fire');
  const now = new Date().toLocaleString();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Detection Summary</h1>

        <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700 space-y-4">
          <p><strong>Status:</strong> {message}</p>
          <p><strong>Fire Detected:</strong> <span className={fireDetected ? "text-red-600 font-semibold" : "text-green-600 font-semibold"}>{fireDetected ? "Yes" : "No"}</span></p>
          <p><strong>Location: </strong> 
            {coords
              ? `${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`
              : locationError || "Fetching location..."}
          </p>
          <p><strong>Detected At:</strong> {now}</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <button onClick={() => navigate('/try-now')} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            Upload Another File
          </button>

          <button
            onClick={handleNotify}
            disabled={isSending} // Disable the button while email is being sent
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Notify Authorities
          </button>

          {emailStatus && <p className="text-sm text-gray-700 mt-2">{emailStatus}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetectionResult;
