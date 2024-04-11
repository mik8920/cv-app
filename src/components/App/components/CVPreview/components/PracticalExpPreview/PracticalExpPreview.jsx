/* eslint-disable react/prop-types */
import "@styles/styles/FormPreview.css";

export default function PracticalExpPreview({ practicalExp }) {
  return (
    <div className="preview-container-practical-exp">
      <h3>Practical Experience Preview</h3>
      {practicalExp.map((exp, index) => {
        return (
          <div
            style={
              index > 0
                ? { borderTop: "1px solid lightgrey", paddingTop: "12px" }
                : {}
            }
            key={exp.id}
          >
            <p>
              <strong>Company:</strong> {exp.companyName}
            </p>

            <p>
              <strong>Position Title:</strong> {exp.positionTitle}
            </p>

            <p>
              <strong>Job Responsibilities:</strong> {exp.jobResponsibilities}
            </p>

            <p>
              <strong>Start Date:</strong> {exp.startWorkDate}
            </p>

            <p>
              <strong>End Date:</strong> {exp.endWorkDate}
            </p>
          </div>
        );
      })}
    </div>
  );
}
