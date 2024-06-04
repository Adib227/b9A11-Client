import 'animate.css';

const ExtraOne = () => {
  return (
    <div className="bg-[#fff9ed] my-7 lg:my-24 p-3 lg:p-9">
      <div className="py-6 ">
        <h2
          className="text-2xl text-[#ef7c40] text-center font-medium"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          - Happy Volunteer -
        </h2>
        <h1
          className="text-4xl lg:text-5xl text-[#1e3446] text-center font-semibold "
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          Our Happy Volunteer
        </h1>
      </div>
      <div
        className="grid lg:flex max-w-6xl mx-auto rounded-3xl shadow-xl bg-white my-10 p-10 justify-evenly"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="w-full lg:w-1/6">
          <img
            src="https://i.ibb.co/gyRZJ5W/1-44b9543453d2cf8f875b.png"
            alt=""
          />
        </div>
        <div className="w-full lg:w-4/6 ">
          <p className="text-[#6a6a6a] font-medium my-6 lg:my-0">
            Raminsa Asbare has been a remarkable asset to our company,
            consistently demonstrating exceptional dedication and enthusiasm.
            His innovative ideas and proactive approach have significantly
            enhanced our community outreach initiatives. We greatly appreciate
            his invaluable contributions and unwavering commitment.
          </p>
          <div className=" mt-0 lg:mt-5">
            <p className="text-[#1e3446] text-2xl font-semibold">
              Raminsa Asbare
            </p>
            <p className="text-[#d6547d] text-xl font-semibold">
              Lead Volunteer
            </p>
          </div>
        </div>
      </div>
      <div
        className="grid lg:flex max-w-6xl mx-auto rounded-3xl shadow-xl bg-white my-10 p-10 justify-evenly"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className="w-full lg:w-1/6">
          <img
            src="https://i.ibb.co/WkwXxqN/3-1ee175cb644d1a334c36.png"
            alt=""
          />
        </div>
        <div className="w-full lg:w-4/6">
          <p className="text-[#6a6a6a] font-medium my-6 lg:my-0">
            Edwards has been a remarkable asset to our company, consistently
            demonstrating exceptional dedication and enthusiasm. His innovative
            ideas and proactive approach have significantly enhanced our
            community outreach initiatives. We greatly appreciate his invaluable
            contributions and unwavering commitment.
          </p>
          <div className="mt-0 lg:mt-5">
            <p className="text-[#1e3446] text-2xl font-semibold">Edwards</p>
            <p className="text-[#d6547d] text-xl font-semibold">
              Lead Volunteer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraOne;
