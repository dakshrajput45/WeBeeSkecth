import BannerSection from "../components/BannerSection";
import BannerData from "../Data/Banner-data";
import { useEffect } from "react";
import Aos from "aos";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";
import LogoScroller from "../components/LogoScroller";
import FrequentAnswer from "../components/FrequentAnswers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";

function AnalyticsServicePage() {

  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, [])
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div>
        <BannerSection props={BannerData[1]} />
      </div>
      <div className="flex flex-col p-[10px] lg:flex-row sm:p-[100px] justify-evenly" data-aos="fade-up">
        <div className="flex flex-col sm:min-w-[350px] lg:mr-[60px] mb-20">
          <div className=" flex flex-col p-[20px] py-[60px] mb-[40px] rounded-2xl border border-gray-400 shadow-2xl justify-evenly">
            <div className="flex flex-row mb-[18px] text-[18px]  cursor-pointer" onClick={() => { navigate("/analytics-and-data-insights") }}>
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon1.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Analytics and Data Insights</p>
            </div>
            <p className="border border-gray-400 mb-8 border-solid"></p>

            <div className="flex flex-row mb-[18px] text-[18px]  cursor-pointer" onClick={navigate("/analytics-and-data-insights")}>
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon2.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Content Marketing</p>
            </div>
            <p className="border border-gray-400 mb-8 border-solid"></p>

            <div className="flex flex-row mb-[18px] text-[18px]  cursor-pointer" onClick={navigate("/analytics-and-data-insights")}>
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon3.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Search Engine Marketing</p>
            </div>
            <p className="border border-gray-400 mb-8 border-solid"></p>

            <div className="flex flex-row mb-[18px] text-[18px]  cursor-pointer" onClick={navigate("/analytics-and-data-insights")}>
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon4.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Social Media Marketing</p>
            </div>
            <p className="border border-gray-400 mb-8 border-solid"></p>

            <div className="flex flex-row mb-[18px] text-[18px]  cursor-pointer" onClick={navigate("/analytics-and-data-insights")}>
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon5.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>Web Development</p>
            </div>
            <p className="border border-gray-400 mb-8 border-solid"></p>
            <div className="flex flex-row mb-[18px] text-[18px] cursor-pointer" onClick={navigate("/analytics-and-data-insights")}>
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/icon/service-details-icon5.png"
                alt="img"
                width="32"
                height="32"
                className="mr-3 w-[32px] h-[32px]"
              />
              <p>App Development</p>
            </div>
            <p className="border border-gray-400 border-solid"></p>
          </div>
          
          <div className="flex flex-col justify-center items-center text-center  sm:min-w-[350px] bg-white shadow-md rounded-lg overflow-hidden p-10 py-[60px] border border-gray-400 border-solid">
            <p className="text-[26px] font-semibold text-gray-800 mb-20">
              Do You Need Any Consulting Service?
            </p>
            <button
              className="explore-btn"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => { window.location.href = ' https://calendly.com/webeesketch/30min'; }}
            >
              Book A Call {hover ? <MdArrowForward /> : <MdArrowOutward />}
            </button>
          </div>
        </div>
        <div>
          <div className="font-medium" data-aos="fade-up">
            <div >
              <p className="text-[60px] mb-[30px] font-medium leading-[72px]">
                <span className="text-[rgb(244,115,162)]">Analytics</span> and Data Insights
              </p>
              <p className="text-[18px] mb-5 leading-[32px]">
                Unlock the potential of your business with our advanced analytics and data insights solutions.
                Our team harnesses cutting-edge tools and methodologies to transform raw data into actionable intelligence.
              </p>
              <p className="text-[18px] mb-[55px] leading-[32px]">
                Identifying market and customer trends early allows us to stay ahead of the curve and adapt swiftly to changing demands.
                By optimizing operations, we can improve efficiency and reduce costs, ensuring our processes are as streamlined and cost-effective
                as possible. This enhanced efficiency supports our strategic goals, enabling us to make informed, data-driven decisions that bolster
                our overall strategy. Consequently, these efforts drive growth by uncovering new opportunities for expansion, ensuring our sustained
                success in the market.
              </p>
            </div>
            <div>
              <img
                src="https://marketi-html.vercel.app/marketi-demo/assets/images/service/service-details-image1.jpg"
                alt="img"
                className="mb-[60px]"
              />
            </div>
            {/* <div>
        <div data-aos="fade-up">
          <p className="text-[28px] mb-[20px] leading-[32px]">
            Start Shaping the <span className="text-[rgb(244,115,162)]">Process</span>
          </p>
          <p className="text-[18px] mb-[25px] leading-[32px]">
            What we have at the start:
          </p>
          <div data-aos="zoom-in">
            <ul>
              {points.map((point, index) => (
                <li
                  className="mb-[20px] text-[18px] leading-[32px] ml-10px"
                  key={index}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-[30px] text-[18px] leading-[32px]" data-aos="fade-up">
            We have started simple — code at GitHub and a PR-based flow with a
            single requirement — to have tickets split table to be delivered in
            1–3 days. This required some practice of story slicing, and it seems
            that a sense of visible fast progress is shown through the ability
            to move tickets to Done. This can be a great motivational factor for
            the team to onboard that idea.
          </p>
        </div>
        <div>
          <p className="mb-[20px] text-[28px] leading-[32px]">
            Our Simple <span className="text-[rgb(244,115,162)]">Roadmap</span>
          </p>
          <p className="mb-[50px] text-[18px] leading-[32px]" data-aos="fade-up">
            Nowadays, the choice of frameworks is really wide, but again, due to
            some experience with Flutter, we decided to give it a go. Within
            mobile development, one of the important aspects to better decide on
            is state management.
          </p>
        </div>
        <p className="border border-gray-400 mb-[50px] border-solid"></p>
      </div>
      <div className="flex lg:flex-row flex-col justify-evenly" data-aos="zoom-in">
        {cardServices.map((service, index) => (
          <CardService
            key={index}
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
      <p className="border border-gray-400 mt-[50px] mb-[50px] border-solid"></p>
      <div className="bg-white shadow-lg mx-auto mb-[60px] p-[15px] border-2 border-solid border-rgb-0-33-65 rounded-xl">
        <p className="text-[20px] sm:text-[28px] leading-[32px] mb-8">
          “I am genuinely thrilled by the current fusion of technologies
          reshaping digital marketing. The <span>integration of data analytics</span>, AI and
          automation is revolutionizing our approach.”
        </p>
        <div className="flex items-center  mt-[30px]">
          <div className="mr-5">
            <img
              src="https://marketi-html.vercel.app/marketi-demo/assets/images/service/service-details-user.png"
              alt="img"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div>
            <p className="text-18">Willamson Hussy</p>
            <p className="text-16">CEO of Kingtech</p>
          </div>
        </div>
      </div>
      <div className="leading-[32px]" data-aos="fade-up">
        <p className="text-[28px] mb-[20px]">How Did We Get Into <span className="text-[rgb(244,115,162)]">Terraform<span onClick={()=>{}}>?</span></span></p>
        <p className="text-[18px] mb-[20px]">
          The backend, a part of the DB, also should have some object/file
          storage. Sooner or later, we also should have DNS so that our services
          are ready to play with the big cruel world.
        </p>
        <p className="text-[18px] mb-[20px]">
          The choice of cloud provider was purely based on existing expertise
          within the team. We already use AWS for other projects, so we decided
          to stick with it. For sure, it is increased possible to do everything in the AWS
          console, but as times go, things become a classic big ball of AWS
          console, but as times go, mud that everyone is terrified to touch, and
          no one remembers why this bit exists at all.
        </p>
        <p className="text-[18px]">
          Our approach to choosing with whom we work activities to try the most
          promising one chosen by features, supported languages, and, in the
          case of providers, pricing.
        </p>
      </div> */}
          </div>
        </div>
      </div>
      <div>
        <FrequentAnswer />
      </div>
      <p className="border border-gray-400 mb-8 border-solid mx-[10px] sm:mx-[100px]"></p>
      <div>
        <LogoScroller />
      </div>
      <div>
        <FormSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AnalyticsServicePage;
