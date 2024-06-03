import 'animate.css';

const ExtraTwo = () => {
  return (
    <div
      className="grid lg:flex max-w-full justify-evenly p-10 lg:p-24 my8 lg:my-16"
      data-aos="zoom-in"
      data-aos-duration="1300"
    >
      <div className="p-8 lg:p-24" data-aos="zoom-in" data-aos-duration="1300">
        <p className="text-[#ef7c40] text-2xl">- OUR VOLUNTEER -</p>
        <h2 className="text-[#1e3446] text-4xl font-serif font-bold my-3">
          {' '}
          Meet The Expert <br /> Team Of Volunteer.
        </h2>
        <button className="btn bg-[#8072db] text-white my-5 rounded-full w-48 ">
          Discover More
        </button>
      </div>
      <div className="grid lg:flex bg-[#f2fefb] rounded-full p-14 space-y-5 lg:space-y-0 space-x-0 lg:space-x-6">
        <img src="https://i.ibb.co/gyRZJ5W/1-44b9543453d2cf8f875b.png" alt="" />
        <img src="https://i.ibb.co/WkwXxqN/3-1ee175cb644d1a334c36.png" alt="" />
        <img src="https://i.ibb.co/0jgZ1C4/2-b674d193c0684ca65621.png" alt="" />
      </div>
    </div>
  );
};

export default ExtraTwo;
