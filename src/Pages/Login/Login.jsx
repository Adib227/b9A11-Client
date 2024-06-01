import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const { newUser, signInWithGoogle } = useContext(AuthContext);
  console.log(newUser);
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        alert('Logged in successfully');
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    newUser(email, password)
      .then(result => {
        console.log(result.user);
        alert('Logged in successfully');
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUser(null);
        alert('Signed Out successfully');
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title></title>
      </Helmet>
      <div className="hero max-w-6xl mx-auto min-h-screen bg-base-200 my-12 rounded-lg">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-8">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full lg:w-[600px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                New here? Please
                <Link className="text-green-600 ml-2" to="/register">
                  Register
                </Link>
              </p>

              {}

              {user ? (
                <button onClick={handleSignOut} className="btn btn-secondary">
                  Sign Out
                </button>
              ) : (
                <div>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-accent w-full"
                  >
                    Sign in with Google
                    <img
                      className="w-6 h-6"
                      src="https://i.ibb.co/tcXrSXm/Google-G-logo-svg.webp"
                      alt=""
                    />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
