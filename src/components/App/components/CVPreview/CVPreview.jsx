/* eslint-disable react/prop-types */
import "@styles/styles/Button.css";
import "@styles/styles/FormPreview.css";
import EducationalExpPreview from "./components/EducationalExpPreview/EducationalExpPreview";
import GeneralInfoPreview from "./components/GeneralnfoPreview/GeneralInfoPreview";
import PracticalExpPreview from "./components/PracticalExpPreview/PracticalExpPreview";

export default function CVPreview({
  handleEditing,
  generalInfo,
  educationalExp,
  practicalExp,
}) {
  return (
    <section className="preview-container">
      <GeneralInfoPreview generalInfo={generalInfo} />
      <EducationalExpPreview educationalExp={educationalExp} />
      <PracticalExpPreview practicalExp={practicalExp} />

      <button onClick={handleEditing}>Edit</button>
    </section>
  );
}
