/* eslint-disable react/prop-types */
import "@styles/styles/FormEdit.css";

export default function EducationalExp({ educationalExp, setEducationalExp }) {
  return (
    <div className="form-container-edu-exp">
      <h3>Educational Experience</h3>
      <form id="cv-form" action="" method="POST">
        <div className="form-field">
          <label htmlFor="school-name">School Name:</label>
          <input
            type="text"
            value={educationalExp.schoolName}
            id="school-name"
            onChange={(e) =>
              setEducationalExp({
                ...educationalExp,
                schoolName: e.target.value,
              })
            }
            placeholder="MIT"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="study-title">Title of study:</label>
          <input
            type="text"
            value={educationalExp.studyTitle}
            id="study-title"
            onChange={(e) =>
              setEducationalExp({
                ...educationalExp,
                studyTitle: e.target.value,
              })
            }
            placeholder="BSc Computer Science"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="study-date">Date of study:</label>
          <input
            type="date"
            value={educationalExp.studyDate}
            id="study-date"
            onChange={(e) =>
              setEducationalExp({
                ...educationalExp,
                studyDate: e.target.value,
              })
            }
          ></input>
        </div>
      </form>
    </div>
  );
}
