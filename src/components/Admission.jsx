import { useState, useEffect } from "react";
import { Check, BookOpen, Users, Briefcase } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const AdmissionSection = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

 useEffect(() => {
  let interval;

  const checkWidgetLoaded = () => {
    const widgetElement = document.querySelector(".npf_wgts");
    if (widgetElement && widgetElement.innerHTML.trim().length > 100) {
      setWidgetLoaded(true);
      clearInterval(interval);
    }
  };

  const loadScript = () => {
    if (document.querySelector('script[src="https://widgets.in8.nopaperforms.com/emwgts.js"]')) {
      setScriptLoaded(true);
      interval = setInterval(checkWidgetLoaded, 500);
      return;
    }

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.in8.nopaperforms.com/emwgts.js";

    s.onload = () => {
      setScriptLoaded(true);
      interval = setInterval(checkWidgetLoaded, 500);
    };

    s.onerror = () => console.error("Failed to load NoPaperForms script");
    document.body.appendChild(s);
  };

  loadScript();

  return () => {
    if (interval) clearInterval(interval);
  };
}, []);


  return (
    <section id="begin-journey" className="py-12 px-12 md:py-16 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-blue-600 font-semibold text-sm md:text-base">
            ADMISSIONS {new Date().getFullYear()}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
            Begin Your Journey at SITM
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mt-3 md:mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Application Process */}
          <div className="order-1 lg:order-none">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800">
                Application Process
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    step: "1",
                    title: "Register",
                    description: "Create your account on our admission portal",
                    icon: <Users className="text-blue-600" size={20} />,
                  },
                  {
                    step: "2",
                    title: "Verify",
                    description: "Confirm your email & mobile number",
                    icon: <Check className="text-blue-600" size={20} />,
                  },
                  {
                    step: "3",
                    title: "Application",
                    description: "Fill in your personal and academic details",
                    icon: <BookOpen className="text-blue-600" size={20} />,
                  },
                  {
                    step: "4",
                    title: "Documents",
                    description: "Upload required files (mark sheets, ID proof, etc.)",
                    icon: <Briefcase className="text-blue-600" size={20} />,
                  },
                  {
                    step: "5",
                    title: "Payment",
                    description: "Pay the application fee online",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3">
                          {item.step}
                        </span>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 mt-1 sm:mt-2 ml-7 sm:ml-9 text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[580px]">
            <div className="bg-gradient-to-r from-[#1d3557] to-[#e63946] p-4 text-white">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h2 className="font-bold text-2xl">Admissions 2025</h2>
                  <p className="text-xs opacity-90">Limited seats available</p>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div 
                className="npf_wgts w-full h-full"
                data-height="110%"
                data-w="c4686ca3db50effadb9f24fc7ca22401"
              ></div>

              <AnimatePresence>
                {!widgetLoaded && (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6"
                  >
                    <div className="flex flex-col items-center">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-10 h-10 border-3 border-[#e63946] border-t-transparent rounded-full mb-4"
                      ></motion.div>
                      <p className="text-gray-600 text-sm text-center">Loading application form...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-gray-50 p-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure form</span>
                </div>
                <span>Application fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
