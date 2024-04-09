import "../../../../../../../styles/FormPreview.css";

export default function EducationalExpPreview({
  schoolName,
  studyTitle,
  studyDate,
}) {
  return (
    <div class="preview-container-edu-exp">
      <h3>Educational Experience Preview</h3>

      <p>
        <strong>Full Name:</strong> {schoolName}
      </p>

      <p>
        <strong>Title of study:</strong> {studyTitle}
      </p>

      <p>
        <strong>Date of study:</strong> {studyDate}
      </p>
    </div>
  );
}
