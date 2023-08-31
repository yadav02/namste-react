import  {useState} from "react";
import { Header } from "./components/Header";
import UploadFile from "./components/UploadFile";
// import { Body } from "./components/Body";

const App = () => {
// const [uploadedFile, setUploadedFile] = useState([]);
// const  handleFileUpload = file => {
//      console.log("Uploaded File", file.name);
//      setUploadedFile(file)
// }
// console.log("Uploaded File", uploadedFile)
  return (
    <div className="app">
      <Header />
      <UploadFile />
    </div>
  );
};
export default App;
