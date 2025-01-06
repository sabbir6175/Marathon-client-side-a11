import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {

  
  const {createUser, setUser, updateUserProfile,singWithGoogle} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState('')


  const handleRegister =(e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const register = {name, photo, email, password}
    console.log(register)

    if(password.length < 6){
      setErrorMessage('password should be 6 characters or longer')
      return;
    }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;

    if(!regex.test(password)){
        setErrorMessage('At least one uppercase , one lowercase , one special characters')
        return;
    }


      createUser(email, password)
        .then((result) => {
          setUser(result.user);
          toast.success("user create successfully", {
            position: "top-center",
          });
          updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
              Navigate("/");
            })
            .catch((error) => {
              setErrorMessage(error, {
                position: "top-center",
              });
            });
        })
        .catch((error) => {
          toast.warning(error.message, {
            position: "top-center",
          });
        });
    };

    const handleGoogleSingIn=() =>{
      singWithGoogle()
        .then(result => {
            setUser(result.user)
            toast.success('login successfully')
            Navigate('/')
        })
        .catch(error => {
            toast.error(error.code) 
        })
    }




    return (
        <div>
           <div className="hero bg-base-200 min-h-screen m-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create Account</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name : </span>
                </label>
                <input type=" text" name='name' placeholder="Enter your name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL : </span>
                </label>
                <input type='URL' name='photo' placeholder="Provide your photo url" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email : </span>
                </label>
                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password : </span>
                </label>
                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                
              </div>
              {
                errorMessage && <p className="text-red-400">{errorMessage}</p>
              }
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
                <br />
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSingIn} className="btn  btn-success"><FcGoogle className='text-3xl' /> Sing with google</button>
              </div>
             <div>
                You have any account. <Link to={"/login"} className='text-red-400'>Login Now</Link>
             </div>
            </form>
          </div>
        </div>
         </div>
        </div>
    );
};

export default Register;