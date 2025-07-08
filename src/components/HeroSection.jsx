import { RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isReloading, setIsReloading] = useState(false);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const widgetLoadedRef = useRef(false);

  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const academicYear = `${currentYear}-${nextYear.toString().slice(-2)}`;

  useEffect(() => {
    const checkWidgetLoaded = () => {
      const widgetElement = document.querySelector(".npf_wgts");
      if (widgetElement && widgetElement.innerHTML.trim().length > 100) {
        setWidgetLoaded(true);
        widgetLoadedRef.current = true;
        setIsReloading(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    const loadScript = () => {
      widgetLoadedRef.current = false;

      const existingWidget = document.querySelector(".npf_wgts");
      if (existingWidget) {
        existingWidget.innerHTML = "";
      }

      const existingScript = document.querySelector('script[src="https://widgets.in8.nopaperforms.com/emwgts.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";

      script.onload = () => {
        intervalRef.current = setInterval(checkWidgetLoaded, 500);

        timeoutRef.current = setTimeout(() => {
          if (!widgetLoadedRef.current && retryCount < 3) {
            setRetryCount((prev) => prev + 1);
          }
        }, 5000);
      };

      script.onerror = () => {
        console.error("Failed to load NoPaperForms script");
        if (retryCount < 3) {
          setTimeout(() => setRetryCount((prev) => prev + 1), 1000);
        }
      };

      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [retryCount]);

  const reloadForm = () => {
    setWidgetLoaded(false);
    setIsReloading(true);
    setRetryCount(0);
  };

  return (
    <section className="relative h-auto min-h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-950/40 to-blue-800/40 overflow-hidden py-12 md:py-0">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="/students.jpg"
          alt="SITM Campus"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-blue-600/90 lg:bg-gradient-to-r lg:from-blue-700/80 lg:to-blue-600/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            <span className="text-amber-50">
              Saroj Institute of Technology and Management
            </span>{" "}
          </h1>
          <p className="text-lg text-amber-400 mb-8 animate-fadeIn delay-100">
            Shaping future leaders through innovation and industry-relevant
            education
          </p>
        </div>

        {/* Right Content - Form */}
        <div className="w-full lg:w-2/5  bg-white rounded-xs shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 pb-4 md:pb-6">
          <div>
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1"> {/* Smaller text */}
            Admission {academicYear}
          </h3>
          
        </div>
           

            {!widgetLoaded && (
              <div className="flex flex-col items-center justify-center py-6 bg-gray-50/50 rounded-lg">
                <RefreshCw
                  size={24}
                  className={`mb-4 text-gray-400 ${isReloading ? "animate-spin" : ""}`}
                />
                <p className="text-gray-500">
                  {isReloading ? "Loading admission form..." : "Form is loading..."}
                </p>
                {!isReloading && (
                  <button
                    onClick={reloadForm}
                    className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <RefreshCw size={14} className="mr-1" />
                    Click to reload
                  </button>
                )}
              </div>
            )}

            <div
              className={`npf_wgts min-h-[300px] ${!widgetLoaded ? "hidden" : ""}`}
              data-height="480"
              data-w="c4686ca3db50effadb9f24fc7ca22401"
            ></div>
          </div>

          
        </div>
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
  );
};

export default HeroSection;