import Sidebar from "./components/Dashboard/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
import AdminDashbord from "./components/Dashboard/AdminDashbord.jsx";
import LoginPage from "./components/loginscreen/loginPage.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Sidebar />
      <AdminDashbord />
      <LoginPage /> */}
      <Outlet />
    </div>
  );
}

export default App;
