import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";

function PrivacyPolicyPage() {
    return (
        <div>
            <div>
                <div>
                    <BannerSection />
                </div>
                <div>
                    <div className="flex justify-center">
                        <p className="text-[20px] px-[15px] py-[5px] bg-[#f473a2] w-[180px] rounded-2xl text-[white] text-center">Privacy Policy</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 mb-[30px]">
                        <p className="text-[25px] md:text-[60px] leading-[32px] md:leading-[80px] font-medium">Thank You For <span className="text-[rgb(244,115,162)]">Choosing Us</span></p>
                        <p className="text-center text-[18px] leading-[32px] mt-[15px] md:px-[150px]">
                            This Privacy Policy outlines how we collect, use, disclose, and protect your information
                            when you use our services. By accessing or using our website, applications, or other
                            services, you agree to the terms of this Privacy Policy.
                        </p>
                    </div>
                    <div className="flex flex-col md:p-[30px] border border-[#f473a2] mx-[10px] md:m-[60px] rounded-xl font-light pb-[40px]">
                        <p className="text-[20px] md:text-[32px] uppercase text-center mt-[10px]">Information We Collect</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">1. Personal Information: </span>We collect personal information such as your name, email
                            address, and contact details when you use our services or interact with us.</p>
                        <p className="text-[18px]"><span className="text-[22px]">2. Usage Information:</span> We may collect information about how you use our website,
                            including pages visited, links clicked, and other browsing activities.</p>
                        <p className="text-[18px]"><span className="text-[22px]">3. Device Information:</span> We automatically collect information about the device you use
                            to access our services, including device type, operating system, and browser type.</p>
                    </div>
                    <div className="flex flex-col p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px]">
                        <p className="text-[20px] md:text-[32px] uppercase text-center mt-[10px]">How We Use Your Information</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">1. Providing Services: </span>We use your information to deliver and improve our services,
                            respond to inquiries, and provide customer support.</p>
                        <p className="text-[18px]"><span className="text-[22px]">2. Communication:</span> We may use your contact information to send you updates,
                            newsletters, or promotional materials. You can opt out of these communications at any
                            time.</p>
                        <p className="text-[18px]"><span className="text-[22px]">3. Analytics:</span> We analyze usage data to improve our website, services, and user
                            experience.</p>
                    </div>
                    <div className="flex flex-col p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px]">
                        <p className="text-[20px] md:text-[32px] uppercase text-center mt-[10px]">Information Sharing and Disclosure</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">1. Service Providers:</span> We may share your information with third-party service
                            providers who assist us in delivering and improving our services.</p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">2. Legal Compliance:</span> We may disclose your information if required by law or in
                            response to a valid legal request.</p>
                    </div>
                    <div className="flex flex-col p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px]">
                        <p className="text-[20px] md:text-[32px] uppercase text-center mt-[10px]">Cookies and Tracking Technologies</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">1. Cookies: </span>We use cookies and similar tracking technologies to enhance your
                            experience on our website.</p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">2. Third-Party Analytics:</span>We may use third-party analytics services to analyze how
                            users interact with our website.</p>
                    </div>
                    <div className="flex flex-col p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px]">
                        <p className="text-[20px] md:text-[32px] uppercase text-center mt-[10px]">Security</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">Data Security:</span> We implement reasonable security measures to protect your
                            information from unauthorized access and disclosure.</p>
                    </div>
                    <div className="flex flex-col p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px]">
                        <p className="text-[20px] md:text-[32px] uppercase text-center mt-[10px]">Your Choices</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">1. Opt-Out:</span> You can opt out of receiving promotional emails by following the
                            instructions provided in the email.</p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">2. Access and Correction:</span> You have the right to access and correct your personal
                            information. Contact us for assistance.</p>
                    </div>
                    <div className="flex flex-col p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px]">
                        <p className="text-[20px] md:text-[32px] uppercase text-center mt-[10px]">Changes to This Privacy Policy</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]"><span className="text-[22px]">Updates: </span>We may update this Privacy Policy to reflect changes in our practices.
                            Check this page for the latest information.</p>
                    </div>
                    <div className="flex flex-col p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px]">
                        <p className="text-[20px] md:text-[32px] uppercase text-center mt-[10px]">Contact Us</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]">If you have any questions or concerns about this Privacy Policy, please contact us
                            at connect@webeesketch.com</p>
                    </div>
                    <div  className="flex flex-col justify-center items-center mb-[30px]">
                        <p className="text-center text-[18px] md:text-[24px] leading-[32px] mt-[15px] px-[20px] md:px-[150px] uppercase">By using our services, you acknowledge that you have read and understood this Privacy
                            Policy.</p>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default PrivacyPolicyPage;