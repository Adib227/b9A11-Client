import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div>
      {' '}
      <h1 className="animate__animated animate__bounceInLeft  text-4xl text-center font-bold text-cyan-600">
        Details Infotmation
      </h1>
      <div>
        <div
          className="my-12 max-w-7xl mx-auto bg-base-300 shadow-xl grid md:grid lg:flex"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="w-full lg:w-1/2">
            <img
              className="mt-0 lg:mt-0 ml-0 lg:ml-0 p-4"
              src={details.thumbnail}
              alt=""
            />
          </div>
          <div className="card-body">
            <h2 className="text-lg font-normal">
              Category :
              <span className="text-xl font-bold">{details.category}</span>
            </h2>
            <h2 className="text-lg font-normal">
              Title:{' '}
              <span className="text-xl font-semibold">
                {details.post_title}
              </span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Deadline :{' '}
              <span className="text-xl font-semibold">{details.deadline}</span>
            </h2>
            {/* <h2 className="text-lg font-normal">
              {' '}
              Seasonality :{' '}
              <span className="text-xl font-semibold">
                {details.seasonality}
              </span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Total visitor per year :{' '}
              <span className="text-xl font-semibold">{details.visitor}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Travel time :{' '}
              <span className="text-xl font-semibold">{details.time}</span>
            </h2>
            <h2 className="text-lg font-normal">
              {' '}
              Travel time :{' '}
              <span className="text-xl font-semibold">{details.location}</span>
            </h2>
            <h2 className="text-lg font-normal">
              Average Cost :{' '}
              <span className="text-xl font-semibold">{details.cost}</span>
            </h2> */}
            <Link to="/">
              <button className="btn btn-success w-full">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
