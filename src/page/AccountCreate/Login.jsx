import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

  const location = useLocation()
  const {signInUser , setUser, singWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleSingIn = (e)=>{
          e.preventDefault()


          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          const submitValue = {email, password}
          console.log(submitValue)  
          signInUser(email, password)
            .then(result => {
              setUser(result.user)
              toast.success('login successfully')
              navigate(location?.state? location.state : '/')
            })
            .catch(error=>{
                toast.error(error.code) 
            })
    }
    const hanldeGoogleSingIn = () => {
      singWithGoogle()
        .then(result => {
            setUser(result.user)
            toast.success('login successfully')
            Navigate('/')
        })
        .catch(error => {
            toast.error(error.message) 
        })
    }


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
                <button className="btn btn-primary">Login</button>
                <br />
                <div className='divider'>OR</div>
                <button onClick={hanldeGoogleSingIn} className="btn btn-success"> <FcGoogle className='text-3xl' /> Sing with google</button>
              </div>
             <div>
                 Don't have any account.<Link to={"/Register"} className='text-red-400'>create account</Link>
             </div>
            </form>
          </div>
        </div>
         </div>
    );
};

export default Login;