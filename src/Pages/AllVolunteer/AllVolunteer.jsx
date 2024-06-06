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
