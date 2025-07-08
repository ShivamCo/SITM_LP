import { Check, BookOpen, Users, Briefcase } from "lucide-react";

const AdmissionSection = () => {
  return (
    <section id="begin-journey" className="py-12 px-12 md:py-16  sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-blue-600 font-semibold text-sm md:text-base">ADMISSIONS 2024</span>
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

              {/* Application Process Steps */}
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
          <div>
            <h3 className="text-xl  sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800">
              Start Your Application
            </h3>
            
            <div class="npf_wgts h-full " data-height="500" data-w="c4686ca3db50effadb9f24fc7ca22401"></div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AdmissionSection;