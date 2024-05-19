import BannerSection from "../components/BannerSection";
import BannerData from "../Data/Banner-data";
import { useState } from "react";
import AnalyticsService from "../components/AnalyticsService";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";

function Services() {
  const [service, setService] = useState(AnalyticsService);
  return (
    <div>
      <div>
        <BannerSection props={BannerData[1]} />
      </div>
      <div className="flex flex-col p-[40px] lg:flex-row sm:p-[100px] justify-evenly">
        <div className="flex flex-col sm:min-w-[350px] lg:mr-[60px] mb-20">
          <div className=" flex flex-col p-[20px] py-[60px] mb-[40px] rounded-2xl border border-gray-400 shadow-2xl justify-evenly">
            <div className="flex flex-row mb-[18px] text-[18px]" onClick={()=>{setService(AnalyticsService)}}>
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon1.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Analytics and Data Insights</p>
            </div>
            <p class="border border-gray-400 mb-8 border-solid"></p>

            <div className="flex flex-row mb-[18px] text-[18px]">
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon2.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Content Marketing</p>
            </div>
            <p class="border border-gray-400 mb-8 border-solid"></p>

            <div className="flex flex-row mb-[18px] text-[18px]">
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon3.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Search Engine Marketing</p>
            </div>
            <p class="border border-gray-400 mb-8 border-solid"></p>

            <div className="flex flex-row mb-[18px] text-[18px]">
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon4.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Social Media Marketing</p>
            </div>
            <p class="border border-gray-400 mb-8 border-solid"></p>

            <div className="flex flex-row mb-[18px] text-[18px]">
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon5.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Pay-Per-Click Advertising</p>
            </div>
            <p className="border border-gray-400 border-solid"></p>
          </div>
          <div class="flex flex-col justify-center items-center text-center  sm:min-w-[350px] bg-white shadow-md rounded-lg overflow-hidden p-10 py-[60px] border border-gray-400 border-solid">
              <p className="text-[26px] font-semibold text-gray-800 mb-20">
                Do You Need Any Consulting Service?
              </p>
              <button className="inline-block px-6 py-2 bg-gradient-to-br from-slate-300 to-slate-500 text-white font-semibold rounded-md hover:from-gray-500 hover:to-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200">
                Go to HomePage
              </button>
          </div>
        </div>
        <div>{service}</div>
      </div>
      <p class="border border-gray-400 mb-8 border-solid mx-[40px] sm:mx-[100px]"></p>
      <div>
        <FormSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Services;
