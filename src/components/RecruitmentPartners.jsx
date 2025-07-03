import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const RecruitmentPartners = () => {
  const partners = [
    { name: "TCS", logo: "/logos/tcs.png" },
    { name: "Infosys", logo: "/logos/infosys.png" },
    { name: "Amazon", logo: "/logos/amazon.png" },
    { name: "Microsoft", logo: "/logos/microsoft.png" },
    { name: "Wipro", logo: "/logos/wipro.png" },
    { name: "HCL", logo: "/logos/hcl.png" },
    
    { name: "Accenture", logo: "/logos/accenture.png" },
    { name: "Tech Mahindra", logo: "/logos/tech_mahindra.png" },
    { name: "Capgemini", logo: "/logos/capgemini.png" },
  ];

  return (
    <section className="py-16 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">OUR PARTNERS</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Recruitment Partners
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We maintain strong relationships with leading companies who regularly
            recruit our graduates
          </p>
        </div>

        <div className="px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="py-8"
          >
            {partners.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center h-20">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-24 object-contain opacity-80 hover:opacity-100 transition"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentPartners;