import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEmployee } from "../../redux/employeeSlice";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import getRoles from "../../actions/getRoles";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import addTeam from "../../actions/admin/addTeam";
import addSeniorTeam from "../../actions/seniorManagerTeamLogin/addSeniorTeam";
import editAdminStaff from "../../actions/admin/editAdminStaff";

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors },
  } = useForm();
  const [role, setRoles] = useState([]);
  const [assignRole, setAssignRole] = useState("");
  const dispatch = useDispatch();
  const selectedEmployee = useSelector(
    (state) => state.employee.selectedEmployee
  );
  console.log("Selected Employee:::", selectedEmployee); // selected  Employee aa rahe hain.

  // Populate Fields for Editing
  useEffect(() => {
    if (selectedEmployee) {
      setValue("firstName", selectedEmployee.firstName);
      setValue("lastName", selectedEmployee.lastName);
      setValue("userId", selectedEmployee.userId);
      setValue("phoneNumber", selectedEmployee.mobile);
      setValue("email", selectedEmployee.email);
      setValue("dob", selectedEmployee.dob);
      setValue("doj", selectedEmployee.doj);
      setValue("gender", selectedEmployee.gender);
      setValue("password", selectedEmployee.password);
      setValue("confirmPassword", selectedEmployee.confirmPassword);
      setAssignRole(selectedEmployee.role);
    }
  }, [selectedEmployee, setValue]);

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      userId: "",
      phoneNumber: "",
      email: "",
      dob: "",
      doj: "",
      gender: "",
      password: "",
      confirmPassword: "",
    });
  };

  const addTeamHandler = async (formData) => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("profileDetails"));
      console.log("userProfile::", userProfile);
      const data = {
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        userId: formData?.userId,
        mobile: formData?.phoneNumber,
        email: formData?.email,
        dob: formData?.dob,
        doj: formData?.doj,
        gender: formData?.gender,
        password: formData?.password,
        confirmPassword: formData?.confirmPassword,
        role: assignRole,
      };
      let response;
      if (selectedEmployee) {
        response = await dispatch(
          editAdminStaff(data, selectedEmployee.staffId)
        );
        if (response?.data?.code === 1000) {
          resetForm();
          toast.success("Admin Team Memeber Edit Successfully");
        }
        if (response?.data?.code === 1001) {
          toast.success("Password and Confirm Password do not match");
        }
      } else {
        if (userProfile?.role === "admin") {
          const response = await addTeam(data);
          console.log(response);
          if (response?.data?.code === 1000) {
            toast.success("TeamMember is created Successfully");
            resetForm();
            toast.success(response?.data?.email);
          } else if (response?.data?.code === 1001) {
            toast.error("Admin Team member did not create");
            toast.error(response?.data?.error);
          }
        } else if (userProfile?.role === "senior manager") {
          const response = await addSeniorTeam(data);
          console.log(response);
          if (response?.data?.code === 1000) {
            resetForm();
            toast.success("TeamMember is created Successfully");
            toast.success(response?.data?.email);
          } else if (response?.data?.status === 1001) {
            toast.error("Senior  Team member did not create");
            toast.error(response?.data?.error);
          }
        }
      }
    } catch (error) {
      console.log("Error while creating team member", error);
    }
  };

  // Load Roles
  useEffect(() => {
    const fetchRoles = async () => {
      const response = await getRoles();
      if (response?.data?.code === 1000) {
        setRoles(response.data.roles);
      } else {
        toast.error("Failed to fetch roles.");
      }
    };
    fetchRoles();
  }, []);

  const handleChange = (e) => {
    setAssignRole(e.target.value);
  };

  const userProfile = JSON.parse(localStorage.getItem("profileDetails"));

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>{selectedEmployee ? "Edit Employee" : "Add Employee"}</h1>
      </section>

      <section className="content">
        <div
          className="box box-default"
          style={{
            border: "3px solid black",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px 0px #14657d",
          }}
        >
          <div className="box-body">
            <div className="row">
              <div className="col-md-12">
                <h4
                  style={{
                    background: "#14657d",
                    padding: "5px",
                    fontWeight: 700,
                    color: "white",
                    textAlign: "center",
                    borderRadius: "15px",
                  }}
                >
                  {selectedEmployee ? "Edit Employee" : "Add Employee"}
                </h4>
                <form onSubmit={handleSubmit(addTeamHandler)}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        First Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="First Name"
                        placeholder="User Name"
                        {...register("firstName", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Last Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Last Name"
                        {...register("lastName", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        User Id<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="user Id"
                        {...register("userId", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Mobile number<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        name="mobile"
                        placeholder="Mobile number"
                        {...register("phoneNumber", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Email address<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email address"
                        {...register("email", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Date Of Birth<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="bankDetails"
                        placeholder="Bank Details"
                        {...register("dob", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Date Of Joining<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="Date Of Joining"
                        placeholder="Bank Details"
                        {...register("doj", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Gender<span className="req">*</span>
                      </label>
                      <select
                        className="form-control"
                        name="gender"
                        {...register("gender", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      >
                        <option>Select Gender</option>
                        <option>male</option>
                        <option>female</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Picture<span className="req">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="picture"
                        {...register("pic")}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Password<span className="req">*</span>
                      </label>
                      <input
                        type="Password"
                        className="form-control"
                        name="state"
                        placeholder="Enter Password"
                        {...register("password", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Pin Code */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Confirm Password<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="pinCode"
                        placeholder="Enter Confirm Password"
                        {...register("confirmPassword", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Assign Role<span className="req">*</span>
                      </label>
                      <select
                        className="form-control"
                        name="gender"
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      >
                        <option>Select Role</option>
                        {userProfile?.role === "senior manager" && (
                          <>
                            {role?.length > 0 &&
                              role
                                .slice(2, role.length)
                                .map((data) => (
                                  <option key={data._id}>{data?.name}</option>
                                ))}
                          </>
                        )}
                        {userProfile?.role === "admin" && (
                          <>
                            {role?.length > 0 &&
                              role
                                .slice(1, role.length)
                                .map((data) => (
                                  <option key={data._id}>{data?.name}</option>
                                ))}
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="box-footer" style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        background: "#14657d",
                        borderRadius: "15px",
                        padding: "5px 20px",
                        fontWeight: 700,
                      }}
                    >
                      {selectedEmployee ? "Update Employee" : "Add Employee"}
                      {/* Submit <i className="fa fa-send-o"></i> */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default AddEmployee;
