import { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Send email using EmailJS
    const templateParams = {
      fullName: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Send the email via EmailJS
    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Your EmailJS Service ID
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID1,  // Your EmailJS Template ID
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID      // Your EmailJS User ID
    );

    if (response.status === 200) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('An error occurred. Please try again later.');
  }
};



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our fire detection system? Reach out to our team for more information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-red-600">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">
                    +91 128 478 9922<br />
                    Mon-Fri: 9am-5pm PST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-red-600">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">
                    info.climatefriend@gmail.com<br />
                    info.climatefriend@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;