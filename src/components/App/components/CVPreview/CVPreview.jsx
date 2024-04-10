/* eslint-disable react/prop-types */
import "../../../../../styles/Button.css";
import "../../../../../styles/FormPreview.css";
import EducationalExpPreview from "./components/EducationalExpPreview/EducationalExpPreview";
import GeneralInfoPreview from "./components/GeneralnfoPreview/GeneralInfoPreview";
import PracticalExpPreview from "./components/PracticalExpPreview/PracticalExpPreview";

export default function CVPreview({
  handleEditing,

  generalInfo,
  educationalExp,
  practialExp,
}) {
  return (
    <section className="preview-container">
      <GeneralInfoPreview generalInfo={generalInfo} />
      <EducationalExpPreview educationalExp={educationalExp} />
      <PracticalExpPreview practialExp={practialExp} />

      <button onClick={handleEditing}>Edit</button>
    </section>
  );
}
