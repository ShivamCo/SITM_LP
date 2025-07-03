import { useState } from "react";
import {
  Mail,
  Phone,
  Check,
  GraduationCap,
  BookOpen,
  Users,
  Briefcase,
  Star,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import RecruitmentPartners from "./components/RecruitmentPartners";
import HeroSection from "./components/HeroSection";
import AdmissionSection from "./components/Admission";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import ProgramsSection from "./components/ProgramsSection";

const App = () => {
  const [activeTab, setActiveTab] = useState("btech");
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);
  

  const toggleTestimonial = (index) => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index);
  };

  const programs = {
    btech: [
      {
        name: "Computer Science & Engineering",
        duration: "4 Years",
        highlights: [
          "AI/ML Specialization",
          "Placement Record: 95%",
          "Industry Projects",
        ],
      },
      {
        name: "Mechanical Engineering",
        duration: "4 Years",
        highlights: [
          "Automotive Research",
          "CAD/CAM Labs",
          "Industry Collaborations",
        ],
      },
      {
        name: "Electrical Engineering",
        duration: "4 Years",
        highlights: [
          "Smart Grid Technology",
          "Renewable Energy Focus",
          "IoT Integration",
        ],
      },
      {
        name: "Electronics & Communication",
        duration: "4 Years",
        highlights: ["VLSI Design", "5G Technology", "Embedded Systems"],
      },
    ],
    management: [
      {
        name: "MBA",
        duration: "2 Years",
        highlights: [
          "Dual Specialization",
          "Summer Internships",
          "Case Study Approach",
        ],
      },
      {
        name: "BBA",
        duration: "3 Years",
        highlights: [
          "Industry Visits",
          "Entrepreneurship Cell",
          "Digital Marketing Focus",
        ],
      },
    ],
    mca: [
      {
        name: "Master of Computer Applications",
        duration: "3 Years",
        highlights: [
          "Cloud Computing",
          "Full Stack Development",
          "Data Science Electives",
        ],
      },
    ],
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <HeaderSection />
      

<HeroSection />
      

     <AdmissionSection />

      {/* New Why Choose SITM Section */}
     <WhyChooseUs />

      {/* Programs Section */}
     <ProgramsSection />

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">
              STUDENT EXPERIENCES
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              What Our Students Say
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Verma",
                role: "B.Tech CSE, 2022",
                company: "Placed at Amazon",
                rating: 5,
                content:
                  "SITM provided me with excellent technical knowledge and practical exposure that helped me secure my dream job at Amazon. The faculty members are highly supportive and the curriculum is perfectly aligned with industry requirements. The campus placement cell works tirelessly to ensure every student gets opportunities.",
                shortContent:
                  "SITM provided me with excellent technical knowledge and practical exposure that helped me secure my dream job at Amazon.",
              },
              {
                name: "Priya Singh",
                role: "MBA, 2021",
                company: "Placed at Deloitte",
                rating: 5,
                content:
                  "The MBA program at SITM transformed my career. The case-study based approach and industry interactions gave me a competitive edge. I especially appreciated the summer internship program which directly led to my current position at Deloitte. The management faculty brings real-world experience to the classroom.",
                shortContent:
                  "The MBA program at SITM transformed my career. The case-study based approach and industry interactions gave me a competitive edge.",
              },
              {
                name: "Amit Kumar",
                role: "B.Tech ME, 2023",
                company: "Placed at Tata Motors",
                rating: 4,
                content:
                  "The mechanical engineering department at SITM has state-of-the-art labs and workshops. We had regular industry visits and guest lectures from professionals. The placement support was exceptional - I received 3 job offers before graduation. The alumni network is also very active and helpful.",
                shortContent:
                  "The mechanical engineering department at SITM has state-of-the-art labs and workshops. We had regular industry visits and guest lectures.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm font-medium mt-1">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {expandedTestimonial === index
                    ? testimonial.content
                    : testimonial.shortContent}
                </p>
                <button
                  onClick={() => toggleTestimonial(index)}
                  className="text-blue-600 text-sm font-medium flex items-center"
                >
                  {expandedTestimonial === index ? (
                    <>
                      Read Less <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
      <RecruitmentPartners />

      {/* CTA Section */}
      {/* <section className="py-16 px-6 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join SAROJ INSTITUTE OF TECHNOLOGY & MANAGEMENT and take the first
            step towards a successful career
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition shadow-md">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section> */}

      {/* Contact Admissions Section with Google Map */}
      <section className="py-16 px-6 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Admissions</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our admission counselors are ready to guide you through the
                process
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-blue-100">+91 9555699988, 9810054878</p>
                    <p className="text-blue-100">Landline: 0522-3116178</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-blue-100">admission.cell@seglko.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-full mr-4 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Campus</h3>
                    <p className="text-blue-100">
                      12th KM Stone, Lucknow - Sultanpur Rd,
                      <br />
                      Ahmamau, Uttar Pradesh 226021
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Saroj Educational Group Location"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14247.220866087042!2d81.00543223106618!3d26.798638649963233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba6ca2a7a514d%3A0x3d1202273fbf1912!2sSaroj%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1716306510795!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default App;
