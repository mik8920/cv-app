/* eslint-disable react/prop-types */
import "@styles/styles/FormEdit.css";
import { v4 as uuidv4 } from "uuid";

export default function EducationalExp({ educationalExp, setEducationalExp }) {
  const handleExpEdit = (e, expId) => {
    const newEduExp = educationalExp.map((exp) => {
      if (exp.id === expId) {
        return { ...exp, [e.target.name]: e.target.value };
      }
      return { ...exp };
    });
    setEducationalExp(newEduExp);
  };

  const handleExpAdd = () => {
    const newEduExp = [...educationalExp];
    newEduExp.push({
      id: uuidv4(),
      schoolName: "",
      studyTitle: "",
      studyDate: "",
    });
    setEducationalExp(newEduExp);
  };

  const handleExpRemoval = (expId) => {
    const newEduExp = educationalExp.filter((_, index) => expId !== index);
    setEducationalExp(newEduExp);
  };


  return (
    <div className="form-container-edu-exp">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Educational Experience</h3>
        <button className="addBtn" onClick={handleExpAdd}>+</button>
      </div>
      <form id="cv-form" action="" method="POST">
        {educationalExp.map((exp, index) => {
          return (
            <div style={index > 0 ? {borderTop: '1px solid lightgrey'} : {}} key={exp.id}>
              <div className="form-field">
                <label htmlFor="school-name">School Name:</label>
                <input
                  type="text"
                  value={exp.schoolName}
                  id="school-name"
                  name="schoolName"
                  onChange={(e) => handleExpEdit(e, exp.id)}
                  placeholder="MIT"
                />
              </div>

              <div className="form-field">
                <label htmlFor="study-title">Title of study:</label>
                <input
                  type="text"
                  value={exp.studyTitle}
                  id="study-title"
                  name="studyTitle"
                  onChange={(e) => handleExpEdit(e, exp.id)}
                  placeholder="BSc Computer Science"
                />
              </div>

              <div className="form-field">
                <label htmlFor="study-date">Date of study:</label>
                <input
                  type="date"
                  value={exp.studyDate}
                  id="study-date"
                  name="studyDate"
                  onChange={(e) => handleExpEdit(e, exp.id)}
                />
              </div>
              {educationalExp.length > 1 && (
                <button className="delBtn"
                  onClick={() => {
                    handleExpRemoval(index);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </form>
    </div>
  );
}
