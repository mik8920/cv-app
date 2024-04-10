/* eslint-disable react/prop-types */
import "@styles/styles/FormPreview.css";
import { Fragment } from "react";

export default function PracticalExpPreview({ practicalExp }) {
  return (
    <div className="preview-container-practical-exp">
      <h3>Practical Experience Preview</h3>
      {practicalExp.map((exp) => {
        return (
          <Fragment key={exp.id}>
            <p>
              <strong>Company:</strong> {practicalExp.companyName}
            </p>

            <p>
              <strong>Position Title:</strong> {practicalExp.positionTitle}
            </p>

            <p>
              <strong>Job Responsibilities:</strong>{" "}
              {practicalExp.jobResponsibilities}
            </p>

            <p>
              <strong>Start Date:</strong> {practicalExp.startWorkDate}
            </p>

            <p>
              <strong>End Date:</strong> {practicalExp.endWorkDate}
            </p>
          </Fragment>
        );
      })}
    </div>
  );
}
