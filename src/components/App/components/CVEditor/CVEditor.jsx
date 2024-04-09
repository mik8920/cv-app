import "../../../../../styles/Button.css";
import "../../../../../styles/FormEdit.css";

import EducationalExp from "./components/EducationalExp/EducationalExp";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import PracticalExp from "./components/PracticalExp/PracticalExp";
export default function CVEditor({
  handleEditing,
  fullName,
  setFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  schoolName,
  setSchoolName,
  studyTitle,
  setStudyTitle,
  studyDate,
  setStudyDate,
  companyName,
  setCompanyName,
  positionTitle,
  setPositionTitle,
  jobResponsibilities,
  setJobResponsibilities,
  startWorkDate,
  setStartWorkDate,
  endWorkDate,
  setEndWorkDate,
}) {
  return (
    <section className="edit-container">
      <GeneralInfo
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <EducationalExp
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        studyTitle={studyTitle}
        setStudyTitle={setStudyTitle}
        studyDate={studyDate}
        setStudyDate={setStudyDate}
      />
      <PracticalExp
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

      <button onClick={handleEditing}>Preview</button>
    </section>
  );
}
