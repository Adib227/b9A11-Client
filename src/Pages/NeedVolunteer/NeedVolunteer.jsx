import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import NeedVolunteerdetails from './NeedVolunteerdetails';

const NeedVolunteer = () => {
  const needVolunteer = useLoaderData();
  console.log(needVolunteer);

  return (
    <div>
      <Helmet>
        <title>Helpass - Need Volunteer</title>
      </Helmet>
      <h1>Need Volunteer?</h1>
      {needVolunteer.map(needs => (
        <NeedVolunteerdetails
          key={needs._id}
          needs={needs}
        ></NeedVolunteerdetails>
      ))}
    </div>
  );
};

export default NeedVolunteer;
