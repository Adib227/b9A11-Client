import { Link } from 'react-router-dom';

const NeedVolunteerdetails = ({ needs }) => {
  const {
    thumbnail,
    post_title,
    category,
    deadline,

    _id,
  } = needs;

  return (
    <div>
      <div className="card grid lg:flex card-side max-w-5xl mx-auto bg-base-100 shadow-xl">
        <figure className="sm:w-full lg:w-1/2 p-8">
          <img className="rounded-xl" src={thumbnail} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Title : {post_title}</h2>
          <p className="text-2xl">Category: {category}</p>
          <p className="text-2xl">Deadline: {deadline}</p>
          <div className="card-actions">
            <Link to={`/beAVolunteer/${_id}`}>
              <button className="btn btn-primary">Be A Volunteer</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerdetails;
