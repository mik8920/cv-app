import "../../../styles/App.css";
import CVEditor from "./components/CVEditor/CVEditor";
import CVPreview from "./components/CVPreview/CVPreview";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [editing, setEditing] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [jobResponsibilities, setJobResponsibilities] = useState("");
  const [startWorkDate, setStartWorkDate] = useState("");
  const [endWorkDate, setEndWorkDate] = useState("");

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
            fullName={fullName}
            setFullName={setFullName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            studyTitle={studyTitle}
            setStudyTitle={setStudyTitle}
            studyDate={studyDate}
            setStudyDate={setStudyDate}
            companyName={companyName}
            setCompanyName={setCompanyName}
            positionTitle={positionTitle}
            setPositionTitle={setPositionTitle}
            jobResponsibilities={jobResponsibilities}
            setJobResponsibilities={setJobResponsibilities}
            startWorkDate={startWorkDate}
            setStartWorkDate={setStartWorkDate}
            endWorkDate={endWorkDate}
            setEndWorkDate={setEndWorkDate}
          />
        ) : (
          <CVPreview
            handleEditing={handleEditing}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            schoolName={schoolName}
            studyTitle={studyTitle}
            studyDate={studyDate}
            companyName={companyName}
            positionTitle={positionTitle}
            jobResponsibilities={jobResponsibilities}
            startWorkDate={startWorkDate}
            endWorkDate={endWorkDate}
          />
        )}
      </div>
    </>
  );
}

export default App;
