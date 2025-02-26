import React, { useState } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";

const AddCategory = () => {
  const [userData, setUserData] = useState({
    CategoryName: "",
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
        <h1>Add Category</h1>
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
                  Add Category
                </h4>

                <div className="col-md-12">
                  <div className="form-group">
                    <label>
                      Category Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="First Name"
                      placeholder="User Name"
                      value={userData.name}
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

export default AddCategory;
