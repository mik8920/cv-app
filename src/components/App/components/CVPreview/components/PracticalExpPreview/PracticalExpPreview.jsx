import "../../../../../../../styles/FormPreview.css";


export default function PracticalExpPreview(
  {companyName,
  positionTitle,
  jobResponsibilities,
  startWorkDate,
  endWorkDate}
) {
  return (
    <div className="preview-container-practical-exp">
      <h3>Practical Experience Preview</h3>
      <p>
        <strong>Company:</strong> {companyName}
      </p>

      <p>
        <strong>Position Title:</strong> {positionTitle}
      </p>

      <p>
        <strong>Job Responsibilities:</strong> {jobResponsibilities}
      </p>

      <p>
        <strong>Start Date:</strong> {startWorkDate}
      </p>

      <p>
        <strong>End Date:</strong> {endWorkDate}
      </p>
    </div>
  );
}
