import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import { Flowbite } from 'flowbite-react';
import RegisterPage from "./Pages/RegisterPage";

const App = () => {

  return (
    <>
      <Flowbite>
        <Navbar />
        <Sidebar />
        <Dashboard />
        {/* <RegisterPage /> */}
      </Flowbite>
    </>
  )
}

export default App;
