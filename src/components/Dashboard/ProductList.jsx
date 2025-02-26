import React, { useEffect } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css";

const ProductList = () => {
  const users = [
    {
      ProductName: "Product A",
      Image: "imageA.jpg",
      ButtonLink: "#",
      BestFor: "Category A",
      TextEditor: "Editor A",
      Faq: "FAQ A",
    },
    {
      ProductName: "Product B",
      Image: "imageB.jpg",
      ButtonLink: "#",
      BestFor: "Category B",
      TextEditor: "Editor B",
      Faq: "FAQ B",
    },
  ];

  useEffect(() => {
    const $ = window.$;
    if ($.fn.DataTable) {
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
    }
  }, []);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Product List</h1>
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
                      <th>Name</th>
                      <th>Image</th>
                      <th>Button Link</th>
                      <th>Best For</th>
                      <th>Text Editor</th>
                      <th>Faq</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.ProductName}</td>
                        <td>
                          <img
                            src={user.Image}
                            alt={user.ProductName}
                            style={{ width: "50px" }}
                          />
                        </td>
                        <td>
                          <a href={user.ButtonLink}>Click Here</a>
                        </td>
                        <td>{user.BestFor}</td>
                        <td>{user.TextEditor}</td>
                        <td>{user.Faq}</td>
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

export default ProductList;
