import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Login from "../page/AccountCreate/Login";
import Register from "../page/AccountCreate/Register";
import Marathon from "../page/Marathon/Marathon";
import Dashboard from "../page/Dashboard/Dashboard";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>This router not found</p>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path: "/Marathon",
            element: <Marathon></Marathon>
        },
        {
          path:"/Dashboard",
          element: <Dashboard></Dashboard>
        },
       
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/Register",
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router