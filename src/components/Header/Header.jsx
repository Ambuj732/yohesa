import React, { useState, useEffect } from "react";
import logo from "../dist/img/logo.png";
import "../dist/css/AdminLTE.css";
import "./Header.css";
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
import "../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "../bower_components/jquery/dist/jquery.min.js";
import "../bower_components/jquery-ui/jquery-ui.min.js";
import "../bower_components/bootstrap/dist/js/bootstrap.min.js";
import "../bower_components/raphael/raphael.min.js";
import "../bower_components/morris.js/morris.min.js";
import "../bower_components/jquery-sparkline/dist/jquery.sparkline.min.js";
import "../plugins/jvectormap/jquery-jvectormap-1.2.2.min.js";
import "../plugins/jvectormap/jquery-jvectormap-world-mill-en.js";
import "../bower_components/jquery-knob/dist/jquery.knob.min.js";
// import "../plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js";
// import "../bower_components/jquery-slimscroll/jquery.slimscroll.min.js";
import "../bower_components/fastclick/lib/fastclick.js";
import "../dist/js/adminlte.min.js";
// import "../dist/js/pages/dashboard.js";
import "../dist/js/demo.js";
// import "../bower_components/ckeditor/ckeditor.js";
import "../bower_components/datatables.net/js/jquery.dataTables.min.js";
import "../bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import logout from "../../actions/admin/logout.js";
import { ToastContainer, toast } from "react-toastify";

export default function Header() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    console.log("Toogle");
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const goProfile = () => {
    navigate("/dashboard/UserProfile");
  };

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response?.data?.code === 1000) {
        localStorage.removeItem("profileDetails");
        localStorage.removeItem("token");
        toast.success("Successfully logout");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log("Error while logout", error);
    }
  };

  const userProfile = JSON.parse(localStorage.getItem("profileDetails"));
  const role = userProfile.role;

  const capitalizeWords = (role) => {
    return role
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the array back into a single string
  };

  return (
    <>
      <div>
        <header className="main-header">
          <a href="index.php" className="logo" style={{ background: "#fff" }}>
            <span className="logo-mini">
              <b style={{ color: "black" }}>MING GROW</b>
            </span>
            <span className="logo-lg">
              <img
                src={logo}
                alt="logo"
                style={{ width: "150%", height: "auto" }}
              />
            </span>
          </a>

          <nav
            className="navbar navbar-static-top "
            style={{ background: "#14657d" }}
          >
            <a
              href="#"
              className="sidebar-toggle"
              data-toggle="push-menu"
              style={{ color: "white" }}
              // onClick={toggleSidebar}
              role="button"
            >
              <span className="sr-only">Toggle navigation</span>
            </a>

            <div
              className={`navbar-custom-menu ${
                sidebarCollapsed ? "sidebar-collapsed" : ""
              }`}
            >
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span className="" style={{ color: "white" }}>
                      {capitalizeWords(role)}
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-footer">
                      <div className="pull-left">
                        <a
                          href="#"
                          className="btn btn-default btn-flat"
                          onClick={goProfile}
                          style={{
                            backgroundColor: "#14657d",
                            color: "white",
                            borderRadius: "5px",
                            padding: "7px 30px",
                          }}
                        >
                          <i
                            // onClick={Profile}
                            className="fa fa-user"
                            style={{ marginRight: "5px" }}
                          ></i>{" "}
                          Profile
                        </a>
                      </div>
                      <div className="pull-right" onClick={handleLogout}>
                        <a
                          href="#"
                          className="btn btn-default btn-flat"
                          style={{
                            backgroundColor: "#14657d",
                            color: "white",
                            borderRadius: "5px",
                            padding: "7px 25px",
                          }}
                        >
                          <i
                            className="fa fa-sign-out"
                            style={{ marginRight: "5px" }}
                          ></i>{" "}
                          Sign out
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <ToastContainer />
      </div>
    </>
  );
}
