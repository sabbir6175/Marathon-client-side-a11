import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Login from "../page/AccountCreate/Login";
import Register from "../page/AccountCreate/Register";
import Marathon from "../page/Marathon/Marathon";
import Dashboard from "../page/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRouter";
import MarathonDetails from "../page/Marathon/MarathonDetails";
import RegisterForm from "../page/Marathon/RegisterForm";


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
          path: "/marathon/:id",
          element: <PrivateRoute><MarathonDetails></MarathonDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/AddMarathon/${params.id}`)
        },
        {
          path: "registerFrom/:id",
          element: <PrivateRoute><RegisterForm></RegisterForm></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/AddMarathon/${params.id}`)
        },
        {
          path:"/Dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
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