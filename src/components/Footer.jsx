const Footer = () => {
  // Function to open Research Papers 
  const openResearchPapers = () => {
    const pdfUrl = '/research-papers.pdf';
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  // Function to open Review Paper 
  const openReviewPaper = () => {
    const pdfUrl = '/review-paper.pdf';
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  // Function to open Project Report 
  const openProjectReport = () => {
    const pdfUrl = '/Project-Report.pdf';
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Climate Friend</h3>
            <p className="text-gray-400">
              AI-powered early detection system for wildfires and smoke incidents.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/guide" className="hover:text-white transition">Guide</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={openResearchPapers}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Research Papers
                </button>
              </li>
              <li>
                <button 
                  onClick={openReviewPaper}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Review Paper
                </button>
              </li>
              <li>
                <button 
                  onClick={openProjectReport}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Project Report
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>info@climatefriend.com</p>
              <p>+91 128 478 9922</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Climate Friend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;