/* eslint-disable react/prop-types */
import "../../../../../../../styles/FormPreview.css";

export default function EducationalExpPreview({ educationalExp }) {
  return (
    <div className="preview-container-edu-exp">
      <h3>Educational Experience Preview</h3>

      <p>
        <strong>Full Name:</strong> {educationalExp.schoolName}
      </p>

      <p>
        <strong>Title of study:</strong> {educationalExp.studyTitle}
      </p>

      <p>
        <strong>Date of study:</strong> {educationalExp.studyDate}
      </p>
    </div>
  );
}
