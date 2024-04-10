/* eslint-disable react/prop-types */
import "@styles/styles/FormPreview.css";

export default function EducationalExpPreview({ educationalExp }) {
  return (
    <div className="preview-container-edu-exp">
      <h3>Educational Experience Preview</h3>
      {educationalExp.map((exp,index) => {
        return (
          <div style={index === 0 ? {borderTop: '1px solid black'} : {}} key={exp.id}>
            <p>
              <strong>Company Name:</strong> {exp.companyName}
            </p>

            <p>
              <strong>Title of study:</strong> {exp.studyTitle}
            </p>

            <p>
              <strong>Date of study:</strong> {exp.studyDate}
            </p>
          </div>
        );
      })}
    </div>
  );
}
