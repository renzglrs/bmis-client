import Root from "./Pages/Root";
import Dashboard from "./Pages/Dashboard";
import UsersPage from "./Pages/UsersPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ErrorPage from "./Pages/ErrorPage";

import { Flowbite } from 'flowbite-react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import { AuthProvider } from "../src/useAuth";


const App = () => {


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:  (
  //       <>
  //         <ProtectedRoute>
  //           <Root />
  //           <Outlet />
  //         </ProtectedRoute>
  //       </>
  //     ),
  //     errorElement: <ErrorPage />,
  //     children: [
  //       {
  //         path:"/dashboard",
  //         element: <Dashboard />
  //       },
  //       {
  //         path:"/users",
  //         element: <UsersPage />
  //       }
  //     ]
  //   },
  //   {
  //     path:"/register",
  //     element: <RegisterPage />,
  //   }
  // ]);

  return (
    <>

      {/* <Flowbite>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Flowbite> */}

      <Flowbite>
          <Router>
            <AuthProvider>
              <Routes>
                <Route 
                  element={
                    <>
                    {/* Enable User Authentication */}
                      {/* <ProtectedRoute>  */}
                        <Root /> 
                        <Outlet />
                      {/* </ProtectedRoute> */}
                    </>
                  } 
                >
                  <Route index element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<UsersPage />} />
                  <Route path="*" element={<ErrorPage />} />
                </Route>

                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </AuthProvider>
          </Router>
      </Flowbite>
    </>
  )
}

export default App;
