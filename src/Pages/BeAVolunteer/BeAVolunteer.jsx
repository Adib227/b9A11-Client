import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const BeAVolunteer = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [isReadOnly, setIsReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setIsReadOnly(!isReadOnly);
  };

  const add = useLoaderData();
  const { thumbnail, post_title, deadline, description, category, _id } = add;
  console.log(add);

  const handleAddVolunteer = event => {
    event.preventDefault();
    const form = event.target;
    const thumbnail = form.thumbnail.value;
    const post_title = form.post_title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const deadline = form.deadline.value;
    const volunteerNeeded = form.volunteerNeeded.value;
    const addedVolunteer = {
      thumbnail,
      post_title,
      description,
      category,
      location,
      deadline,
      volunteerNeeded,
    };
    console.log(addedVolunteer);

    fetch(`http://localhost:5000/needs/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addedVolunteer),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  const handleAdd = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Volunteer Added Successfully',
      icon: 'success',
      confirmButtonText: 'Thank you',
    });
  };
  console.log(handleAdd);

  return (
    <div>
      <Helmet>
        <title>Helpass - Be A Volunteer</title>
      </Helmet>
      <div className="text-5xl font-bold text-center mb-12 animate__animated animate__fadeInDown ">
        Be A Volunteer
      </div>
      <section className="p-6 rounded-xl shadow-lg mb-20 dark:bg-base-200 dark:text-gray-900 max-w-7xl mx-auto animate__animated animate__fadeInUp">
        <form
          onSubmit={handleAddVolunteer}
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
                  id="thumbnail"
                  type="text"
                  name="thumbnail"
                  defaultValue={thumbnail}
                  readOnly
                  className="w-full h-full rounded-xl dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="postTitle" className="font-medium">
                  Post Title
                </label>
                <input
                  id="postTitle"
                  type="text"
                  name="postTitle"
                  defaultValue={post_title}
                  readOnly
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="description" className="font-medium">
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  value="Join us and experience a wonderful journey and a create moment for lifetime."
                  readOnly
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="category" className="font-medium">
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  name="category"
                  defaultValue={category}
                  readOnly
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              {/* <div className="col-span-full sm:col-span-3 text-left mb-4">
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
              </div> */}
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
                      readOnly
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
                      readOnly
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
              <div className="col-span-full sm:col-span-6 text-left mb-4">
                <label htmlFor="name" className="font-medium">
                  Your Name
                </label>
                <input
                  // id="name"
                  type="text"
                  name="name"
                  placeholder="your name"
                  required
                  // defaultValue={user.displayName}
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-6 text-left mb-4">
                <label htmlFor="email" className="font-medium">
                  Your Email
                </label>
                <input
                  // id="email"
                  type="email"
                  name="email"
                  placeholder="your email"
                  required
                  // defaultValue={user.email}

                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="volunteerNeeded" className="font-medium">
                  Suggetion
                </label>
                <input
                  // id="volunteerNeeded"
                  type="text"
                  name="suggetion"
                  placeholder=""
                  required
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 text-left mb-4">
                <label htmlFor="volunteerNeeded" className="font-medium">
                  Status
                </label>
                <input
                  // id="volunteerNeeded"
                  type="text"
                  name="status"
                  value="requested"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-6 my-4">
                <button onClick={handleAdd} className="btn btn-success w-full">
                  Request
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default BeAVolunteer;
