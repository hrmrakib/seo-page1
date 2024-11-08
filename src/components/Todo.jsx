import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    // Append the uploaded files to the form
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log({ response });
      alert("Files uploaded successfully");
    } catch (error) {
      console.error("Error uploading files:", error.message);
    }
  };

  return (
    <div className='p-5'>
      <input type='file' multiple onChange={handleFileChange} />
      {/* <button
        onClick={handleUpload}
        className='bg-blue-500 text-white px-4 py-2 mt-2 rounded'
      >
        Upload Files
      </button> */}
    </div>
  );
}

export default FileUpload;
