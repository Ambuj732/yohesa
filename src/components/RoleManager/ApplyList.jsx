import hdfc_indian from "../dist/img/hdfc_indian.avif";
import rupay from "../dist/img/rupay.avif";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("User Data Submitted: ", userData);
};

const ApplyList = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Apply List</h1>
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
                  Apply List
                </h4>

                <div className="col-lg-4 col-xs-6">
                  <div
                    className="mt-5"
                    style={{ marginTop: "12px", marginBottom: "10px" }}
                  >
                    <img src={hdfc_indian}></img>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-xs-6"
                  style={{ textAlign: "center" }}
                >
                  <h2>Bank Name</h2>
                  <img src={rupay}></img>
                </div>

                <div
                  className="col-lg-4 col-xs-6"
                  style={{ marginTop: "40px", textAlign: "center" }}
                >
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

export default ApplyList;
