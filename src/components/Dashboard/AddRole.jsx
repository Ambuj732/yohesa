import React, { useState } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import addRole from "../../actions/admin/addRole";

const AddRole = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createRoleHandler = async (formData) => {
    try {
      const data = {
        name: formData?.create_role,
      };
      const response = await addRole(data);
      console.log(response);
      if (response?.data?.code === 1000) {
        toast.success("Role created Successfully");
      } else if (
        response?.data?.status ===
        "Access denied. Only admins can perform this action."
      ) {
        toast.error("Access denied. Only admins can perform this action.");
      }
    } catch (error) {
      console.log("Error while creating Role", error);
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Add Role</h1>
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
                  Add Role
                </h4>

                <form onSubmit={handleSubmit(createRoleHandler)}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Add Role<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="First Name"
                        placeholder="Create role..."
                        {...register("create_role", { required: true })}
                        style={{
                          border: "2px solid #14657d",
                          borderRadius: "15px",
                        }}
                      />
                      {errors?.create_role && (
                        <p className="" style={{ color: "red" }}>
                          Check create role filed
                        </p>
                      )}
                    </div>
                    <div className="" style={{ marginTop: "24px" }}>
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
                        Submit <i className="fa fa-send-o"></i>
                      </button>
                    </div>
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

export default AddRole;
