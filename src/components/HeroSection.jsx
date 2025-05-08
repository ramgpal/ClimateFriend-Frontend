const HeroSection = () => {
    return (
      <section 
        className="py-32 px-4 sm:px-6 lg:px-8 text-white relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(../images/forest-fire.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Early Detection Saves Lives
          </h1>
          <p className="text-xl mb-8">
            AI-Powered Fire & Smoke Detection System
          </p>
          <a href="/try-now">
          <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium">
            Get Started
          </button>
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;