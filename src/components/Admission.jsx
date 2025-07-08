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
  Award,
  Users,
  Globe,
  Briefcase
} from "lucide-react";
import { useState } from "react";

const AdmissionSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const academicYear = `${currentYear}-${nextYear.toString().slice(-2)}`;
  
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Content - Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-2.5 rounded-xl mr-4">
                <Award size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Why Choose Saroj Institute?</h2>
            </div>

            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                At Saroj Institute of Technology and Management, we offer more than just education - 
                we provide a transformative experience that prepares you for real-world success.
              </p>

              <div className="flex items-start mb-6">
                <Briefcase className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Industry-Aligned Curriculum</h3>
                  <p>
                    Our programs are designed in collaboration with industry leaders to ensure you gain 
                    the most relevant skills and knowledge for today's job market.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Users className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Experienced Faculty</h3>
                  <p>
                    Learn from distinguished professors and industry practitioners who bring years of 
                    real-world experience into the classroom.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Global Opportunities</h3>
                  <p>
                    Benefit from our international collaborations, exchange programs, and global 
                    perspective that prepares you for a borderless career.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Application Process */}
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
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;