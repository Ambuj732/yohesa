import React from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AddRole from "./components/Dashboard/AddRole.jsx";
import Sidebar from "./components/Dashboard/Sidebar.jsx";
import SignUp from "./components/Loginscreen/SignUp.jsx";
import LoginPage from "./components/Loginscreen/LoginPage.jsx";
import Profile from "./components/Dashboard/Profile.jsx";
import RoleList from "./components/Dashboard/RoleList.jsx";
import ImportApplication from "./components/Dashboard/ImportApplication.jsx";
import AddEmployee from "./components/Dashboard/AddEmployee.jsx";
import EmployeeList from "./components/Dashboard/EmployeeList.jsx";
import SidebarHome from "./Pages/SidebarHome.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashbord.jsx";
import Accordion from "./components/Dashboard/Accordion.jsx";
// import TermConditoin from "./components/Dashboard/TermCandition.jsx";
// import Abouts from "./components/Dashboard/Abouts.jsx";
// import Settings from "./components/Dashboard/Settings.jsx";
// import UploadDump from "./components/Dashboard/Uploaddump.jsx";
// import AddCategory from "./components/Dashboard/AddCategory.jsx";
// import CategoryList from "./components/Dashboard/CategoryList.jsx";
// import AddSubCategory from "./components/Dashboard/AddSubCategory.jsx";
// import SubCategoryList from "./components/Dashboard/SubCategoryList.jsx";
// import AddProduct from "./components/Dashboard/AddProduct.jsx";
// import ProductList from "./components/Dashboard/ProductList.jsx";
// import Editor from "./components/TextEditor/Editor.jsx";
// import Faq from "./components/Dashboard/faq.jsx";
// import CategoryLoan from "./components/Dashboard/CategoryLoan.jsx";
// import CategoryLoanList from "./components/Dashboard/CategoryLoanList.jsx";
// import Enquiry from "./components/Dashboard/Enquiry.jsx";
import SeniorManager from "./components/RoleManager/SeniorManager.jsx";
import AdminLoginPage from "./components/Loginscreen/AdminLoginPage.jsx";
// import Manager from "./components/RoleManager/Manager.jsx";
// import TeamLeader from "./components/RoleManager/TeamLeader.jsx";
// import TeleCaller from "./components/RoleManager/Telecaller.jsx";
// import ApplyList from "./components/RoleManager/ApplyList.jsx";
// import IciciBank from "./components/CreditCardForm/IciciBank.jsx";
// import SbiBank from "./components/CreditCardForm/SbiBank.jsx";
// import AmericanExpress from "./components/CreditCardForm/AmericanExpress.jsx";
// import StandarBank from "./components/CreditCardForm/StandardBank.jsx";
// import YesBank from "./components/CreditCardForm/YesBank.jsx";
// import KotakMahindra from "./components/CreditCardForm/KotakMahindra.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/admin/login" element={<AdminLoginPage />}></Route>
      <Route path="/admin/signup" element={<SignUp />}></Route>
      <Route path="/dashboard" element={<SidebarHome />}>
        <Route path="/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/dashboard/AccordionRole" element={<Accordion />}></Route>
        <Route path="/dashboard/addRole" element={<AddRole />}></Route>
        <Route path="/dashboard/roleList" element={<RoleList />}></Route>
        <Route path="/dashboard/UserProfile" element={<Profile />}></Route>
        <Route path="/dashboard/Employee" element={<AddEmployee />}></Route>
        {/* <Route path="/dashboard/about" element={<Abouts />}></Route> */}
        {/* <Route path="/dashboard/setting" element={<Settings />}></Route>
        <Route path="/dashboard/uploaddump" element={<UploadDump />}></Route>
        <Route path="/dashboard/addcategory" element={<AddCategory />}></Route>
        <Route path="/dashboard/addproduct" element={<AddProduct />}></Route>
        <Route path="/dashboard/productlist" element={<ProductList />}></Route>
        <Route path="/dashboard/editor" element={<Editor />}></Route>
        <Route path="/dashboard/faq" element={<Faq />}></Route>
        <Route path="/dashboard/enquiry" element={<Enquiry />}></Route>
        <Route path="/dashboard/manager" element={<Manager />}></Route>
        <Route path="/dashboard/teamleader" element={<TeamLeader />}></Route>
        <Route path="/dashboard/telecaller" element={<TeleCaller />}></Route>
        <Route path="/dashboard/applylist" element={<ApplyList />}></Route>
        <Route path="/dashboard/icicibank" element={<IciciBank />}></Route>
        <Route path="/dashboard/sbibank" element={<SbiBank />}></Route>
        <Route path="/dashboard/standardbank" element={<StandarBank />}></Route>
        <Route path="/dashboard/yesbank" element={<YesBank />}></Route> */}
        {/* <Route
          path="/dashboard/kotakmahindra"
          element={<KotakMahindra />}
        ></Route> */}
        {/* <Route
          path="/dashboard/americanexpress"
          element={<AmericanExpress />}
        ></Route> */}
        <Route
          path="/dashboard/seniormanager"
          element={<SeniorManager />}
        ></Route>
        {/* <Route
          path="/dashboard/categoryloan"
          element={<CategoryLoan />}
        ></Route> */}
        {/* <Route
          path="/dashboard/categoryloanlist"
          element={<CategoryLoanList />}
        ></Route> */}
        {/* <Route
          path="/dashboard/addsubcategory"
          element={<AddSubCategory />}
        ></Route> */}
        {/* <Route
          path="/dashboard/subcategorylist"
          element={<SubCategoryList />}
        ></Route> */}
        {/* <Route
          path="/dashboard/categorylist"
          element={<CategoryList />}
        ></Route> */}
        {/* <Route
          path="/dashboard/Term&Condition"
          element={<TermConditoin />}
        ></Route> */}

        <Route
          path="/dashboard/ListEmployee"
          element={<EmployeeList />}
        ></Route>
        <Route
          path="/dashboard/Application"
          element={<ImportApplication />}
        ></Route>
      </Route>
    </Route>
  )
);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
