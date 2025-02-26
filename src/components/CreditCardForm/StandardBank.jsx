import React, { useState } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";

const StandarBank = () => {
  const [userData, setUserData] = useState({
    CustomerfullName: "",
    Pannumber: "",
    DateOfBirth: "",
    MotherName: "",
    FatherName: "",
    Currentfulladdress: "",
    Landmark1: "",
    Landmark2: "",
    pincode: "",
    mobilenumber: "",
    ParsonalmailId: "",
    officialmailid: "",
    companyname: "",
    Designation: "",
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
        <h1>STANDER BANK CARD PROCESS</h1>
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
                  Standar Bank
                </h4>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Customer Full Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Customer Full Name"
                      placeholder="Customer Full Name"
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
                      Pan Number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name=" Pan Number"
                      placeholder="Pan Number"
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
                      Date Of Birth<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="DateOfBirth"
                      placeholder="Date Of Birth"
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
                      Mother Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Mother Name"
                      placeholder="Mother Name"
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
                      Father Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name=" Father Name"
                      placeholder=" Father Name"
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
                      Current Full Address
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="CurrentFullAddress"
                      placeholder="Current Full Address"
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
                      Land Mark 1<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Land Mark 1"
                      placeholder="Land Mark 1"
                      value={userData.landmark1}
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
                      Land Mark 2<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Land Mark 1"
                      placeholder="Land Mark 2"
                      value={userData.landmark1}
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
                      Pin Code<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Pin Code"
                      placeholder="Pin Code"
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
                      Mobile Number<span className="req">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="Mobile Number"
                      placeholder="Mobile Number"
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
                      Personal Mail Id<span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="Personal Mail Id"
                      placeholder="Personal Mail Id"
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
                      Official Mail Id<span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="Official Mail Id"
                      placeholder="Official Mail Id"
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
                      Company Name<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Company Name"
                      placeholder="Company Name"
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
                      Designation<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Company Name"
                      placeholder="Company Name"
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

export default StandarBank;
