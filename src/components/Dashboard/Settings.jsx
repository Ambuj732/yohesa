import React, { useState } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";

const Settings = () => {
  const [userData, setUserData] = useState({
    FirstName: "",
    LastName: "",
    StaffId: "",
    Mobilenumber: "",
    Emailaddress: "",
    DateOfBirth: "",
    DateOfJoining: "",
    Gender: "",
    Picture: "",
    Password: "",
    ConfirmPassword: "",
    AssignRole: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted: ", userData);
    // Add form submission logic here.
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Settings</h1>
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
                  Settings
                </h4>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Website Title<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Website Title"
                      placeholder="Website Title"
                      value={userData.name}
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
                      Meta Tags<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="MetaTags"
                      placeholder="Meta Tags"
                      value={userData.name}
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
                      Meta Description<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Meta Description"
                      placeholder="Meta Description"
                      value={userData.name}
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
                      Mobile number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="mobile"
                      placeholder="Mobile number"
                      value={userData.mobile}
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
                      Email address<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email address"
                      value={userData.email}
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
                      Address<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Address"
                      placeholder="Address"
                      value={userData.bankDetails}
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
                      Whatsapp<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Whatsapp"
                      placeholder="Whatsapp"
                      value={userData.bankDetails}
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
                      Linkedin<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="linkedin"
                      placeholder="Linkedin"
                      value={userData.bankDetails}
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
                      Instagram<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Instagram"
                      placeholder="Instagram"
                      value={userData.bankDetails}
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
                      Facebook<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="facebook"
                      placeholder="Facebook"
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
                      Youtube<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Youtube"
                      placeholder="youtube."
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
                      Copyright ©<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Copyright ©"
                      placeholder="Copyright ©"
                      onChange={handleChange}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
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
                    onClick={handleSubmit}
                  >
                    Submit <i className="fa fa-send-o"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
