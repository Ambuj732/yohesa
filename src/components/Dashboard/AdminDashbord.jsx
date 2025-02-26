import React, { useState, useEffect } from "react";
import group from "../dist/img/group.png";
import wallet from "../dist/img/wallet.png";
import receptionist from "../dist/img/receptionist.png";
import appDevelopment from "../dist/img/app-development.png";
import category from "../dist/img/category.png";
import folder from "../dist/img/folder.png";
import application from "../dist/img/application.png";
import exam from "../dist/img/exam.png";
import lecture from "../dist/img/lecture.png";
import information from "../dist/img/information.png";
import Privacy from "../dist/img/Privacy.png";
import term from "../dist/img/term.png";
import upload from "../dist/img/upload.png";
import { useNavigate } from "react-router-dom";
import getRoles from "../../actions/getRoles";
import getAdminStaff from "../../actions/admin/getAdminStaff";
import { ToastContainer, toast } from "react-toastify";
import getSeniorTeam from "../../actions/seniorManagerTeamLogin/getSeniorTeam";

const AdminDashboard = () => {
  const [clock, setClock] = useState("");
  const [role, setRoles] = useState([]);
  const [adminStaff, setAdminStaff] = useState([]);
  const userProfile = JSON.parse(localStorage.getItem("profileDetails"));

  const getRolesHandler = async () => {
    const userProfile = JSON.parse(localStorage.getItem("profileDetails"));
    if (userProfile.role === "admin") {
      const response = await getRoles();
      console.log(response);
      if (response?.data?.code === 1000) {
        setRoles(response?.data?.roles);
        toast.success("Roles fetched Successfully");
      }
    }
  };

  const getAdminStaffFunction = async () => {
    try {
      const userProfileData = JSON.parse(
        localStorage.getItem("profileDetails")
      );
      if (userProfileData.role === "admin") {
        const response = await getAdminStaff();
        if (response?.data?.code === 1000) {
          setAdminStaff(response?.data?.staffs);
          toast.success("Admin Employee fetched Successfully");
        } else if (response?.data?.code === 1001) {
          setAdminStaff(response?.data?.staffs);
          toast.error("Access denied. Only admins can perform this action");
        }
      }
      if (userProfileData.role === "senior manager") {
        const response = await getSeniorTeam();
        if (response?.data?.code === 1000) {
          setAdminStaff(response?.data?.staffs);
          toast.success("Senior Manger Employee fetched Successfully");
        } else if (response?.data?.code === 1001) {
          setAdminStaff(response?.data?.staffs);
          toast.error(
            "Access denied. Only Senior Manger can perform this action"
          );
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAdminStaffFunction();
    getRolesHandler();
  }, []);

  const navigate = useNavigate();

  const goAdminDashbord = () => {
    navigate("/dashboard/Dashbord");
  };

  useEffect(() => {
    // Set interval to update clock every second
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setClock(currentTime);
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));
  const roles = profileDetails.role;

  const capitalizeWords = (role) => {
    return role
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the array back into a single string
  };
  return (
    <div className="content-wrapper">
      {profileDetails?.role && (
        <section className="content-header">
          <h1> {`Welcome to ${capitalizeWords(roles)} Dashboard`}</h1>
        </section>
      )}

      <section className="content">
        <div className="row">
          {userProfile?.role === "admin" && (
            <div className="col-lg-3 col-xs-6">
              <div
                className="small-box"
                style={{
                  borderRadius: "10px",
                  background: "#008B8B",
                  color: "white",
                  boxShadow: "0px 0px 10px 0px #14657d",
                  border: "3px solid black",
                }}
              >
                <div className="inner">
                  <h3>{userProfile.role === "admin" ? role.length : 0}</h3>
                  <p>Role</p>
                </div>
                <div className="icon">
                  <img
                    src={group}
                    alt=""
                    style={{ width: "100px", height: "auto" }}
                  />
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          )}
          <div className="col-lg-3 col-xs-6">
            <div
              className="small-box"
              style={{
                borderRadius: "10px",
                background: "#e67e22",
                color: "white",
                boxShadow: "0px 0px 10px 0px #14657d",
                border: "3px solid black",
              }}
            >
              <div className="inner">
                <h3>
                  {userProfile.role === "admin"
                    ? adminStaff.length
                    : userProfile.role === "senior manager"
                    ? adminStaff.length
                    : 0}
                </h3>
                <p>Employee</p>
              </div>
              <div className="icon">
                <img
                  src={wallet}
                  alt=""
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          {/* <div className="col-lg-3 col-xs-6">
            <div
              className="small-box"
              style={{
                borderRadius: "10px",
                background: "#3498db",
                color: "white",
                boxShadow: "0px 0px 10px 0px #14657d",
                border: "3px solid black",
              }}
            >
              <div className="inner">
                <h3>0</h3>
                <p>Application</p>
              </div>
              <div className="icon">
                <img
                  src={receptionist}
                  alt=""
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-xs-6">
            <div
              className="small-box"
              style={{
                borderRadius: "10px",
                background: "#58d68d",
                color: "white",
                boxShadow: "0px 0px 10px 0px #14657d",
                border: "3px solid black",
              }}
            >
              <div className="inner">
                <h3>0</h3>
                <p>Category</p>
              </div>
              <div className="icon">
                <img
                  src={lecture}
                  alt=""
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-xs-6">
            <div
              className="small-box"
              style={{
                borderRadius: "10px",
                background: "#4B6F44",
                color: "white",
                boxShadow: "0px 0px 10px 0px #14657d",
                border: "3px solid black",
              }}
            >
              <div className="inner">
                <h3>0</h3>
                <p>Sub Category</p>
              </div>
              <div className="icon">
                <img
                  src={category}
                  alt=""
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div> */}

          {box.map((box) => (
            <div className="col-lg-3 col-xs-6">
              <div className="small-box" style={box.style}>
                <div className="inner">
                  <div className="clock2">{clock}</div>
                </div>
                <div className="icon"></div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const boxes = [
  {
    label: "Role",
    img: group,
    style: {
      borderRadius: "10px",
      background: "#008B8B",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Employee",
    img: wallet,
    style: {
      borderRadius: "10px",
      background: "#e67e22",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Application",
    img: receptionist,
    style: {
      borderRadius: "10px",
      background: "#3498db",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Category",
    img: lecture,
    style: {
      borderRadius: "10px",
      background: "#58d68d",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Sub  Category",
    img: category,
    style: {
      borderRadius: "10px",
      background: "#4B6F44",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Product",
    img: folder,
    style: {
      borderRadius: "10px",
      background: "#9F2B68",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Upload",
    img: upload,
    style: {
      borderRadius: "10px",
      background: "#9932CC",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Permission",
    img: exam,
    style: {
      borderRadius: "10px",
      background: "#6F4E37",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Abouts",
    img: information,
    style: {
      borderRadius: "10px",
      background: "#b03a2e",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "PrivacyPolicy",
    img: Privacy,
    style: {
      borderRadius: "10px",
      background: "#0000FF",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Term&Condition",
    img: term,
    style: {
      borderRadius: "10px",
      background: "#FF0000",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
  {
    label: "Setting",
    img: appDevelopment,
    style: {
      borderRadius: "10px",
      background: "#00FF00",
      color: "white",
      boxShadow: "0px 0px 10px 0px #14657d",
      border: "3px solid black",
    },
  },
];

const box = [
  // {
  //   label: "User",
  //   img: group,
  //   style: {
  //     borderRadius: "10px",
  //     background: "#fb1a0a",
  //     color: "white",
  //     boxShadow: "0px 0px 10px 0px #14657d",
  //     border: "3px solid black",
  //   },
  // },
];

export default AdminDashboard;
