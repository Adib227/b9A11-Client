import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import 'animate.css';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // const { displayName, photoURL } = user;
  console.log(user);

  const handleLogOut = () => {
    logOut();
    alert('logged out successfully')
      .then(() => console.log('Logged out successfully'))
      .catch(error => console.error(error));
  };

  const navItems = (
    <>
      <li className="font-semibold font-serif">
        <Link to="/">Home </Link>
      </li>
      <li className="font-semibold font-serif">
        <Link to="/addVolunteer">Add Volunteer </Link>
      </li>
      <li className="font-semibold font-serif">
        <Link to="/allVolunteer">All Volunteer </Link>
      </li>

      {/* <li className="font-semibold font-serif">
        <Link to="/beAVolunteer">Be A Volunteer</Link>
      </li> */}
      <li className="font-semibold font-serif">
        <Link to="/needVolunteer">Need Volunteer</Link>
      </li>
      <li className="font-semibold font-serif">
        <Link to="/myPost">Manage My Post</Link>
      </li>
      <li className="font-semibold font-serif">
        <Link to="/contactUs">Contact Us</Link>
      </li>
    </>
  );

  const [theme, setTheme] = useState('light');
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100 my-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 animate__animated animate__fadeInDown"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex">
            <img
              className="animate__animated animate__backInRight"
              src="https://i.ibb.co/HhDJsrg/Screenshot-2024-06-04-023604.png"
              alt=""
            />
            <Link
              to="/"
              className="btn btn-ghost text-4xl font-bold animate__animated animate__backInRight"
            >
              Helpass
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 animate__animated animate__fadeInDown">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle mr-4"
          />

          {user ? (
            <>
              <tippy className=" text-black font-semibold p-4 rounded-lg">
                <div className="flex">
                  <div>
                    {' '}
                    <img
                      className="w-10 rounded-full"
                      alt=""
                      src={user.photoURL}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={`${user.displayName} || ${user.email}`}
                    />
                    <Tooltip id="my-tooltip"></Tooltip>
                  </div>
                </div>
              </tippy>
              <tippy
                id="signOut"
                content="Please Sign Out"
                className="text-black font-semibold rounded-lg p-3"
              >
                <button
                  onClick={handleLogOut}
                  className="btn btn-active  animate__animated animate__backInLeft"
                >
                  Sign Out
                </button>
              </tippy>
            </>
          ) : (
            <Link to="/login">
              <tippy
                content="Please Login"
                className="text-black font-bold rounded-lg p-3"
              >
                <button className="btn btn-active  animate__animated animate__backInLeft">
                  Login
                </button>
              </tippy>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
