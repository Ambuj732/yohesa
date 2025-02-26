import React, { useState } from "react";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const addFAQ = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFAQ = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  const handleChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  return (
    <div className="container">
      <div
        className="faq-container p-4"
        style={{
          maxWidth: "800px",
          marginLeft: "",
          marginRight: "20px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="text-center mb-4">❓ Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item mb-3 p-3 shadow rounded bg-white position-relative"
          >
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Question"
              value={faq.question}
              onChange={(e) => handleChange(index, "question", e.target.value)}
            />
            <textarea
              className="form-control"
              placeholder="Enter Answer"
              rows="3"
              value={faq.answer}
              onChange={(e) => handleChange(index, "answer", e.target.value)}
            ></textarea>

            {faqs.length > 1 && (
              <button
                className="btn btn-danger position-absolute"
                style={{ top: "10px", right: "10px" }}
                onClick={() => removeFAQ(index)}
              >
                ✖
              </button>
            )}
          </div>
        ))}

        <div className="text-center mt-3">
          <button className="btn btn-success px-4" onClick={addFAQ}>
            + Add More
          </button>
        </div>

        {faqs.some((faq) => faq.question && faq.answer) && (
          <div className="mt-4 p-3 rounded shadow bg-light">
            <h3 className="text-center">📝 Live Preview</h3>
            {faqs.map(
              (faq, index) =>
                faq.question &&
                faq.answer && (
                  <div key={index} className="mt-3">
                    <strong>Q: {faq.question}</strong>
                    <p>A: {faq.answer}</p>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
