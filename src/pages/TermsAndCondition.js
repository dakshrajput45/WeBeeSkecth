import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";


function TermsAndConditionPage() {
    return (
        <div>
            <div>
                <div>
                    <BannerSection />
                </div>
                <div>
                    <div className="flex justify-center">
                        <p className="text-[20px] px-[15px] py-[5px] bg-[#f473a2] w-[250px] rounded-2xl text-[white] text-center">Terms And Conditions</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5 mb-[30px]">
                        <p className="text-[25px] text-center md:text-[40px] leading-[32px] md:leading-[80px] font-medium">We are committed to protecting <span className="text-[rgb(244,115,162)]">your privacy</span></p>
                        <p className="text-center text-[18px] leading-[32px] mt-[15px] md:px-[150px] px-[20px]">
                            These Terms and Conditions (&quot;Terms&quot;) govern your use of the services provided by
                            Webee Sketch Consultancy. By accessing or using our website, applications, or other
                            services, you agree to be bound by these Terms. If you do not agree to these Terms,
                            please do not use our services.
                        </p>
                    </div>
                    <div className="flex flex-col p-[10px] md:p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px] ">
                        <p className="text-[24px] md:text-[32px] uppercase text-center mt-[30px]">Information Collected</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]">We may collect any or all of the information that you give us depending on the type of
                            transaction you enter into, including your name, address, telephone number, and email
                            address, together with data about your use of the website. Other information that may
                            be needed from time to time to process a request may also be collected as indicated on
                            the website.</p>
                    </div>
                    <div className="flex flex-col p-[10px] md:p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px] text-center">
                        <p className="text-[24px] md:text-[32px] uppercase text-center mt-[30px]">Information Use</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]">We use the information collected primarily to process the task for which you visited the
                            website. Data collected in the UK is held in accordance with the Data Protection Act. All
                            reasonable precautions are taken to prevent unauthorised access to this information.
                            This safeguard may require you to provide additional forms of identity should you wish
                            to obtain information about your account details.</p>
                    </div>
                    <div className="flex flex-col p-[10px] md:p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px] text-center">
                        <p className="text-[24px] md:text-[32px] uppercase text-center mt-[30px]">Cookies</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]">Your Internet browser has the in-built facility for storing small files – “cookies” – that hold
                            information which allows a website to recognise your account. Our website takes
                            advantage of this facility to enhance your experience. You have the ability to prevent
                            your computer from accepting cookies but, if you do, certain functionality on the website</p>
                    </div>
                    <div className="flex flex-col p-[10px] md:p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px] text-center">
                        <p className="text-[24px] md:text-[32px] uppercase text-center mt-[30px]">Disclosing Information</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]">We do not disclose any personal information obtained about you from this website to
                            third parties unless you permit us to do so by ticking the relevant boxes in registration or
                            competition forms. We may also use the information to keep in contact with you and
                            inform you of developments associated with us. You will be given the opportunity to
                            remove yourself from any mailing list or similar device. If at any time in the future we
                            should wish to disclose information collected on this website to any third party, it would
                            only be with your knowledge and consent. We may from time to time provide
                            information of a general nature to third parties – for example, the number of individuals
                            visiting our website or completing a registration form, but we will not use any information

                            that could identify those individuals. In addition Weebesketch Media may work with third
                            parties for the purpose of delivering targeted behavioural advertising to the
                            Weebesketch Media website. Through the use of cookies, anonymous information
                            about your use of our websites and other websites will be used to provide more relevant
                            adverts about goods and services of interest to you.</p>
                    </div><div className="flex flex-col p-[10px] md:p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px] text-center">
                        <p className="text-[24px] md:text-[32px] uppercase text-center mt-[30px]">Changes to this Policy</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]">Any changes to our Privacy Policy will be placed here and will supersede this version of
                            our policy. We will take reasonable steps to draw your attention to any changes in our
                            policy. However, to be on the safe side, we suggest that you read this document each
                            time you use the website to ensure that it still meets with your approval.</p>
                    </div><div className="flex flex-col p-[10px] md:p-[30px] border border-[#f473a2] mx-[10px] mt-[20px] md:m-[60px] rounded-xl font-light pb-[40px] text-center mb-[40px]">
                        <p className="text-[24px] md:text-[32px] uppercase text-center mt-[30px]">Contacting Us</p>
                        <p className="border border-gray-400 my-10 border-solid "></p>
                        <p className="text-[18px] mt-[20px]">If you have any questions about our Privacy Policy, or if you want to know what
                            information we have collected about you, please email us at
                            aksgupta@webeesketch.com. You can also correct any factual errors in that information
                            or require us to remove your details form any list under our control.</p>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div >
        </div>
    );
}
export default TermsAndConditionPage;