import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Helpass - 404</title>
        </Helmet>
        <section className="flex items-center h-full lg:p-16 dark:bg-gray-200 dark:text-gray-800 m-16">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className=" text-center">
              <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                <img src="https://i.ibb.co/7zSqKzb/error.png" alt="" />
                {/* <span className="sr-only">Error</span>404 */}
              </h2>
              <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 dark:text-gray-600">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link to="/">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="btn px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                >
                  Back to homepage
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
