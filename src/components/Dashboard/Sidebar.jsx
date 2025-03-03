import React, { useState } from "react";
import "../dist/css/AdminLTE.css";
import userImage from "../dist/img/user2-160x160.jpg";
import "../bower_components/Ionicons/css/ionicons.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/Ionicons/css/ionicons.min.css";
import "../dist/css/AdminLTE.min.css";
import "../dist/css/skins/_all-skins.min.css";
import "../bower_components/morris.js/morris.css";
import "../bower_components/jvectormap/jquery-jvectormap.css";
import "../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css";
import Header from "../Header/Header";
import AdminDashboard from "./AdminDashbord";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (menuName) => {
    setActiveMenu((prevActiveMenu) =>
      prevActiveMenu === menuName ? null : menuName
    );
  };
  const goAddRolePage = () => {
    console.log("Hii");
    navigate("/dashboard/addRole");
  };

  const goRoleList = () => {
    navigate("/dashboard/roleList");
  };

  const goAddApplication = () => {
    navigate("/dashboard/Application");
  };

  const goAddEmployee = () => {
    navigate("/dashboard/Employee");
  };
  const goListEmployee = () => {
    navigate("/dashboard/ListEmployee");
  };
  const goToAdminPage = () => {
    navigate("/dashboard");
  };
  const goTerm = () => {
    navigate("/dashboard/Term&Condition");
  };
  const goPrivacyPolicy = () => {
    navigate("/dashboard/policy");
  };
  const goAbouts = () => {
    navigate("/dashboard/about");
  };
  const goSettings = () => {
    navigate("/dashboard/setting");
  };
  const goUploadDump = () => {
    navigate("/dashboard/uploaddump");
  };
  const goAddCategory = () => {
    navigate("/dashboard/addcategory");
  };
  const goCategoryList = () => {
    navigate("/dashboard/categorylist");
  };
  const goAddSubCategory = () => {
    navigate("/dashboard/Addsubcategory");
  };
  const goSubCategoryList = () => {
    navigate("/dashboard/subcategorylist");
  };
  const goAddProduct = () => {
    navigate("/dashboard/addproduct");
  };
  const goProductList = () => {
    navigate("/dashboard/productlist");
  };
  const goCategoryLoan = () => {
    navigate("/dashboard/categoryloan");
  };
  const goCategoryLoanList = () => {
    navigate("/dashboard/categoryloanlist");
  };
  const goEnquiry = () => {
    navigate("/dashboard/enquiry");
  };
  const goSeniorManager = () => {
    navigate("/dashboard/seniormanager");
  };
  const goManager = () => {
    navigate("/dashboard/manager");
  };
  const goTeamLeader = () => {
    navigate("/dashboard/teamleader");
  };
  const goTeleCaller = () => {
    navigate("/dashboard/telecaller");
  };
  const goApplyList = () => {
    navigate("/dashboard/applylist");
  };
  const goIciciBank = () => {
    navigate("/dashboard/icicibank");
  };
  const goSbiBank = () => {
    navigate("/dashboard/sbibank");
  };
  const goAmericanExpress = () => {
    navigate("/dashboard/americanexpress");
  };
  const goStandardBank = () => {
    navigate("/dashboard/standardbank");
  };
  const goYesBank = () => {
    navigate("/dashboard/yesbank");
  };
  const goKotakMahindra = () => {
    navigate("/dashboard/kotakmahindra");
  };

  const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));
  const role = profileDetails.role;
  const name = profileDetails.firstName + " " + profileDetails.lastName;

  const capitalizeWords = (role) => {
    return role
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the array back into a single string
  };
  return (
    <>
      <Header />
      <div>
        <aside
          className="main-sidebar"
          style={{
            background: "#14657d",

            // height: "930px",
          }}
        >
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img src={userImage} className="img-circle" alt="User" />
              </div>
              <div className="pull-left info" style={{ color: "white" }}>
                <p> {capitalizeWords(name)}</p>
                <a href="#">
                  <i className="fa fa-circle text-success"></i>{" "}
                  <span style={{ color: "white", font: "10px" }}>Online</span>
                </a>
              </div>
            </div>

            <ul className="sidebar-menu" data-widget="tree">
              <li
                className={`menu-item treeview ${
                  activeMenu === "dashboard" ? "active" : ""
                }`}
              >
                <a href="#" onClick={goToAdminPage} style={{ color: "white" }}>
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                  <i className="fa  pull-right"></i>
                </a>
              </li>
              {profileDetails.role === "admin" && (
                <li
                  className={`menu-item treeview ${
                    activeMenu === "user" ? "active" : ""
                  }`}
                >
                  <a
                    href="#"
                    onClick={() => handleMenuClick("user")}
                    style={{ color: "white" }}
                  >
                    <i className="fa fa-user-o"></i>
                    <span>Role Management</span>
                    <i className="fa fa-angle-left pull-right"></i>
                  </a>
                  {activeMenu === "user" && (
                    <ul className="treeview-menu" style={{ color: "white" }}>
                      <li className="" onClick={goAddRolePage}>
                        <a href="" style={{ color: "white" }}>
                          <i className="fa fa-circle-o"></i> Add Role
                        </a>
                      </li>
                      <li onClick={goRoleList}>
                        <a href="#" style={{ color: "white" }}>
                          <i className="fa fa-circle-o"></i> Role List
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              )}

              <li
                className={`menu-item treeview ${
                  activeMenu === "wallet" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("wallet")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-edge"></i>{" "}
                  <span>Employee Management</span>
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                {activeMenu === "wallet" && (
                  <ul className="treeview-menu">
                    <li onClick={goAddEmployee}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i> Add Employee
                      </a>
                    </li>
                    <li onClick={goListEmployee}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i> Employee List
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "import" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("import")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-user-o"></i>
                  <span>Import Application</span>
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                {activeMenu === "import" && (
                  <ul className="treeview-menu">
                    <li className="" onClick={goAddApplication}>
                      <a href="" style={{ color: "#fff" }}>
                        <i className="fa fa-circle-o"></i> Add Application
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              {/* <li
                className="header"
                style={{ color: "white", fontSize: "15px" }}
              >
                Credit Card
              </li> */}
              {/* <li
                className={`menu-item treeview ${
                  activeMenu === "Category" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("Category")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-bars"></i> <span>Category</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "Category" && (
                  <ul className="treeview-menu">
                    <li>
                      <a
                        href="#"
                        onClick={goAddCategory}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Add Category
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goCategoryList}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Category List
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`menu-item treeview ${
                  activeMenu === "Credit" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("Credit")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-credit-card-alt"></i>{" "}
                  <span>Credit Card Form</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "Credit" && (
                  <ul className="treeview-menu">
                    <li>
                      <a
                        href="#"
                        onClick={goIciciBank}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Icici Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goSbiBank}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>SBI Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goAmericanExpress}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>American Express
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goStandardBank}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Standard Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goYesBank}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Yes Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goKotakMahindra}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Kotak Mahindra Bank
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="header"
                style={{ color: "white", fontSize: "15px" }}
              >
                Loan
              </li>
              <li
                className={`menu-item treeview ${
                  activeMenu === "loan" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("loan")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-bars"></i> <span>Category</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "loan" && (
                  <ul className="treeview-menu">
                    <li>
                      <a
                        href="#"
                        onClick={goCategoryLoan}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Add Loan Category
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goCategoryLoanList}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Category Loan List
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "subCategory" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("subCategory")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-sliders"></i> <span>Sub Category</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "subCategory" && (
                  <ul className="treeview-menu">
                    <li>
                      <a
                        href="#"
                        onClick={goAddSubCategory}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Add Sub Category
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goSubCategoryList}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i>Sub Category List
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "course" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("course")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-btc"></i> <span>Product</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "course" && (
                  <ul className="treeview-menu">
                    <li>
                      <a
                        href="#"
                        onClick={goAddProduct}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i> Add Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={goProductList}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-circle-o"></i> Product LIST
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`menu-item treeview ${
                  activeMenu === "updum" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("updum")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-upload"></i> <span>UploadDump</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "updum" && (
                  <ul className="treeview-menu">
                    <li>
                      <a
                        href="#"
                        onClick={goUploadDump}
                        style={{ color: "#fff" }}
                      >
                        <i className="fa fa-circle-o"></i>Add Upload
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "frontCMS" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("frontCMS")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-free-code-camp"></i>{" "}
                  <span> Permission</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "frontCMS" && (
                  <ul className="treeview-menu">
                    <li>
                      <a href="#" style={{ color: "#fff" }}>
                        <i className="fa fa-circle-o"></i>Permission
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "Abouts" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("Abouts")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-podcast"></i> <span>Abouts</span>
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                {activeMenu === "Abouts" && (
                  <ul className="treeview-menu">
                    <li onClick={goAbouts}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>Abouts
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "Policy" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("Policy")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-product-hunt"></i>{" "}
                  <span>PrivacyPolicy</span>
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                {activeMenu === "Policy" && (
                  <ul className="treeview-menu">
                    <li onClick={goPrivacyPolicy}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>PrivacyPolicy
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "condis" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("condis")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-thermometer-three-quarters"></i>{" "}
                  <span>Term & Conditions</span>
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                {activeMenu === "condis" && (
                  <ul className="treeview-menu">
                    <li onClick={goTerm}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>Term & Conditions
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "enquiry" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("enquiry")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-expand"></i> <span>Enquiry</span>
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                {activeMenu === "enquiry" && (
                  <ul className="treeview-menu">
                    <li onClick={goEnquiry}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>Enquiry
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "setting" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("setting")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-cogs"></i> <span>Setting</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "setting" && (
                  <ul className="treeview-menu">
                    <li onClick={goSettings}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>Setting
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="header"
                style={{ color: "white", fontSize: "15px" }}
              >
                Creat Team
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "Senior" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("Senior")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-user-circle"></i>{" "}
                  <span>Senior Manager</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "Senior" && (
                  <ul className="treeview-menu">
                    <li onClick={goSeniorManager}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>List
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "manager" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("manager")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-user-circle"></i> <span>Manager</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "manager" && (
                  <ul className="treeview-menu">
                    <li onClick={goManager}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>List
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "leader" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("leader")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-user-circle"></i> <span>Team Leader</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "leader" && (
                  <ul className="treeview-menu">
                    <li onClick={goTeamLeader}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>List
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "telecaller" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("telecaller")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-user-circle"></i> <span>Tele Caller</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "telecaller" && (
                  <ul className="treeview-menu">
                    <li onClick={goTeleCaller}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i>List
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="header"
                style={{ color: "white", fontSize: "15px" }}
              >
                Office Employee
              </li>

              <li
                className={`menu-item treeview ${
                  activeMenu === "Apply" ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => handleMenuClick("Apply")}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-id-card"></i>{" "}
                  <span>Apply Credit Card</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                {activeMenu === "Apply" && (
                  <ul className="treeview-menu">
                    <li onClick={goApplyList}>
                      <a href="#" style={{ color: "white" }}>
                        <i className="fa fa-circle-o"></i> Apply List
                      </a>
                    </li>
                  </ul>
                )}
              </li> */}
            </ul>
          </section>
        </aside>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default Sidebar;
