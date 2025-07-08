import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Upload,
  Mail,
  ChevronRight,
  Phone,
  ClipboardList,
  HelpCircle,
  RefreshCw
} from "lucide-react";

const AdmissionSection = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
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

  const steps = [
    {
      step: 1,
      title: "Register",
      content: "Create your account",
      icon: <GraduationCap size={16} />
    },
    {
      step: 2,
      title: "Verify",
      content: "Email & mobile verification",
      icon: <Mail size={16} />
    },
    {
      step: 3,
      title: "Application",
      content: "Fill your details",
      icon: <ClipboardList size={16} />
    },
    {
      step: 4,
      title: "Documents",
      content: "Upload required files",
      icon: <Upload size={16} />
    },
    {
      step: 5,
      title: "Payment",
      content: "Complete fee payment",
      icon: <FileText size={16} />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {academicYear} Admissions
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Begin your transformative academic journey with our streamlined admission process
          </motion.p>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10">

          {/* Steps Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-fit sticky top-8">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-2.5 rounded-xl mr-4">
                <ClipboardList size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Application Process</h2>
            </div>

            <div className="space-y-4">
              {steps.map((item) => (
                <motion.div
                  key={item.step}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${
                    activeStep === item.step
                      ? "bg-blue-50/50 border-2 border-blue-100 shadow-sm"
                      : "hover:bg-gray-50/50 border border-transparent"
                  }`}
                  onClick={() => setActiveStep(item.step)}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-lg mr-4 transition-colors ${
                      activeStep === item.step
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.content}</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`transition-transform ${
                      activeStep === item.step ? "text-blue-600 rotate-90" : "text-gray-400"
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200/80">
              <div className="flex items-center p-4 bg-gray-50/50 rounded-xl">
                <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-2.5 rounded-lg mr-4">
                  <HelpCircle size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                    Need assistance?
                  </p>
                  <a
                    href="tel:9555699988"
                    className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors flex items-center"
                  >
                    <Phone size={16} className="mr-2" />
                    +91 9555699988
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 pb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-2">Admission Inquiry</h3>
                  <p className="text-sm text-gray-500">For academic year {academicYear}</p>
                </div>
                <button
                  onClick={reloadForm}
                  disabled={isReloading}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <RefreshCw size={16} className={`mr-1 ${isReloading ? "animate-spin" : ""}`} />
                  {isReloading ? "Loading..." : "Reload Form"}
                </button>
              </div>

              {!widgetLoaded && (
                <div className="flex flex-col items-center justify-center py-12 bg-gray-50/50 rounded-lg">
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
                className={`npf_wgts ${!widgetLoaded ? "hidden" : ""}`}
                data-height="500"
                data-w="c4686ca3db50effadb9f24fc7ca22401"
              ></div>
            </div>

            <div className="bg-gray-50/50 px-8 py-4 border-t border-gray-200/80">
              <p className="text-sm text-gray-500 text-center">
                Your information is secure. We'll never share your details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
