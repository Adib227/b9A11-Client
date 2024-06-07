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
      <h1 className="text-5xl mt-10 text-center font-bold text-rose-300">
        Opportunity to become Volunteer!
      </h1>
      <p className="text-center text-xl font-medium mt-4 mb-8">
        Tap the button below and join our team as a volunteer
      </p>
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
