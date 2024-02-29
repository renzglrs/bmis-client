import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Root from "./Pages/Root";
import Dashboard from "./Pages/Dashboard";
import UsersPage from "./Pages/UsersPage";
import RegisterPage from "./Pages/RegisterPage";
import ErrorPage from "./Pages/ErrorPage";
import { Flowbite } from 'flowbite-react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, Outlet } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element:  (
                  <>
                    <Root />
                    <Outlet />
                  </>
                ),
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/dashboard",
          element: <Dashboard />,
        },
        {
          path:"/users",
          element: <UsersPage />,
        }
      ]
    }
  ]);

  return (
    <>
      <Flowbite>
        <RouterProvider router={router} />
      </Flowbite>

    </>
  )
}

export default App;
