import experience1 from "../assets/ep1.png";
import experience2 from "../assets/ep2.png";
import experience3 from "../assets/ep3.png";
import experience4 from "../assets/ep4.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      experienceImg: experience1,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      buttonContent: {
        title: "Learn More",
        link: "#",
      },
      cardBgColor: "",
    },
    {
      id: 2,
      experienceImg: experience2,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      buttonContent: {
        title: "Learn More",
        link: "#",
      },
      cardBgColor: "",
    },
    {
      id: 3,
      experienceImg: experience3,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      buttonContent: {
        title: "Learn More",
        link: "#",
      },
      cardBgColor: "",
    },
    {
      id: 4,
      experienceImg: experience4,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      buttonContent: {
        title: "Learn More",
        link: "#",
      },
      cardBgColor: "",
    },
  ];

  return (
    <section className="relative py-10 md:py-20 lg:py-28 px-3 lg:px-0">
      <h1 className="text-2xl lg:text-4xl">Work Experience</h1>
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 lg:mt-14 font-roboto">
        {experience.map((item) => (
          <div
            key={item.id}
            className="z-10 flex gap-5 bg-gradient-to-r from-[#130428] to-[#30115B] rounded-xl p-8 border-t-4 border-[#4F228D]"
          >
            <div className="w-[115px]">
              <img
                src={item.experienceImg}
                alt="Experience"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-1 pt-3">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-[8px] w-[230px]">{item.description}</p>
              <a
                className="bg-[#2C1250] uppercase text-[8px] mt-1 w-28 flex justify-center items-center border border-[#693B93] rounded-lg py-2"
                href={item.buttonContent.link}
              >
                {item.buttonContent.title}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(117,60,171,0.9)_0%,rgba(42,18,80,1)_48%,rgba(30,12,59,1)_59%,rgba(25,10,51,1)_63%,rgba(25,10,50,0.05)_70%)] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
    </section>
  );
};

export default Experience;