import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import 'animate.css';
import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const AddVolunteer = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleAddForm = event => {
    event.preventDefault();
    const form = event.target;
    const thumbNail = form.thumbNail.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteerNeeded = form.volunteerNeeded.value;
    const newVolunteer = {
      thumbNail,
      postTitle,
      description,
      category,
      location,
      volunteerNeeded,
    };
    console.log(newVolunteer);

    fetch('http://localhost:5000/adds', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newVolunteer),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  const handleClick = () => {
    {
      Swal.fire({
        title: 'Success!',
        text: 'Post Added Successfully',
        icon: 'success',
        confirmButtonText: 'Thank you',
      });
    }
  };
  console.log(handleClick);

  return (
    <div>
      <Helmet>
        <title>Helpass - Add Volunteer</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center text-pink-400 mb-6 animate__animated animate__fadeInDown">
        Add Volunteer
      </h1>
      <section className="p-6 rounded-xl shadow-lg mb-20 dark:bg-base-200 dark:text-gray-900 max-w-7xl mx-auto animate__animated animate__fadeInUp">
        <form
          onSubmit={handleAddForm}
          noValidate=""
          action=""
          className="max-w-full container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md text-center shadow-sm dark:bg-base-200">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
              <div className="col-span-full sm:col-span-3 items-center text-left mb-4">
                <label htmlFor="thumbnail" className="font-medium">
                  Thumbnail
                </label>
                <input
                  // id="thumbnail"
                  type="text"
                  name="thumbNail"
                  className="w-full h-full rounded-xl dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="postTitle" className="font-medium">
                  Post Title
                </label>
                <input
                  // id="postTitle"
                  type="text"
                  name="postTitle"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="description" className="font-medium">
                  Description
                </label>
                <input
                  // id="description"
                  type="text"
                  name="description"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="category" className="font-medium">
                  Category
                </label>
                <input
                  // id="category"
                  type="text"
                  name="category"
                  placeholder=""
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="location" className="font-medium">
                  Location
                </label>
                <input
                  // id="location"
                  type="text"
                  name="location"
                  placeholder=""
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="volunteerNeeded" className="font-medium">
                  No. of volunteers needed
                </label>
                <input
                  // id="volunteerNeeded"
                  type="text"
                  name="volunteerNeeded"
                  placeholder=""
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="deadline" className="font-medium ">
                  Deadline
                </label>
                {/* <input
                  id="deadline"
                  type="text"
                  placeholder=""
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                /> */}
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="dd/mm/yyyy"
                />
              </div>
              {user ? (
                <>
                  <div className="col-span-full sm:col-span-6 text-left mb-4">
                    <label htmlFor="name" className="font-medium">
                      Name
                    </label>
                    <input
                      // id="name"
                      type="text"
                      name="name"
                      defaultValue={user.displayName}
                      className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6 text-left mb-4">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      // id="email"
                      type="email"
                      name="email"
                      defaultValue={user.email}
                      className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                </>
              ) : (
                <>
                  {' '}
                  <div className="col-span-full sm:col-span-6 text-left mb-4">
                    <label htmlFor="name" className="font-medium">
                      Name
                    </label>
                    <input
                      // id="name"
                      type="text"
                      name="name"
                      placeholder=""
                      className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6 text-left mb-4">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      // id="email"
                      type="email"
                      name="email"
                      placeholder=""
                      className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                </>
              )}
              <div className="col-span-full sm:col-span-6 my-4">
                <button
                  onClick={handleClick}
                  className="btn btn-success w-full"
                >
                  Add Post
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddVolunteer;
