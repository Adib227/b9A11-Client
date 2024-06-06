import { Link } from 'react-router-dom';

const AllVolunteerDetailsHome = ({ alls }) => {
  const {
    thumbNail,
    postTitle,
    category,
    deadline,
    description,
    location,
    volunteerNeeded,
    _id,
  } = alls;

  console.log(alls);
  return (
    <>
      <div
        className="card lg:w-96 bg-base-100 shadow-xl my-12"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <figure className="p-5">
          <img src={thumbNail} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-start">Title : {postTitle}</h2>
          <p className="text-start">Category: {category}</p>
          <p className="text-start">
            {' '}
            Number of Volunteers needed : {volunteerNeeded}
          </p>
          <div className="card-actions">
            <Link to={`/detailss/${_id}`}>
              <button className="btn btn-primary w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllVolunteerDetailsHome;
