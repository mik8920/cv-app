import "@styles/styles/App.css";
import CVEditor from "./components/CVEditor/CVEditor";
import CVPreview from "./components/CVPreview/CVPreview";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [educationalExp, setEducationalExp] = useState([{
    id:uuidv4(),
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  }]);
  const [practicalExp, setPracticalExp] = useState([{
    id:uuidv4(),
    companyName: "",
    positionTitle: "",
    jobResponsibilities: "",
    startWorkDate: "",
    endWorkDate: "",
  }]);
  const [editing, setEditing] = useState(true);

  const handleEditing = () => {
    setEditing(!editing);
  };

  return (
    <>
      <h1>CV Builder</h1>
      <div className="app-container">
        {editing ? (
          <CVEditor
            handleEditing={handleEditing}
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
            educationalExp={educationalExp}
            setEducationalExp={setEducationalExp}
            practicalExp={practicalExp}
            setPracticalExp={setPracticalExp}
          />
        ) : (
          <CVPreview
            handleEditing={handleEditing}
            generalInfo={generalInfo}
            educationalExp={educationalExp}
            practicalExp={practicalExp}
          />
        )}
      </div>
    </>
  );
}

export default App;
