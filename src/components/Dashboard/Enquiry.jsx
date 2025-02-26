import React, { useEffect } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css";

const Enquiry = () => {
  const users = [
    {
      EnquiryName: "Jane",
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

    return () => {
      if ($.fn.DataTable.isDataTable("#example1")) {
        table.destroy();
      }
    };
  }, []);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Enquiry</h1>
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
                      <th>Enquiry Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.EnquiryName}</td>
                        <td>
                          <a href="javascript:void(0);">
                            <i
                              className="fa fa-pencil-square-o"
                              style={{ fontSize: "20px", color: "#5dbcc8" }}
                            ></i>
                          </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a href="javascript:void(0);">
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

export default Enquiry;
