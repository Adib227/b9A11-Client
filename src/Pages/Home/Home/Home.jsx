import { Helmet } from 'react-helmet';
import { Banner } from '../Banner/Banner';
import ExtraOne from '../ExtraOne/ExtraOne';
import ExtraTwo from '../ExtraTwo/ExtraTwo';
import { Link, useLoaderData } from 'react-router-dom';
import AllVolunteerDetailsHome from '../../AllVolunteer/AllVolunteerDetailsHome';

const Home = () => {
  const home = useLoaderData();
  console.log(home);

  return (
    <div>
      <Helmet>
        <title>Helpass - Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="grid lg:grid-cols-3 mx-auto max-w-7xl gap-9">
        {' '}
        {home.map(alls => (
          <AllVolunteerDetailsHome
            key={alls._id}
            alls={alls}
          ></AllVolunteerDetailsHome>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/allVolunteer">
          {' '}
          <button className="btn btn-outline btn-secondary w-56 text-xl ">
            See All
          </button>
        </Link>
      </div>
      <ExtraTwo></ExtraTwo>
      <ExtraOne></ExtraOne>
    </div>
  );
};

export default Home;
