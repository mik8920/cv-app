/* eslint-disable react/prop-types */
import "@styles/styles/Button.css";
import "@styles/styles/FormEdit.css";

import EducationalExp from "./components/EducationalExp/EducationalExp";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import PracticalExp from "./components/PracticalExp/PracticalExp";
export default function CVEditor({
  handleEditing,

  generalInfo,
  setGeneralInfo,
  educationalExp,
  setEducationalExp,
  practicalExp,
  setPracticalExp,
}) {
  return (
    <section className="edit-container">
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <EducationalExp
        educationalExp={educationalExp}
        setEducationalExp={setEducationalExp}
      />
      <PracticalExp
        practicalExp={practicalExp}
        setPracticalExp={setPracticalExp}
      />

      <button onClick={handleEditing}>Preview</button>
    </section>
  );
}
