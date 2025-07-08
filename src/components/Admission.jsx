
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, FileText, Upload, Search ,Mail,   } from "lucide-react";


const AdmissionSection = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [widgetLoaded, setWidgetLoaded] = useState(false)
  const [activeStep, setActiveStep] = useState(1)




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
         <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-full  p-2 rounded-xl bg-white shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-bold text-blue-800 pt-4 px-4 mb-6">Admission {new Date().getFullYear()} - {new Date().getFullYear()+1} </h3>

          <div className="npf_wgts" data-height="500" data-w="c4686ca3db50effadb9f24fc7ca22401"></div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionSection