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
import AddMarathon from "../page/Dashboard/AnotherPage/AddMarathon";
import MyMarathonList from "../page/Dashboard/AnotherPage/MyMarathonList";
import MyApplyList from "../page/Dashboard/AnotherPage/MyApplyList";


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
          element: <PrivateRoute><MarathonDetails></MarathonDetails></PrivateRoute>
        },
        {
          path: "/marathon/reg/:id",
          element: <PrivateRoute><RegisterForm></RegisterForm></PrivateRoute>
        },
        {
          path:"/Dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            {
              path: "AddMarathon",
              element: <AddMarathon></AddMarathon>,
            },
            {
              path: "MyMarathonList",
              element: <MyMarathonList></MyMarathonList> 
            },
            {
              path: "MyApplyList",
              element: <MyApplyList></MyApplyList>
            },
          ]
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