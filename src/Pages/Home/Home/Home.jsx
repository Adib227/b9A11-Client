import { Helmet } from 'react-helmet';
import { Banner } from '../Banner/Banner';
import ExtraOne from '../ExtraOne/ExtraOne';
import ExtraTwo from '../ExtraTwo/ExtraTwo';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Helpass - Home</title>
      </Helmet>
      <Banner></Banner>
      <ExtraTwo></ExtraTwo>
      <ExtraOne></ExtraOne>
    </div>
  );
};

export default Home;
