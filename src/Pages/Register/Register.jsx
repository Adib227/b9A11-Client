import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet';
import 'animate.css';

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password should contain 6 characters');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        'Your password should contain at least one uppercase character'
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        'Your password should contain at least one lowercase character'
      );
      return;
    }

    registerUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title></title>
      </Helmet>{' '}
      <div>
        <div className="hero max-w-6xl mx-auto min-h-screen bg-base-200 my-12 rounded-lg">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl mb-8 font-bold  animate__animated animate__fadeInDownBig ">
                Register now!
              </h1>
            </div>
            <div className="card shrink-0 w-full lg:w-[700px] max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />

                  <div className="w-3">
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                {registerError && (
                  <p className="text-red-500 mx-auto"> {registerError} </p>
                )}
                {success && <p className="text-green-500"> {success}</p>}
                <p>
                  Already have account? Please
                  <Link className="text-green-600 ml-2" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
