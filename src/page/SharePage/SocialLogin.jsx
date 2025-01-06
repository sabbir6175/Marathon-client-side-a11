// import { useContext } from "react";

// import { Navigate } from "react-router-dom";
// import AuthContext from "../../Context/AuthContext/AuthContext";



// const SocialLogin = () => {
//     const { singWithGoogle } = useContext(AuthContext)
//     const handleSingInGoogle =()=>{
//         singWithGoogle()
//             .then(result => {
//                 console.log(result.user)
//                 Navigate('/')
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
//     return (
//         <div className="mx-5 mb-3">
//             <div className="divider">OR</div>
//             <button onClick={handleSingInGoogle} className="btn btn-warning w-full"> Google</button>
//         </div>
//     );
// };

// export default SocialLogin;