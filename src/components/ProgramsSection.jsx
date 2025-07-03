import {
  GraduationCap,
  Microscope,
  Network,
  PlugZap,
  Tractor,
  TreeDeciduous,
  BriefcaseBusiness,
  Laptop,
  Coins,
  Megaphone,
  MonitorSmartphone,
  TestTube2,
  Syringe,
  Building2,
  CircuitBoard,
  Cctv,
  ThermometerSun,
ChevronDown,
ArrowRight,
  Wrench,
  Dna,
  SatelliteDish,
  HeartPulse,
  BatteryFull,
  Sprout,
  Landmark,
  Briefcase,
  Code2,
  Check,
  ChevronRight,
  Cpu,
  Shield,
  FlaskConical,
  Leaf,
  Building,
  BrainCircuit,
  Banknote,
  Globe,
  Pill,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("btech");

  const programs = {
    btech: [
      {
        name: "Computer Science and Engineering",
        duration: "4 Years",
        seats: 120,
        icon: <Cpu className="text-blue-600" size={24} />,
        highlights: [
          "Industry-aligned curriculum",
          "Advanced computing labs",
          "Placement assistance",
          "Specializations available",
        ],
      },
      {
        name: "Information Technology",
        duration: "4 Years",
        seats: 120,
        icon: <Network className="text-blue-600" size={24} />,
        highlights: [
          "Cutting-edge IT infrastructure",
          "Cloud computing focus",
          "Industry certifications",
          "Project-based learning",
        ],
      },
      {
        name: "Electronics and Communication Engineering",
        duration: "4 Years",
        seats: 120,
        icon: <CircuitBoard className="text-blue-600" size={24} />,
        highlights: [
          "Modern electronics labs",
          "VLSI design training",
          "Embedded systems focus",
          "IoT specialization",
        ],
      },
      {
        name: "Electrical and Electronics Engineering",
        duration: "4 Years",
        seats: 120,
        icon: <Cctv className="text-blue-600" size={24} />,
        highlights: [
          "Power systems training",
          "Renewable energy focus",
          "Smart grid technology",
          "Industrial automation",
        ],
      },
      {
        name: "Mechanical Engineering",
        duration: "4 Years",
        seats: 180,
        icon: <Wrench className="text-blue-600" size={24} />,
        highlights: [
          "CAD/CAM labs",
          "Automotive engineering",
          "Robotics integration",
          "Industry 4.0 ready",
        ],
      },
      {
        name: "Biotechnology",
        duration: "4 Years",
        seats: 120,
        icon: <Dna className="text-blue-600" size={24} />,
        highlights: [
          "Bioreactor facilities",
          "Genetic engineering",
          "Pharma collaborations",
          "Research projects",
        ],
      },
      {
        name: "Bio-Medical Engineering",
        duration: "4 Years",
        seats: 60,
        icon: <HeartPulse className="text-blue-600" size={24} />,
        highlights: [
          "Medical imaging technology",
          "Healthcare instrumentation",
          "Clinical engineering exposure",
          "Internships in hospitals",
        ],
      },
      {
        name: "Electrical Engineering",
        duration: "4 Years",
        seats: 60,
        icon: <PlugZap className="text-blue-600" size={24} />,
        highlights: [
          "Electrical machine training",
          "Power electronics",
          "Control systems",
          "Energy management systems",
        ],
      },
      {
        name: "Agricultural Engineering",
        duration: "4 Years",
        seats: 60,
        icon: <Tractor className="text-green-600" size={24} />,
        highlights: [
          "Farm machinery and power",
          "Irrigation systems",
          "Soil science fundamentals",
          "Agro-based tech projects",
        ],
      },
      {
        name: "Civil Engineering",
        duration: "4 Years",
        seats: 180,
        icon: <Building2 className="text-gray-600" size={24} />,
        highlights: [
          "Structural design labs",
          "Surveying and GIS",
          "Green building exposure",
          "Construction management",
        ],
      },
      {
        name: "Environmental Engineering",
        duration: "4 Years",
        seats: 30,
        icon: <TreeDeciduous className="text-green-600" size={24} />,
        highlights: [
          "Water treatment labs",
          "Sustainability projects",
          "Pollution control techniques",
          "Climate impact studies",
        ],
      },
    ],

    bpharma: [
      {
        name: "B.Pharma",
        duration: "4 Years",
        seats: 100,
        icon: <Pill className="text-pink-600" size={24} />,
        highlights: [
          "Modern pharma labs",
          "Industry partnerships",
          "Regulatory training",
          "Hands-on formulation practice",
        ],
      },
    ],

    mba: [
      {
        name: "Masters in Human Resources (HR)",
        duration: "2 Years",
        seats: null,
        icon: <BriefcaseBusiness className="text-violet-600" size={24} />,
        highlights: [
          "Strategic HRM training",
          "Leadership workshops",
          "HR analytics tools",
          "Industry mentorship",
        ],
      },
      {
        name: "Masters in Information Technology",
        duration: "2 Years",
        seats: null,
        icon: <Laptop className="text-blue-600" size={24} />,
        highlights: [
          "Tech-driven management",
          "Data analytics focus",
          "IT project leadership",
          "Tech entrepreneurship",
        ],
      },
      {
        name: "Masters in Finance",
        duration: "2 Years",
        seats: null,
        icon: <Coins className="text-yellow-600" size={24} />,
        highlights: [
          "Financial modeling",
          "Investment strategies",
          "Risk management",
          "Capital markets exposure",
        ],
      },
      {
        name: "Masters in Marketing",
        duration: "2 Years",
        seats: null,
        icon: <Megaphone className="text-red-600" size={24} />,
        highlights: [
          "Digital marketing focus",
          "Brand strategy",
          "Consumer behavior analysis",
          "Market research",
        ],
      },
      {
        name: "Masters in International Business",
        duration: "2 Years",
        seats: null,
        icon: <Globe className="text-indigo-600" size={24} />,
        highlights: [
          "Cross-cultural management",
          "Global trade practices",
          "International finance",
          "Exchange program options",
        ],
      },
    ],

    mcampharma: [
      {
        name: "MCA",
        duration: "3 Years",
        seats: 60,
        icon: <MonitorSmartphone className="text-blue-600" size={24} />,
        highlights: [
          "Advanced software labs",
          "Application development",
          "AI/ML projects",
          "Industry internships",
        ],
      },
      {
        name: "M.Pharma (Pharmaceutical Chemistry)",
        duration: "2 Years",
        seats: 18,
        icon: <FlaskConical className="text-teal-600" size={24} />,
        highlights: [
          "Drug synthesis techniques",
          "Analytical chemistry",
          "Organic synthesis focus",
          "Hands-on lab experience",
        ],
      },
      {
        name: "M.Pharma (Pharmacognosy)",
        duration: "2 Years",
        seats: 18,
        icon: <Leaf className="text-green-600" size={24} />,
        highlights: [
          "Natural product chemistry",
          "Herbal drug research",
          "Ethnopharmacology",
          "Plant extract standardization",
        ],
      },
      {
        name: "M.Pharma (Pharmaceutics)",
        duration: "2 Years",
        seats: 18,
        icon: <TestTube2 className="text-rose-600" size={24} />,
        highlights: [
          "Drug formulation design",
          "Novel drug delivery systems",
          "Industrial pharmacy",
          "Regulatory compliance",
        ],
      },
      {
        name: "M.Pharma (Pharmacology)",
        duration: "2 Years",
        seats: 18,
        icon: <Syringe className="text-purple-600" size={24} />,
        highlights: [
          "Clinical research exposure",
          "Toxicology studies",
          "Pharmacodynamics/kinetics",
          "Lab animal handling",
        ],
      },
    ],

    mtech: [
      {
        name: "Power Electronics",
        duration: "2 Years",
        seats: 18,
        icon: <PlugZap className="text-orange-600" size={24} />,
        highlights: [
          "Power converter labs",
          "Electric drives",
          "High-voltage systems",
          "Simulation tools training",
        ],
      },
      {
        name: "Electronics & Communication",
        duration: "2 Years",
        seats: 18,
        icon: <SatelliteDish className="text-blue-600" size={24} />,
        highlights: [
          "Microwave and RF systems",
          "Signal processing",
          "Advanced VLSI design",
          "Research projects",
        ],
      },
      {
        name: "Thermal Science",
        duration: "2 Years",
        seats: 18,
        icon: <ThermometerSun className="text-red-600" size={24} />,
        highlights: [
          "Heat transfer systems",
          "CFD tools training",
          "Renewable energy tech",
          "Industrial projects",
        ],
      },
      {
        name: "Computer Science",
        duration: "2 Years",
        seats: 18,
        icon: <Cpu className="text-blue-600" size={24} />,
        highlights: [
          "Research-focused curriculum",
          "AI & ML deep dives",
          "Big data applications",
          "Publication support",
        ],
      },
      {
        name: "Information Technology",
        duration: "2 Years",
        seats: 18,
        icon: <Network className="text-blue-600" size={24} />,
        highlights: [
          "Enterprise systems training",
          "Advanced web technologies",
          "Data mining techniques",
          "Security systems",
        ],
      },
    ],

    diploma: [
      {
        name: "Civil Engineering",
        duration: "3 Years",
        seats: 60,
        icon: <Building2 className="text-gray-600" size={24} />,
        highlights: [
          "Construction drawing skills",
          "Basic surveying",
          "AutoCAD training",
          "Project site exposure",
        ],
      },
      {
        name: "Mechanical Engineering",
        duration: "3 Years",
        seats: 60,
        icon: <Wrench className="text-gray-600" size={24} />,
        highlights: [
          "Workshop practices",
          "Machine design",
          "Tool engineering",
          "Hands-on fabrication",
        ],
      },
      {
        name: "Electrical Engineering",
        duration: "3 Years",
        seats: 60,
        icon: <PlugZap className="text-yellow-600" size={24} />,
        highlights: [
          "Basic circuits training",
          "Motor control systems",
          "Installation practices",
          "Industrial visits",
        ],
      },
      {
        name: "Electronics and Communication Engineering",
        duration: "3 Years",
        seats: 60,
        icon: <CircuitBoard className="text-green-600" size={24} />,
        highlights: [
          "Digital electronics basics",
          "PCB design workshops",
          "Embedded systems intro",
          "Analog systems training",
        ],
      },
    ],
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-7xl items-center mx-auto">
      {/* Header Section */}
      <div className="text-center mb-10 md:mb-16">
        <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-3 sm:mb-4 animate-fade-in">
          ACADEMIC PROGRAMS
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
          Shape Your Future With <span className="text-blue-600">Our Diverse Programs</span>
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 px-2">
          Choose from our wide range of undergraduate, postgraduate and diploma programs
        </p>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 sm:mt-6 rounded-full animate-grow"></div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div className="md:hidden mb-6 relative">
        <select
          onChange={(e) => setActiveTab(e.target.value)}
          value={activeTab}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
        >
          {[
            { id: "btech", label: "Engineering" },
            { id: "mba", label: "Management (MBA)" },
            { id: "bpharma", label: "Pharmacy" },
            { id: "mtech", label: "M.Tech" },
            { id: "mcampharma", label: "MCA & M.Pharma" },
            { id: "diploma", label: "Diploma" }
          ].map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>

      {/* Desktop Tab Navigation */}
      <div className="hidden i md:block mb-8 md:mb-12">
        <div className="inline-flex rounded-xl shadow-sm bg-white p-1 border border-gray-200">
          {[
            { id: "btech", label: "Engineering", icon: <Cpu size={18} /> },
            { id: "mba", label: "Management", icon: <Banknote size={18} /> },
            { id: "bpharma", label: "Pharmacy", icon: <Pill size={18} /> },
            { id: "mtech", label: "M.Tech", icon: <Microscope size={18} /> },
            { id: "mcampharma", label: "MCA & M.Pharma", icon: <FlaskConical size={18} /> },
            { id: "diploma", label: "Diploma", icon: <Wrench size={18} /> }
          ].map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                // Smooth scroll to programs section
                document.getElementById('programs-grid')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md transform scale-[1.02]"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              } ${
                index === 0 ? "rounded-l-lg" : 
                index === 5 ? "rounded-r-lg" : ""
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Programs Grid */}
      <div id="programs-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {programs[activeTab].map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
          >
            <div className="p-5 sm:p-6">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg sm:rounded-xl mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {program.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <div className="flex items-center text-sm bg-blue-50 px-2 py-1 rounded-full">
                      <span className="text-gray-500 mr-1">Duration:</span>
                      <span className="font-semibold text-blue-600">
                        {program.duration}
                      </span>
                    </div>
                    {program.seats && (
                      <div className="flex items-center text-sm bg-blue-50 px-2 py-1 rounded-full">
                        <span className="text-gray-500 mr-1">Seats:</span>
                        <span className="font-semibold text-blue-600">
                          {program.seats}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider flex items-center">
                  <span className="w-4 h-0.5 bg-blue-300 mr-2"></span>
                  Program Highlights
                </h4>
                <ul className="space-y-2">
                  {program.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-blue-50 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Check className="text-blue-500" size={14} />
                      </div>
                      <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <a
                  href="/#begin-journey"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center group-hover:shadow-md"
                >
                  Apply Now
                  <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 md:mt-16 text-center">
        <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 transform flex items-center mx-auto group">
          <a href="/#begin-journey" className="whitespace-nowrap">
            Start Your Journey Now
          </a>
          <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </section>
  );
};

export default ProgramsSection;
