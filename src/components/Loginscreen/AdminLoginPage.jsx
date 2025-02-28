import React, { useEffect } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/Ionicons/css/ionicons.min.css";
import "../plugins/iCheck/icheck.min.js";
import logo from "../dist/img/logo.png";
import finance from "../dist/img/finance.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import login from "../../actions/LoginScreen/adminTeamLogin/login.js";
import { ToastContainer, toast } from "react-toastify";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // window.$("input").iCheck({
    //   checkboxClass: "icheckbox_square-blue",
    //   radioClass: "iradio_square-blue",
    //   increaseArea: "20%", // optional
    // });
  }, []);

  const loginHandler = async (formData) => {
    try {
      const data = {
        email: formData?.email,
        password: formData?.password,
      };
      console.log(data);
      const response = await login(data);
      console.log(response);
      if (response?.data?.code === 1000) {
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
        toast.success("You have successfully logged in");
        localStorage.setItem(
          "profileDetails",
          JSON.stringify(response?.data?.info)
        );
      } else if (response?.data?.status === "Invalid email or password") {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.log("Error while login", error);
    }
  };

  return (
    <div>
      <div
        className=""
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${finance})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 10,
        }}
      >
        <div
          className="login-box"
          style={{ marginTop: "-4px", paddingTop: "120px" }}
        >
          <div className="login-logo">
            <a href="#">
              <img
                src={logo}
                alt="logo"
                style={{ width: "80%", height: "auto" }}
              />
            </a>
          </div>
          <div
            className="login-box-body"
            style={{ borderRadius: "10px", background: "#14657d" }}
          >
            <p className="login-box-msg" style={{ color: "#fff" }}>
              Admin Login
            </p>
            <form onSubmit={handleSubmit(loginHandler)}>
              <div className="form-group has-feedback">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red">email is required.</p>}
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red">password is required.</p>
                )}

                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <label>
                      <input
                        type="checkbox"
                        {...register("checkbox", { required: true })}
                      />
                      {errors.checkbox && (
                        <p className="text-red">checkbox is required.</p>
                      )}

                      <span style={{ color: "#fff" }}> Remember Me</span>
                    </label>
                  </div>
                </div>
                <div className="col-xs-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                    style={{ borderRadius: "15px" }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <a href="#" style={{ color: "#fff" }}>
              I forgot my password
            </a>
            <br />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLoginPage;
