import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // for store
import { selectEmployee, setEmployees } from "../../redux/employeeSlice"; // for slice
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css";
import getAdminStaff from "../../actions/admin/getAdminStaff";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Footer/Footer";
import getSeniorTeam from "../../actions/seniorManagerTeamLogin/getSeniorTeam";
import deleteStaff from "../../actions/admin/deleteStaff";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [adminStaff, setAdminStaff] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employee.employees); // store se value le liya
  console.log("Employees::", employees); // All empoloyee hai
  const selectedEmployee = useSelector(
    (state) => state.employee.selectedEmployee
  ); // selected employee store se le liya

  console.log("Employee List Selected Employee::", selectedEmployee); // null hai isme

  // hit admin and senior api according to role..
  const getAdminStaffFunction = async () => {
    try {
      const userProfileData = JSON.parse(
        localStorage.getItem("profileDetails")
      );
      if (userProfileData.role === "admin") {
        const response = await getAdminStaff();
        if (response?.data?.code === 1000) {
          dispatch(setEmployees(response?.data?.staffs));
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
          dispatch(setEmployees(response?.data?.staffs));
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

  const deleteStaffs = async (id) => {
    try {
      console.log("staffId::", id);
      const response = await deleteStaff(id);
      if (response?.data?.code) {
        toast.success("Staff deleted Successfully");
        await getAdminStaffFunction();
      }
    } catch (error) {
      console.log("Error while deleting Staff", error);
    }
  };

  const handleEdit = (employee) => {
    console.log("Employee list me Data:::", employee);
    dispatch(selectEmployee(employee)); // Select the employee
    navigate("/dashboard/Employee"); // Navigate to edit page
  };

  useEffect(() => {
    getAdminStaffFunction();
  }, [dispatch]);

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
                          <td>{data?.role}</td>
                          <td>
                            <a href="#" onClick={() => handleEdit(data)}>
                              <i
                                className="fa fa-pencil-square-o"
                                style={{ fontSize: "20px", color: "#5dbcc8" }}
                              ></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a
                              href="#"
                              onClick={() => deleteStaffs(data?.staffId)}
                            >
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
      <ToastContainer />
    </div>
  );
};

export default EmployeeList;
