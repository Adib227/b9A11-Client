import { Link, useLoaderData } from 'react-router-dom';

const Detailss = () => {
  const detailed = useLoaderData();
  console.log(detailed);

  return (
    <div>
      <h1 className="animate__animated animate__bounceInLeft  text-4xl text-center font-bold text-cyan-600">
        Details Infotmation
      </h1>
      <div className=" ">
        <div
          className="my-12 max-w-7xl mx-auto bg-base-300 shadow-xl  grid md:grid lg:flex"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="w-full lg:w-1/2">
            <img
              className="mt-0 lg:mt-0 ml-0 lg:ml-0 p-4"
              src={detailed.thumbNail}
              alt=""
            />
          </div>
          <div className="card-body space-y-4">
            <h2 className="text-lg font-normal">
              Title:{' '}
              <span className="text-xl font-semibold">
                {detailed.postTitle}
              </span>
            </h2>
            <h2 className="text-lg font-normal">
              Category :
              <span className="text-xl font-bold">{detailed.category}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Description :{' '}
              <span className="text-xl font-semibold">
                {detailed.description}
              </span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Location :{' '}
              <span className="text-xl font-semibold">{detailed.location}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Number of Volunteer needed :{' '}
              <span className="text-xl font-semibold">
                {detailed.volunteerNeeded}
              </span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Deadline :{' '}
              <span className="text-xl font-semibold">{detailed.deadline}</span>
            </h2>

            <Link to="/">
              <button className="btn btn-success w-full mt-5">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailss;
