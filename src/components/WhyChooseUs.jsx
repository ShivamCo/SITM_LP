import { GraduationCap, Briefcase, BookOpen, Users, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <GraduationCap className="text-blue-600" size={32} />,
      title: "Academic Excellence",
      description: "NAAC accredited programs with industry-aligned curriculum and expert faculty",
      color: "bg-blue-100"
    },
    {
      icon: <Briefcase className="text-blue-600" size={32} />,
      title: "Placement Record",
      description: "90% placement rate with 200+ hiring partners including Fortune 500 companies",
      color: "bg-blue-50"
    },
    {
      icon: <BookOpen className="text-blue-600" size={32} />,
      title: "Modern Infrastructure",
      description: "50-acre campus with smart classrooms, advanced labs, and innovation centers",
      color: "bg-blue-100"
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: "Industry Partnerships",
      description: "Collaborations with 100+ companies for internships and live projects",
      color: "bg-blue-50"
    },
    {
      icon: <Star className="text-blue-600" size={32} />,
      title: "Scholarships",
      description: "Merit-based and need-based scholarships for deserving students",
      color: "bg-blue-100"
    },
    {
      icon: <MapPin className="text-blue-600" size={32} />,
      title: "Prime Location",
      description: "Located in Lucknow with excellent connectivity and amenities",
      color: "bg-blue-50"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider">WHY CHOOSE US</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-3">
            Why Choose <span className="text-blue-600">SITM</span>?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${feature.color}`}
            >
              <div className="p-6">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0
                  }}
                  className="flex justify-center mb-5"
                >
                  <div className={`p-4 rounded-full ${hoveredIndex === index ? 'bg-white shadow-md' : 'bg-blue-100'}`}>
                    {feature.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
              
              {hoveredIndex === index && (
                <motion.div
                  layoutId="highlight"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute inset-0 border-2 border-blue-400 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
           href="https://seglko.in8.nopaperforms.com/"
           target="_blank" 
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;