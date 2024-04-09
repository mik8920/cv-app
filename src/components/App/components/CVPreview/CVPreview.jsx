import "../../../../../styles/Button.css";
import "../../../../../styles/FormPreview.css";
import EducationalExpPreview from "./components/EducationalExpPreview/EducationalExpPreview";
import GeneralInfoPreview from "./components/GeneralnfoPreview/GeneralInfoPreview";
import PracticalExpPreview from "./components/PracticalExpPreview/PracticalExpPreview";

export default function CVPreview({
  handleEditing,
  fullName,
  email,
  phoneNumber,
  schoolName,
  studyTitle,
  studyDate,
  companyName,
  positionTitle,
  jobResponsibilities,
  startWorkDate,
  endWorkDate,
}) {
  return (
    <section className="preview-container">
      <GeneralInfoPreview
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
      />
      <EducationalExpPreview
        schoolName={schoolName}
        studyTitle={studyTitle}
        studyDate={studyDate}
      />
      <PracticalExpPreview
        companyName={companyName}
        positionTitle={positionTitle}
        jobResponsibilities={jobResponsibilities}
        startWorkDate={startWorkDate}
        endWorkDate={endWorkDate}
      />

      <button onClick={handleEditing}>Edit</button>
    </section>
  );
}
