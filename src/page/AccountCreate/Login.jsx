import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

const Login = () => {

  const location = useLocation();
  const { signInUser, setUser, singWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSingIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const submitValue = { email, password };
    console.log(submitValue);

    signInUser(email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Login successful');
        
        // Redirect after login
        navigate(location?.state ? location.state : '/');
        
        // const user = { email: email };
        // axios.post('https://marathon-management-system-assignment-11.vercel.app/jwt', user, { withCredentials: true })
        //   .then(res => {
        //     console.log(res.data);
        //   });

      })
      .catch(error => {
        toast.error(error.code);
      });
  };

  const handleGoogleSingIn = () => {
    singWithGoogle()
      .then(result => {
        setUser(result.user);
        console.log(result.user)
        toast.success('Login successful');
        
        // Redirect after Google login
        navigate(location?.state ? location.state : '/');
        
        // const user = { email: result.user.email }; // Make sure to use the actual email from the result
        // axios.post('https://marathon-management-system-assignment-11.vercel.app/jwt', user, { withCredentials: true })
        //   .then(res => {
        //     console.log(res.data);
        //   });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen m-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSingIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email : </span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password : </span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning font-bold text-white">Login</button>
              <br />
              <div className='divider'>OR</div>
              <button onClick={handleGoogleSingIn} className="btn btn-success">
                <FcGoogle className='text-3xl' /> Sign in with Google
              </button>
            </div>
            <div>
              Don't have an account? <Link to={"/Register"} className='text-red-400'>Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
