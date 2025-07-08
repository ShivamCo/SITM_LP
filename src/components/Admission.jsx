
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const AdmissionSection = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [widgetLoaded, setWidgetLoaded] = useState(false)
  const [activeStep, setActiveStep] = useState(1)

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


  const steps = [
    { step: 1, title: "Register", content: "Create your account", icon: "1" },
    { step: 2, title: "Verify", content: "Email & mobile", icon: "2" },
    { step: 3, title: "Application", content: "Fill details", icon: "3" },
    { step: 4, title: "Documents", content: "Upload required files", icon: "4" },
    { step: 5, title: "Payment", content: "Pay fee", icon: "5" }
  ]

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-[#1d3557] mb-3"
          >
            Saroj Education Group
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="w-24 h-1 bg-gradient-to-r from-[#e63946] to-[#1d3557] mx-auto rounded-full"
          ></motion.div>
          <p className="mt-4 text-gray-600">Begin your academic journey with us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steps Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit">
            <div className="flex items-center mb-6">
              <div className="bg-[#1d3557] text-white p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Application Process</h2>
            </div>
            
            <div className="space-y-3">
              {steps.map((item) => (
                <motion.div 
                  key={item.step}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${activeStep === item.step ? 'bg-blue-50 border border-blue-100' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveStep(item.step)}
                >
                  <div className={`flex items-center justify-center w-9 h-9 rounded-full mr-3 ${activeStep === item.step ? 'bg-[#1d3557] text-white' : 'bg-gray-100 text-gray-600'}`}>
                    <span className="text-sm">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <div className="bg-[#e63946] text-white p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Need help?</p>
                  <a href="tel:9555699988" className="text-sm font-medium text-gray-800 hover:text-[#e63946]">+91 9555699988</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[580px]">
            <div className="bg-gradient-to-r from-[#1d3557] to-[#e63946] p-4 text-white">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h2 className="font-bold text-2xl ">Admissions 2025</h2>
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
  )
}

export default AdmissionSection