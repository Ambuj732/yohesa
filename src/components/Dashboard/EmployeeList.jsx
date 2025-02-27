import React, { useState, useEffect } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css";
import getAdminStaff from "../../actions/admin/getAdminStaff";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Footer/Footer";
import getSeniorTeam from "../../actions/seniorManagerTeamLogin/getSeniorTeam";
const EmployeeList = () => {
  const [adminStaff, setAdminStaff] = useState([]);

  // hit admin and senior api according to role..
  const getAdminStaffFunction = async () => {
    try {
      const userProfileData = JSON.parse(
        localStorage.getItem("profileDetails")
      );
      if (userProfileData.role === "admin") {
        const response = await getAdminStaff();
        if (response?.data?.code === 1000) {
          setAdminStaff(response?.data?.staffs);
          toast.success("Admin Staff fetched Successfully");
        } else if (response?.data?.code === 1001) {
          setAdminStaff(response?.data?.staffs);
          toast.error("Access denied. Only admins can perform this action");
        }
      }
      if (userProfileData.role === "senior manager") {
        const response = await getSeniorTeam();
        if (response?.data?.code === 1000) {
          setAdminStaff(response?.data?.staffs);
          toast.success("Senior Manger Staff fetched Successfully");
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
  }, []);

  // useEffect(() => {
  //   const table = $("#example1").DataTable({
  //     paging: true,
  //     searching: true,
  //     ordering: true,
  //     info: true,
  //     autoWidth: false,
  //   });

  //   // Cleanup to destroy DataTable instance on component unmount
  //   return () => {
  //     table.destroy();
  //   };
  // }, []);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Employee List</h1>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-body table-responsive">
                <table
                  id="example1"
                  className="table table-bordered table-striped table-responsive"
                >
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Staff ID</th>
                      <th>Mobile Number</th>
                      <th>Email Address</th>
                      <th>Date of Birth</th>
                      <th>Date of Joining</th>
                      <th>Gender</th>
                      <th>Picture</th>
                      <th>Assign Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminStaff &&
                      adminStaff?.map((data, index) => (
                        <tr key={index}>
                          <td>{data.firstName}</td>
                          <td>{data.lastName}</td>
                          <td>{data.staffId}</td>
                          <td>{data.mobile}</td>
                          <td>{data.email}</td>
                          <td>{data.dob}</td>
                          <td>{data.doj}</td>
                          <td>{data.gender}</td>
                          <td>
                            <img
                              src={data.picture}
                              alt="Profile"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </td>
                          <td>{data.role}</td>
                          <td>
                            <a href="#">
                              <i
                                className="fa fa-pencil-square-o"
                                style={{ fontSize: "20px", color: "#5dbcc8" }}
                              ></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="#">
                              <i
                                className="fa fa-trash"
                                style={{ fontSize: "20px", color: "red" }}
                              ></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeList;
