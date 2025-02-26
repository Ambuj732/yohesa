import React, { useState } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import logo from "../dist/img/logo.png";
import Header from "../Header/Header";

const SignUp = () => {
  const [teacherData, setTeacherData] = useState({
    name: "",
    email: "",
    gender: "",
    mobile: "",
    picture: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    qualification: "",
    teachingArea: "",
    classes: "",
    subjects: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePhoneNumber();
    // Perform form submission logic here
    console.log("Teacher Data Submitted: ", teacherData);
  };

  const validateEmail = () => {
    // Add email validation logic here
  };

  const validatePhoneNumber = () => {
    // Add phone number validation logic here
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="container">
        {/* Main content */}
        <section className="content mt-4">
          <div className="text-center">
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{ maxWidth: "20%", marginBottom: "30px" }}
            />
          </div>
          <div className="box box-default">
            <div className="box-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        First Name<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter First Name"
                        value={teacherData.name}
                        onChange={handleChange}
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
                        Last Name<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Last Name"
                        value={teacherData.email}
                        onChange={handleChange}
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
                        value={teacherData.gender}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      >
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Mobile No<span className="req">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="mobile"
                        placeholder="Enter Mobile No"
                        value={teacherData.mobile}
                        onChange={handleChange}
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
                        Picture<span className="req">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="picture"
                        onChange={handleChange}
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
                        Date of Birth<span className="req">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={teacherData.dob}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Date Of Joining<span className="req">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="Email"
                        placeholder="Enter Date Of Joining"
                        value={teacherData.address}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Email<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        placeholder="Enter Email"
                        value={teacherData.city}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  {/* State */}
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
                        value={teacherData.state}
                        onChange={handleChange}
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
                        value={teacherData.pinCode}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Qualification */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Assign Role<span className="req">*</span>
                      </label>
                      <select
                        className="form-control"
                        name="gender"
                        value={teacherData.gender}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      >
                        <option>Select Role</option>
                        <option>Admin</option>
                        <option>Senior Manager</option>
                        <option>Manager</option>
                        <option>Team Leader</option>
                        <option>Telle Caller</option>
                      </select>
                    </div>
                  </div>
                  {/* Preferred Teaching Area */}
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Staff Id
                        <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="teachingArea"
                        placeholder="Enter Staff Id"
                        value={teacherData.teachingArea}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div> */}

                  {/* Classes You Can Teach */}
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Classes You Can Teach<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="classes"
                        placeholder="Classes You Can Teach"
                        value={teacherData.classes}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div> */}

                  {/* Subjects You Can Teach */}
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Subjects You Can Teach<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="subjects"
                        placeholder="Subjects You Can Teach"
                        value={teacherData.subjects}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div> */}

                  {/* Experience */}
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Any Experience of Teaching<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="experience"
                        placeholder="Any Experience of Teaching"
                        value={teacherData.experience}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                    </div>
                  </div> */}

                  <div className="col-md-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          background: "#14657d",
                          border: "none",
                          borderRadius: "15px",
                          fontWeight: "700",
                        }}
                      >
                        SignUp
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
