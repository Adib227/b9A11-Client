import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center p-12 animate__animated animate__fadeInDown">
        CONTACT US
      </h1>
      <div className="grid lg:flex max-w-full mx-auto justify-evenly">
        <Helmet>
          <title>Helpass - Contact Us</title>
        </Helmet>
        <div className="space-y-6 animate__animated animate__backInLeft">
          <h1 className="text-2xl">Contact Information</h1>
          <div className="flex">
            <FontAwesomeIcon className="p-4" icon={faMap} />
            <p>
              Stock Building, 125 Main Street <br /> 1st Lane, San Francisco,
              USA
            </p>
          </div>
          <div className="flex">
            <FontAwesomeIcon className="p-4" icon={faPhone} />
            <p>
              (001) 24568 365 987 <br />
              (001) 65897 569 784
            </p>
          </div>
          <div className="flex">
            <FontAwesomeIcon className="p-4" icon={faEnvelope} />
            <p>
              info@example.com <br />
              info@example.com
            </p>
          </div>
        </div>
        <div className="animate__animated animate__backInRight">
          <h1 className="text-2xl">Leave Your Message</h1>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="yourname" className="">
                  Your Name
                </label>
                <input
                  id="yourname"
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-2 p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="youremail" className="">
                  Your Email
                </label>
                <input
                  id="youremail"
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-2 p-2"
                />
              </div>
              <div className="col-span-full pt-4">
                <label htmlFor="message" className="">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-2 p-3"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
              <div className="col-span-full">
                <button className="btn btn-accent my-6">Send Message</button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
