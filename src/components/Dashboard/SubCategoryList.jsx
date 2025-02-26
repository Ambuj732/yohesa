import React, { useEffect } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css";

const CategoryList = () => {
  const users = [
    {
      SubCategoryName: "John",
      action: "Edit/Delete",
    },
    {
      firstName: "Jane",
      action: "Edit/Delete",
    },
  ];

  useEffect(() => {
    const table = $("#example1").DataTable({
      paging: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: false,
    });

    // Cleanup to destroy DataTable instance on component unmount
    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Sub Category List</h1>
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
                      <th>Sub Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>
                          <a href="#">
                            <i
                              className="fa fa-pencil-square-o"
                              style={{ fontSize: "20px", color: "#5dbcc8" }}
                            ></i>
                          </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a href="#">
                            <i
                              className="fa fa-trash"
                              style={{ fontSize: "20px", color: "red" }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryList;
