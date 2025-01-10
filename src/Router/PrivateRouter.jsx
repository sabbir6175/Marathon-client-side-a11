import React, {useContext } from 'react';

import { Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading place-content-center loading-bars loading-lg"></span>
    }
    if(user && user?.email){
        return children
    }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;