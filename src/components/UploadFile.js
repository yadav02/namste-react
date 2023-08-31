import { useState, useRef } from "react";

const UploadFile = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const inputRef = useRef(null);


  const handelFileChange = (event) => {
    const file = event.target.files;

    setSelectedFiles([...selectedFiles, ...file]);
  };
  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      // console.log("uploading Files", selectedFiles);
      setUploading(false);
      setUploadComplete(true);
      setSelectedFiles([]);
      setTimeout(() => {
        setUploadComplete(false);
      }, 3000);
    }, 3000);
  };

  const resetFile = () => {
    inputRef.current.value = null;
  }
 
  return (
    <div>
      <input
        type="file"
        inputRef={inputRef} 
        multiple
        name="files"
        id="fileInput"
        onChange={handelFileChange}
      />
      <button onClick={handleUpload}>upload</button>
      <button onClick={resetFile}>Reset File</button>
      {uploading && <div>Loading...</div>}
      {uploadComplete && (
        <div>
          <div>File Uploaded successfully!</div>
        </div>
      )}
    </div>
  );
};
export default UploadFile;
