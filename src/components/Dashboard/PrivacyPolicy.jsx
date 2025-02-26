import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactQuill from "react-quill";
import "../dist/css/AdminLTE.css";

const PrivacyPolicy = () => {
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [quillContent, setQuillContent] = useState("");

  return (
    <div className="content-wrapper">
      {/* Content Header */}
      <section className="content-header">
        <h1>Text Editors</h1>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            {/* React Quill Section */}
            <div className="box">
              <div className="box-header"></div>
              <div className="box-body pad">
                <ReactQuill
                  value={quillContent}
                  onChange={setQuillContent}
                  theme="snow"
                  placeholder="Write something here..."
                  className="custom-editor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
