import imgBanner from "../assets/avatar.png";
import bottomArrow from "../assets/DownArrow.png";
import border from "../assets/ellipse.png";

const Banner = () => {
  return (
    <section className="relative flex flex-col md:flex-row text-white bg-[#10051e] p-4 md:p-0">
      <div className="flex justify-center items-center w-[200px] h-[200px] md:w-[380px] md:h-[380px] rounded-full bg-[radial-gradient(circle,rgba(66,30,113,1)_26%,rgba(40,16,76,0)_65%)] transform mx-auto md:mx-0 md:-ml-24 mt-12 md:mt-24 z-0">
        <div className="flex justify-center items-center w-[120px] h-[120px] md:w-[250px] md:h-[250px] rounded-full bg-[radial-gradient(circle,rgba(181,170,193,1)_10%,rgba(40,17,77,0)_65%)] z-0">
          <img
            src={imgBanner}
            alt="imgBanner"
            width={150}
            height={150}
            className="-translate-y-2"
          />
        </div>
      </div>
      <img
        src={bottomArrow}
        alt="Hero"
        className="hidden md:block absolute top-[88px] left-28"
      />
      <div className="mt-8 md:mt-[105px] md:-ml-14 text-center md:text-left">
        <h3 className="text-lg md:text-xl -ml-3">
          Hello! I am{" "}
          <span className="text-[#7127BA] font-semibold">Ibrahim Momen</span>
        </h3>
        <div className="mt-6 md:mt-[68px]">
          <h3 className="text-lg md:text-xl underline">A Designer who</h3>
          <div>
            <h1 className="text-3xl md:text-5xl mt-2">
              Judges a book <br /> by its{" "}
              <span className="relative text-[#7127BA]">
                cover{" "}
                <img
                  src={border}
                  alt="border"
                  className="absolute top-1 right-1"
                />
              </span>
              <span>...</span>
            </h1>
            <p className="text-xs text-gray-300 mt-3">
              Because if the cover does not impress you, what else can?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;