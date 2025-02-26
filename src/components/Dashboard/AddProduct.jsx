import React, { useState } from "react";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../bower_components/font-awesome/css/font-awesome.min.css";

const AddProduct = () => {
  const [userData, setUserData] = useState({
    CategoryName: "",
    Name: "",
    Image: null,
    ButtonLink: "",
    BestFor: "",
    TextEditor: "",
  });

  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", userData);
    console.log("FAQs:", faqs);
  };

  const addFAQ = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFAQ = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleFAQChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Add Product</h1>
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
              Add Product
            </h4>

            <div className="row">
              {Object.keys(userData).map((key, index) => (
                <div key={index} className="col-md-6">
                  <div className="form-group">
                    <label>
                      {key.replace(/([A-Z])/g, " $1").trim()}{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type={key === "Image" ? "file" : "text"}
                      className="form-control"
                      name={key}
                      placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                      value={key === "Image" ? undefined : userData[key]}
                      onChange={handleChange}
                      style={{
                        border: "2px solid #14657d",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

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
              Frequently Asked Questions
            </h4>
            {faqs.map((faq, index) => (
              <div key={index}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Question"
                  value={faq.question}
                  onChange={(e) =>
                    handleFAQChange(index, "question", e.target.value)
                  }
                  style={{
                    border: "2px solid #14657d",
                    borderRadius: "15px",
                  }}
                />
                <textarea
                  className="form-control"
                  placeholder="Enter Answer"
                  rows="3"
                  value={faq.answer}
                  onChange={(e) =>
                    handleFAQChange(index, "answer", e.target.value)
                  }
                  style={{
                    border: "2px solid #14657d",
                    borderRadius: "15px",
                    marginTop: "10px",
                  }}
                ></textarea>
                {faqs.length > 1 && (
                  <button
                    className="btn btn-danger position-absolute"
                    style={{ margin: "10px" }}
                    onClick={() => removeFAQ(index)}
                  >
                    ✖
                  </button>
                )}
              </div>
            ))}

            <div className="text-center mt-5">
              <button
                className="btn btn-success px-4 "
                onClick={addFAQ}
                style={{
                  background: "#14657d",
                  borderRadius: "15px",
                  padding: "5px 15px",
                  fontWeight: 700,
                  marginTop: "10px",
                }}
              >
                + Add More
              </button>
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
      </section>
    </div>
  );
};

export default AddProduct;
