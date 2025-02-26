import React, { useEffect } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";
import "../bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css";

const UploadDump = () => {
  const users = [
    {
      application: "App123",
      eReferenceNumber: "ER123456",
      sourcingChannel: "Online",
      creationDate: "2025-01-01",
      customerType: "New",
      customerName: "John Doe",
      smCode: "SM001",
      productCode: "PR123",
      promoCode: "PROMO001",
      lc1Code: "LC123",
      companyName: "XYZ Corp",
      dropoffReason: "Incomplete Info",
      idcomStatus: "Verified",
      vkycStatus: "Completed",
      ipaStatus: "Pending",
      currentStatus: "Active",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      surrogateEligibility: "Yes",
      declineCode: "D001",
      finalDecision: "Approved",
      finalDecisionDescription: "All criteria met",
      etbNbSuccessFlag: "Yes",
      curableFlag: "No",
      declineDescription: "N/A",
      ageingBra: "15 days",
      branchCode: "BR123",
      channel: "Branch",
      vkycConsentDate: "2025-01-10",
      advRefNo: "ADV12345",
      vkycExpiry: "2025-01-20",
      captureLink: "http://example.com/capture",
      profileId: "PID12345",
      dapFinalFlag: "Yes",
      lc2Code: "LC234",
      lgCode: "LG567",
      restartFlag: "No",
      qdeStatus: "Accepted",
      qdeRejectReason: "N/A",
      companyCode: "CMP123",
      variableValue: "Variable123",
      loginMonth: "January",
      decisionM: "Decision123",
      unAssisted: "Yes",
      dapFinal: "Yes",
      finalDecisionDate: "2025-01-15",
      inprocessClassification: "Category A",
      classification: "High Priority",
      declineType: "Type1",
      bkycStatus: "Completed",
      bkycStatusReason: "Verified",
      activation: "John Activation",
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
        <h1>UploadDump</h1>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div
                className="box-body"
                style={{
                  maxHeight: "auto",
                  overflowY: "auto",
                }}
              >
                <table
                  id="example1"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      <th>Application</th>
                      <th>E-Reference Number</th>
                      <th>Sourcing Channel</th>
                      <th>Creation Date</th>
                      <th>Customer Type</th>
                      <th>Customer Name</th>
                      <th>SM Code</th>
                      <th>Product Code</th>
                      <th>Promo Code</th>
                      <th>LC1 Code</th>
                      <th>Company Name</th>
                      <th>Dropoff Reason</th>
                      <th>IDCOM Status</th>
                      <th>VKYC Status</th>
                      <th>IPA Status</th>
                      <th>Current Status</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Pincode</th>
                      <th>Surrogate Eligibility</th>
                      <th>Decline Code</th>
                      <th>Final Decision</th>
                      <th>Final Decision Description</th>
                      <th>ETB NB Success Flag</th>
                      <th>Curable Flag</th>
                      <th>Decline Description</th>
                      <th>Ageing BRA</th>
                      <th>Branch Code</th>
                      <th>Channel</th>
                      <th>VKYC Consent Date</th>
                      <th>ADV Ref No</th>
                      <th>VKYC Expiry</th>
                      <th>Capture Link</th>
                      <th>Profile ID</th>
                      <th>DAP Final Flag</th>
                      <th>LC2 Code</th>
                      <th>LG Code</th>
                      <th>Restart Flag</th>
                      <th>QDE Status</th>
                      <th>QDE Reject Reason</th>
                      <th>Company Code</th>
                      <th>Variable Value</th>
                      <th>Login Month</th>
                      <th>Decision M</th>
                      <th>UN Assisted Assisted</th>
                      <th>DAP Final</th>
                      <th>Creation Date</th>
                      <th>Final Decision Date</th>
                      <th>Inprocess Classification</th>
                      <th>Classification</th>
                      <th>Decline Type</th>
                      <th>BKYC Status</th>
                      <th>BKYC Status Reason</th>
                      <th>Activation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.application}</td>
                        <td>{user.eReferenceNumber}</td>
                        <td>{user.sourcingChannel}</td>
                        <td>{user.creationDate}</td>
                        <td>{user.customerType}</td>
                        <td>{user.customerName}</td>
                        <td>{user.smCode}</td>
                        <td>{user.productCode}</td>
                        <td>{user.promoCode}</td>
                        <td>{user.lc1Code}</td>
                        <td>{user.companyName}</td>
                        <td>{user.dropoffReason}</td>
                        <td>{user.idcomStatus}</td>
                        <td>{user.vkycStatus}</td>
                        <td>{user.ipaStatus}</td>
                        <td>{user.currentStatus}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.pincode}</td>
                        <td>{user.surrogateEligibility}</td>
                        <td>{user.declineCode}</td>
                        <td>{user.finalDecision}</td>
                        <td>{user.finalDecisionDescription}</td>
                        <td>{user.etbNbSuccessFlag}</td>
                        <td>{user.curableFlag}</td>
                        <td>{user.declineDescription}</td>
                        <td>{user.ageingBra}</td>
                        <td>{user.branchCode}</td>
                        <td>{user.channel}</td>
                        <td>{user.vkycConsentDate}</td>
                        <td>{user.advRefNo}</td>
                        <td>{user.vkycExpiry}</td>
                        <td>
                          <a href={user.captureLink} target="_blank">
                            View Link
                          </a>
                        </td>
                        <td>{user.profileId}</td>
                        <td>{user.dapFinalFlag}</td>
                        <td>{user.lc2Code}</td>
                        <td>{user.lgCode}</td>
                        <td>{user.restartFlag}</td>
                        <td>{user.qdeStatus}</td>
                        <td>{user.qdeRejectReason}</td>
                        <td>{user.companyCode}</td>
                        <td>{user.variableValue}</td>
                        <td>{user.loginMonth}</td>
                        <td>{user.decisionM}</td>
                        <td>{user.unAssisted}</td>
                        <td>{user.dapFinal}</td>
                        <td>{user.creationDate}</td>
                        <td>{user.finalDecisionDate}</td>
                        <td>{user.inprocessClassification}</td>
                        <td>{user.classification}</td>
                        <td>{user.declineType}</td>
                        <td>{user.bkycStatus}</td>
                        <td>{user.bkycStatusReason}</td>
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

export default UploadDump;
