import { SiGoogledocs } from "react-icons/si";
import { BsFillSendCheckFill } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
import CardService from "../components/CardService";

function AnalyticsService() {
  const points = [
    "- Less than a dozen developers - inHouse team and temporary contractors who want to and can work asynchronously",
    "- Completely greenfield project - no single line of code has been written yet. Requirements are vague, but they already started shaping into something",
    "- Tech-wise - the clear need for a backend that should talk with mobile clients",
    "- Some simple web frontend - static pages should be enough! (nope)",
  ];

  const cardServices = [
    {
      icon: <SiGoogledocs />,
      title: "Collect Doc",
      text: "We collect required documents and send them for check",
    },
    {
      icon: <BsFillSendCheckFill />,
      title: "Check & Finalize",
      text: "We check the document and send it for final approval",
    },
    {
      icon: <FcApproval />,
      title: "Approve",
      text: "After approval, you'll be ready to use your software",
    },
  ];
  return (
    <div className="font-medium">
      <div >
        <p className="text-[60px] mb-[30px] font-medium leading-[72px]">
          Discover Your Data's Destiny
        </p>
        <p className="text-[18px] mb-5 leading-[32px]">
          The Tech side of startups can sometimes be very fluid and contain a
          lot of unknowns. What tech stack to use? Which components might be
          overkill for now but worth keeping an eye on in the future? How to
          balance the pace of business features development while keeping the
          quality bar high enough to have a maintainable codebase?
        </p>
        <p className="text-[18px] mb-[55px] leading-[32px]">
          Here I want to share our experience building from the ground up — how
          we shaped our processes based on needs and how our processes how we
          shaped our evolved as we extended our tech stack with new components.
        </p>
      </div>
      <div>
        <img
          src="https://marketi-html.vercel.app/marketi-demo/assets/images/service/service-details-image1.jpg"
          alt="img"
          className="mb-[60px]"
        />
      </div>
      <div>
        <div>
          <p className="text-[28px] mb-[20px] leading-[32px]">
            Start Shaping the Process
          </p>
          <p className="text-[18px] mb-[25px] leading-[32px]">
            What we have at the start:
          </p>
          <div >
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
          <p className="mb-[30px] text-[18px] leading-[32px]">
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
            Our Simple Roadmap
          </p>
          <p className="mb-[50px] text-[18px] leading-[32px]">
            Nowadays, the choice of frameworks is really wide, but again, due to
            some experience with Flutter, we decided to give it a go. Within
            mobile development, one of the important aspects to better decide on
            is state management.
          </p>
        </div>
        <p className="border border-gray-400 mb-[50px] border-solid"></p>
      </div>
      <div className="flex lg:flex-row flex-col justify-evenly">
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
      <div class="bg-white shadow-lg mx-auto mb-[60px] p-[15px] border border-solid border-gray-400 rounded-xl">
        <p class="text-[20px] sm:text-[28px] leading-[32px] mb-8">
          “I am genuinely thrilled by the current fusion of technologies
          reshaping digital marketing. The integration of data analytics, AI and
          automation is revolutionizing our approach.”
        </p>
        <div class="flex items-center  mt-[30px]">
          <div class="mr-5">
            <img
              src="https://marketi-html.vercel.app/marketi-demo/assets/images/service/service-details-user.png"
              alt="img"
              class="w-24 h-24 rounded-full"
            />
          </div>
          <div>
            <p class="text-18">Willamson Hussy</p>
            <p class="text-16">CEO of Kingtech</p>
          </div>
        </div>
      </div>
      <div className="leading-[32px]">
        <p className="text-[28px] mb-[20px]">How Did We Get Into Terraform?</p>
        <p className="text-[18px] mb-[20px]">
          The backend, a part of the DB, also should have some object/file
          storage. Sooner or later, we also should have DNS so that our services
          are ready to play with the big cruel world.
        </p>
        <p className="text-[18px] mb-[20px]">
          The choice of cloud provider was purely based on existing expertise
          within the team. We already use AWS for other projects, so we decided
          to stick with it. For sure, it is possible to do everything in the AWS
          console, but as times go, things become a classic big ball of AWS
          console, but as times go, mud that everyone is terrified to touch, and
          no one remembers why this bit exists at all.
        </p>
        <p className="text-[18px]">
          Our approach to choosing with whom we work activities to try the most
          promising one chosen by features, supported languages, and, in the
          case of providers, pricing.
        </p>
      </div>
    </div>
  );
}
export default AnalyticsService;
