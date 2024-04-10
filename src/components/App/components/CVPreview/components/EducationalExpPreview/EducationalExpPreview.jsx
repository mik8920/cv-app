/* eslint-disable react/prop-types */
import "@styles/styles/FormPreview.css";
import { Fragment } from "react";

export default function EducationalExpPreview({ educationalExp }) {
  return (
    <div className="preview-container-edu-exp">
      <h3>Educational Experience Preview</h3>
      {educationalExp.map((exp) => {
        return (
          <Fragment key={exp.id}>
            <p>
              <strong>Company Name:</strong> {exp.schoolName}
            </p>

            <p>
              <strong>Title of study:</strong> {exp.studyTitle}
            </p>

            <p>
              <strong>Date of study:</strong> {exp.studyDate}
            </p>
          </Fragment>
        );
      })}
    </div>
  );
}
