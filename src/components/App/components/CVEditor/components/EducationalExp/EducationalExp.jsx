import "../../../../../../../styles/FormEdit.css";

export default function EducationalExp({
  schoolName,
  setSchoolName,
  studyTitle,
  setStudyTitle,
  studyDate,
  setStudyDate,
}) {
  return (
    <div className="form-container-edu-exp">
      <h3>Educational Experience</h3>
      <form id="cv-form" action="" method="POST">
        <div className="form-field">
          <label htmlFor="school-name">School Name:</label>
          <input
            type="text"
            value={schoolName}
            id="school-name"
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="MIT"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="study-title">Title of study:</label>
          <input
            type="text"
            value={studyTitle}
            id="study-title"
            onChange={(e) => setStudyTitle(e.target.value)}
            placeholder="BSc Computer Science"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="study-date">Date of study:</label>
          <input
            type="date"
            value={studyDate}
            id="study-date"
            onChange={(e) => setStudyDate(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}
