import React, { useState, useEffect } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import profileImage from "../dist/img/user4-128x128.jpg";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import editProfile from "../../actions/admin/editProfile";
import getProfileData from "../../actions/admin/getProfileData";
const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState("");
  const [profileData, setProfileData] = useState([]);

  const getAdminProfile = async () => {
    const userProfile = JSON.parse(localStorage.getItem("profileDetails"));
    const response = await getProfileData();
    console.log(response);
    if (response?.data?.code === 1000) {
      setProfileData(response?.data?.data);
      toast.success("Profile Data fetched Successfully");
    }
  };

  useEffect(() => {
    getAdminProfile();
  }, [1]);

  const editProfileHandler = async (formData) => {
    try {
      const userProfile = JSON.parse(localStorage.getItem("profileDetails"));
      console.log("userProfile::", userProfile);
      const data = {
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        mobile: formData?.number,
        email: formData?.email,
        password: formData?.password,
        confirmPassword: formData?.confirmPassword,
        picture: "",
      };
      console.log("Data::", data);
      const response = await editProfile(data);
      console.log(response);
      if (response?.data?.code === 1000) {
        toast.success("Profile Edit Successfully");
      } else if (response?.data?.code === 1001) {
        toast.error(response?.data?.error);
      }

      // else if (userProfile?.role === "senior manager") {
      //   const response = await addSeniorTeam(data);
      //   console.log(response);
      //   if (response?.data?.code === 1000) {
      //     toast.success("TeamMember is created Successfully");
      //     toast.success(response?.data?.email);
      //   } else if (response?.data?.status === 1001) {
      //     toast.error("Senior  Team member did not create");
      //   }
      // }
    } catch (error) {
      console.log("Error while creating team member", error);
      toast.error(error);
    }
  };

  const handleChange = (e) => {
    setFile(e.target.file[0]);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted", formData);
  // };

  const UserProfileData = JSON.parse(localStorage.getItem("profileDetails"));

  return (
    <div className="content-wrapper">
      <div className="row">
        <div
          className=""
          style={{
            width: "full",
            display: "flex",
            gap: "160px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <section className="content-header">
            <h1>User Profile</h1>
          </section>
        </div>
      </div>

      <section className="content">
        <div className="row">
          {/* {for showing profile value only not edit} */}
          <div className="col-md-3">
            <div className="box">
              <div className="box-body box-profile">
                <img
                  className="profile-user-img img-responsive img-circle"
                  src={profileImage}
                  alt="User profile picture"
                />
                <ul className="list-group list-group-unbordered">
                  <li className="list-group-item">
                    <form
                      className="form-horizontal"
                      style={{ padding: "10px" }}
                    >
                      <div className="form-group">
                        <label For="name" className="col-sm-2 control-label">
                          Name
                        </label>
                        <div className="col-sm-10">
                          <input
                            disabled
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={`${profileData.firstName} ${profileData.lastName}`}
                            style={{
                              border: "2px solid #14657d",
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label For="email" className="col-sm-2 control-label">
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            disabled
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={profileData.email}
                            style={{
                              border: "2px solid #14657d",
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          For="mobileNumber"
                          className="col-sm-2 control-label"
                        >
                          Mobile
                        </label>
                        <div className="col-sm-10">
                          <input
                            disabled
                            type="number"
                            className="form-control"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="Mobile Number"
                            value={profileData.mobile}
                            style={{
                              border: "2px solid #14657d",
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                      </div>
                      {/* <div className="form-group">
                        <label
                          htmlFor="address"
                          className="col-sm-2 control-label"
                        >
                          Address
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            style={{
                              border: "2px solid #14657d",
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                      </div> */}
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* {For Editing} */}

          <div className="col-md-9">
            <div className="nav-tabs-custom">
              <section className="content-header">
                <h1>Edit Profile :</h1>
              </section>
              <form
                className="form-horizontal"
                style={{ padding: "10px" }}
                onSubmit={handleSubmit(editProfileHandler)}
              >
                <div className="form-group">
                  <label htmlFor="name" className="col-sm-2 control-label">
                    First Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="firstName"
                      {...register("firstName", { required: true })}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name" className="col-sm-2 control-label">
                    Last Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="lastName"
                      {...register("lastName", { required: true })}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-sm-2 control-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="mobileNumber"
                    className="col-sm-2 control-label"
                  >
                    Mobile Number
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      {...register("number", { required: true })}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="col-sm-2 control-label">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="confirmPassword"
                    className="col-sm-2 control-label"
                  >
                    Confirm Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", { required: true })}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="profilePhoto"
                    className="col-sm-2 control-label"
                  >
                    Profile Photo
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      className="form-control"
                      id="profilePhoto"
                      name="profilePhoto"
                      onChange={handleChange}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-danger"
                      style={{
                        background: "#14657d",
                        border: "none",
                        padding: "10px 30px",
                        borderRadius: "10px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Profile;
