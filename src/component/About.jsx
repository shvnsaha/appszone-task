import { TiSocialFacebook } from "react-icons/ti";

const About = () => {
  return (
    <div className="py-5 px-4 lg:px-0 text-center lg:text-left">
      <div className="space-y-2">
        <h1 className="text-3xl lg:text-5xl">I'm a Software Engineer.|</h1>
        <h4 className="text-lg sm:text-xl flex flex-col sm:flex-row justify-center lg:justify-start items-center">
          <span className="mb-1 sm:mb-0 sm:mr-2">
            Currently, I'm a Software Engineer at
          </span>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="flex items-center"
          >
            <TiSocialFacebook className="bg-[#1877f2] mr-1 rounded-full" />
            <span className="text-[#1769d8] font-medium">
              Facebook<span className="text-white">,</span>
            </span>
          </a>
        </h4>
      </div>
      <p className="mt-10 sm:mt-14 text-base sm:text-lg leading-relaxed">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. <br className="hidden lg:block" />
        I make meaningful and delightful digital products that create an
        equilibrium <br className="hidden lg:block" />
        between user needs and business goals.
      </p>
    </div>
  );
};

export default About;