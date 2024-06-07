import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import AllVolunteerDetails from './AllVolunteerDetails';

const AllVolunteer = () => {
  const all = useLoaderData();
  console.log(all);

  return (
    <div>
      {' '}
      <Helmet>
        <title>Helpass - All Volunteer</title>
      </Helmet>
      <div className="text-5xl text-center font-bold my-12 text-purple-500 animate__animated animate__fadeInDown">
        All Projects
      </div>
      {all.map(alls => (
        <AllVolunteerDetails key={alls._id} alls={alls}></AllVolunteerDetails>
      ))}
      <div className="text-center text-3xl my-28">
        Need Volunteer?{' '}
        <span>
          <Link to="/needVolunteer">
            <button className="btn text-teal-400">Click here</button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AllVolunteer;
