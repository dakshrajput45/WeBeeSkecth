<<<<<<< HEAD
import BannerSection from "../components/BannerSection";
import BannerData from "../Banner-data";
import { useState } from "react";
import AnalyticsService from "../components/AnalyticsService";

function Services() {

    const [service,setService] = useState(AnalyticsService);
  return (
    <div>
      <div>
        <BannerSection props={BannerData[1]} />
      </div>
      <div>
        <div>
          <div>
            <div>
              <p>Analytics and Data Insights</p>
            </div>
            <p className="p-our-line"></p>

            <div>
              <p>Content Marketing</p>
            </div>
            <p className="p-our-line"></p>

            <div>
              <p>Search Engine Marketing</p>
            </div>
            <p className="p-our-line"></p>

            <div>
              <p>Social Media Marketing</p>
            </div>
            <p className="p-our-line"></p>

            <div>
              <p>Pay-Per-Click Advertising</p>
            </div>
            <p className="p-our-line"></p>
          </div>
        </div>
        <div>
          <p>Do You Need Any Consulting Service?</p>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium bg-black rounded-lg group bg-gradient-to-br from-slate-300 to-slate-500 group-hover:from-grey-500 group-hover:to-grey-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-grey-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Go to HomePage
            </span>
          </button>
        </div>
      </div>
      <div>
        {service}
      </div>
    </div>
  );
}

export default Services;
=======
import BannerSection from "../components/BannerSection"
import BannerData from "../Banner-data"

function Services() {
    return(
        <div>
            <div>
                <BannerSection props={BannerData[1]}/>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Services;
>>>>>>> cccd92f208d4dc908dd42375c67802f7b8017632
