import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
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
    </div>
  );
};

export default AllVolunteer;
