import React, { useState } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";

const ImportApplication = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("File Submitted: ", fileName);
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Import Application</h1>
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
                <div className="col-md-12">
                  <div className="form-group">
                    <label>
                      Choose File<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
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
                    Import Application <i className="fa fa-send-o"></i>
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

export default ImportApplication;
