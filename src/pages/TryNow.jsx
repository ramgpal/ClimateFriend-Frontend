// import { useState, useRef } from 'react';
// import { FiUpload, FiX, FiCheck, FiSend, FiImage, FiVideo } from 'react-icons/fi';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import axios from 'axios';

// const TryNow = () => {
//   const [file, setFile] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     location: '',
//     date: '',
//     time: '',
//     description: ''
//   });
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       const validTypes = [
//         'image/jpeg',
//         'image/png',
//         'image/gif',
//         'video/mp4',
//         'video/quicktime',
//         'video/x-msvideo',
//         'video/x-matroska'
//       ];
      
//       if (validTypes.includes(selectedFile.type)) {
//         setFile(selectedFile);
//         console.log("The file is: ", selectedFile);
//       } else {
//         alert('Please upload a valid image (JPEG, PNG) or video (MP4, MOV, AVI, MKV) file.');
//       }
//     }
//   };

//   const handleDragEvents = {
//     onDragEnter: () => setIsDragging(true),
//     onDragLeave: () => setIsDragging(false),
//     onDragOver: (e) => e.preventDefault(),
//     onDrop: (e) => {
//       e.preventDefault();
//       setIsDragging(false);
//       if (e.dataTransfer.files.length) {
//         handleFileChange({ target: { files: e.dataTransfer.files } });
//       }
//     }
//   };

//   const handleRemoveFile = () => setFile(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!file) {
//       alert('Please select a file to upload');
//       return;
//     }

//     if (!formData.location || !formData.date) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const submissionData = new FormData();
//       submissionData.append('media', file);
//       submissionData.append('location', formData.location);
//       submissionData.append('date', formData.date);
//       submissionData.append('time', formData.time);
//       submissionData.append('description', formData.description);

//       const response = await axios.post(
//         'http://127.0.0.1:5000/detect_media',
//         submissionData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );

//       console.log('Upload successful:', response.data);
//       alert('Media submitted successfully!');
      
//       // Reset form
//       setFile(null);
//       setFormData({
//         media_path: file,
//       });
//     } catch (error) {
//       console.error('Upload error:', error.response?.data || error.message);
//       alert(`Upload failed: ${error.response?.data?.error || error.message}`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Navbar />
      
//       <main className="flex-grow">
//         <div className="max-w-2xl mx-auto p-6">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">Upload Fire Media</h1>
//             <p className="text-gray-600">Submit images or videos of wildfire incidents for analysis</p>
//           </div>

//           <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
//             {/* File Upload Area */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Media File *
//               </label>
              
//               {!file ? (
//                 <div 
//                   {...handleDragEvents}
//                   onClick={() => fileInputRef.current.click()}
//                   className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${isDragging ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-red-400'}`}
//                 >
//                   <div className="flex flex-col items-center justify-center space-y-2">
//                     <FiUpload className="text-3xl text-gray-400" />
//                     <p className="text-gray-600">
//                       <span className="text-red-600 font-medium">Click to upload</span> or drag and drop
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       Supported: JPG, PNG, MP4, MOV (Max 25MB)
//                     </p>
//                   </div>
//                   <input
//                     type="file"
//                     ref={fileInputRef}
//                     onChange={handleFileChange}
//                     className="hidden"
//                     accept="image/*,video/*"
//                   />
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-3">
//                         {file.type.startsWith('image/') ? (
//                           <FiImage className="text-gray-500" />
//                         ) : (
//                           <FiVideo className="text-gray-500" />
//                         )}
//                         <div>
//                           <p className="font-medium text-gray-800 truncate max-w-xs">{file.name}</p>
//                           <p className="text-xs text-gray-500">
//                             {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type.split('/')[0].toUpperCase()}
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={handleRemoveFile}
//                         className="text-gray-500 hover:text-red-600 transition"
//                       >
//                         <FiX />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Media Preview */}
//                   <div className="rounded-md overflow-hidden bg-black flex justify-center">
//                     {file.type.startsWith('image/') ? (
//                       <img 
//                         src={URL.createObjectURL(file)} 
//                         alt="Preview" 
//                         className="max-h-64 object-contain"
//                       />
//                     ) : (
//                       <video 
//                         controls
//                         className="max-h-64"
//                       >
//                         <source src={URL.createObjectURL(file)} type={file.type} />
//                         Your browser does not support the video tag.
//                       </video>
//                     )}
//                   </div>

//                   <div className="flex items-center text-green-600 text-sm">
//                     <FiCheck className="mr-1" />
//                     <span>Ready to upload</span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Metadata Fields */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Location *
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
//                   placeholder="Coordinates or address"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Date Captured *
//                   </label>
//                   <input
//                     type="date"
//                     name="date"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
//                     value={formData.date}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Time Captured
//                   </label>
//                   <input
//                     type="time"
//                     name="time"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
//                     value={formData.time}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Additional Notes
//                 </label>
//                 <textarea
//                   rows="3"
//                   name="description"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
//                   placeholder="Describe what's shown in the media"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                 ></textarea>
//               </div>
//             </div>

//             {/* Submit Button */}
//             {file && (
//               <div className="mt-6 flex justify-end">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`flex items-center px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <FiSend className="mr-2" />
//                       Submit Media
//                     </>
//                   )}
//                 </button>
//               </div>
//             )}
//           </form>

//           {/* Help Text */}
//           <div className="mt-6 text-center text-sm text-gray-500">
//             <p>For best results: 
//               <span className="block md:inline"> 
//                 <span className="mx-1">•</span> Capture clear footage of flames/smoke
//                 <span className="mx-1">•</span> Include location metadata if possible
//                 <span className="mx-1">•</span> Keep videos under 2 minutes
//               </span>
//             </p>
//           </div>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default TryNow;


// Updated Code
import { useState, useRef } from 'react';
import { FiUpload, FiX, FiCheck, FiSend, FiImage, FiVideo } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const TryNow = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'video/mp4',
        'video/quicktime',
        'video/x-msvideo',
        'video/x-matroska'
      ];

      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        console.log("The file is: ", selectedFile);
      } else {
        alert('Please upload a valid image (JPEG, PNG) or video (MP4, MOV, AVI, MKV) file.');
      }
    }
  };

  const handleDragEvents = {
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDragOver: (e) => e.preventDefault(),
    onDrop: (e) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length) {
        handleFileChange({ target: { files: e.dataTransfer.files } });
      }
    }
  };

  const handleRemoveFile = () => setFile(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionData = new FormData();
      submissionData.append('media', file); 
      submissionData.append('fileName', file.name);

      const response = await axios.post(
        'http://127.0.0.1:5000/detect_media',
        submissionData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log('Upload successful:', response.data);
      alert('Media submitted successfully!');
      
      // Reset form
      setFile(null);
    } catch (error) {
      console.error('Upload error:', error.response?.data || error.message);
      alert(`Upload failed: ${error.response?.data?.error || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Upload Fire Media</h1>
            <p className="text-gray-600">Submit images or videos of wildfire incidents for analysis</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            {/* File Upload Area */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Media File *
              </label>
              
              {!file ? (
                <div 
                  {...handleDragEvents}
                  onClick={() => fileInputRef.current.click()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${isDragging ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-red-400'}`}
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <FiUpload className="text-3xl text-gray-400" />
                    <p className="text-gray-600">
                      <span className="text-red-600 font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      Supported: JPG, PNG, MP4, MOV (Max 25MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,video/*"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {file.type.startsWith('image/') ? (
                          <FiImage className="text-gray-500" />
                        ) : (
                          <FiVideo className="text-gray-500" />
                        )}
                        <div>
                          <p className="font-medium text-gray-800 truncate max-w-xs">{file.name}</p>
                          <p className="text-xs text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type.split('/')[0].toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="text-gray-500 hover:text-red-600 transition"
                      >
                        <FiX />
                      </button>
                    </div>
                  </div>

                  {/* Media Preview */}
                  <div className="rounded-md overflow-hidden bg-black flex justify-center">
                    {file.type.startsWith('image/') ? (
                      <img 
                        src={URL.createObjectURL(file)} 
                        alt="Preview" 
                        className="max-h-64 object-contain"
                      />
                    ) : (
                      <video 
                        controls
                        className="max-h-64"
                      >
                        <source src={URL.createObjectURL(file)} type={file.type} />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>

                  <div className="flex items-center text-green-600 text-sm">
                    <FiCheck className="mr-1" />
                    <span>Ready to upload</span>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            {file && (
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Submit Media
                    </>
                  )}
                </button>
              </div>
            )}
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>For best results: 
              <span className="block md:inline"> 
                <span className="mx-1">•</span> Capture clear footage of flames/smoke
                <span className="mx-1">•</span> Include location metadata if possible
                <span className="mx-1">•</span> Keep videos under 2 minutes
              </span>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TryNow;




