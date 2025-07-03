const HeroSection = () =>{

    return(


      <section
        
        className="relative h-[350px] md:h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-950/40 to-blue-800/40 overflow-hidden"
      >
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          {/* Replace 'college-campus.jpg' with your actual image path */}
          <img
            src="/students.jpg"
            alt="SITM Campus"
            className="w-full object-top h-full object-cover"
            loading="eager" // Important for hero images
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-blue-600/90 lg:bg-gradient-to-r lg:from-blue-700/80 lg:to-blue-600/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-2 max-w-4xl">
          <h1 className="text-3xl font-sans md:text-5xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            <span className="text-amber-50">
              Saroj Institute of Technology and Management
            </span>{" "}
          </h1>
          <p className="text-lg px-6 text-amber-400 mb-8 animate-fadeIn delay-100">
            Shaping future leaders through innovation and industry-relevant
            education
          </p>
        </div>

        {/* Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>
    )
};




export default HeroSection;


