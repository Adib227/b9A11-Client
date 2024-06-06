import React from 'react';
import { Link } from 'react-router-dom';

const AllVolunteerDetails = ({ alls }) => {
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
    <div>
      {' '}
      <div
        className="grid lg:col-span-3"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="card grid lg:flex card-side max-w-5xl mx-auto bg-base-100 shadow-xl">
          <figure className="sm:w-full lg:w-1/2 p-8">
            <img className="rounded-xl" src={thumbNail} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Title : {postTitle}</h2>
            <p className="text-2xl">Category: {category}</p>
            <p className="text-2xl">Deadline: {deadline}</p>
            <p className="text-2xl">
              Number of Volunteers needed : {volunteerNeeded}
            </p>
            <div className="card-actions">
              <Link to={`/detailss/${_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteerDetails;
