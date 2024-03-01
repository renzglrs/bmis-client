import Root from "./Pages/Root";
import Dashboard from "./Pages/Dashboard";
import UsersPage from "./Pages/UsersPage";
import RegisterPage from "./Pages/RegisterPage";
import ErrorPage from "./Pages/ErrorPage";
import { Flowbite } from 'flowbite-react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
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
          element: <Dashboard />
        },
        {
          path:"/users",
          element: <UsersPage />
        }
      ]
    },
    {
      path:"/register",
      element: <RegisterPage />,
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
