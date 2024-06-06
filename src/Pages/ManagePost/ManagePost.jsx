import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManagePost = ({ list, posts, setPosts }) => {
  const { _id, postTitle, category, deadline } = list;

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://localhost:5000/adds/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your post has been deleted.',
                icon: 'success',
              });
              const remaining = posts.filter(spot => spot._id !== _id);
              setPosts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Helpass - Manage My Post</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="max-w-7xl mx-auto  text-xs">
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">ID #</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Deadline</th>
              <th className="p-3 text-center">Update</th>
              <th className="p-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
              <td className="p-3 w-96">
                <p className="text-lg  font-medium">{_id}</p>
              </td>
              <td className="p-3 w-96">
                <p className="text-xl font-semibold">{postTitle}</p>
              </td>
              <td className="p-3 w-96">
                <p className="text-lg font-normal">{category}</p>
                {/* <p className="dark:text-gray-600">Friday</p> */}
              </td>
              <td className="p-3 w-80">
                <p className="text-lg font-normal">{deadline}</p>
                {/* <p className="dark:text-gray-600">Tuesday</p> */}
              </td>
              <td className="p-3 text-center">
                <Link to={`/updatePage/${_id}`}>
                  <button className="btn bg-blue-600 text-white">Update</button>
                </Link>
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-red-600 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePost;
