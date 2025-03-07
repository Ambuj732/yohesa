import React, { useState, useEffect } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css";
import getRoles from "../../actions/getRoles";
import deleteRole from "../../actions/admin/deleteRole";
import { ToastContainer, toast } from "react-toastify";
const RoleList = () => {
  const [role, setRoles] = useState([]);

  const getRolesHandler = async () => {
    const userProfile = JSON.parse(localStorage.getItem("profileDetails"));
    const response = await getRoles();
    console.log(response);
    if (response?.data?.code === 1000) {
      setRoles(response?.data?.roles);
      toast.success("Roles fetched Successfully");
    }
  };

  const deleteRoles = async (id) => {
    try {
      console.log("RoleId", id);
      const response = await deleteRole(id);
      if (response?.data?.code === 1000) {
        await getRolesHandler();
        toast.success("Role deleted Successfully");
      } else if (response?.data?.code === 1001) {
        toast.success("Role not found");
      }
    } catch (error) {
      console.log("Error white deleting Role", error);
    }
  };

  useEffect(() => {
    getRolesHandler();
  }, []);

  // useEffect(() => {
  //   const table = $("#example1").DataTable({
  //     paging: true,
  //     searching: true,
  //     ordering: true,
  //     info: true,
  //     autoWidth: false,
  //   });

  //   return () => {
  //     table.destroy();
  //   };
  // }, []);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Role List</h1>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-body">
                <table
                  id="example1"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      <th>Role List</th>
                    </tr>
                  </thead>
                  <tbody>
                    {role.slice(1, role.length)?.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" onClick={() => deleteRoles(user?._id)}>
                          <i
                            className="fa fa-trash"
                            style={{ fontSize: "20px", color: "red" }}
                          ></i>
                        </a>
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

export default RoleList;
