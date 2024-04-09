import "../../../../../../../styles/FormEdit.css";

export default function PracticalExp({
  companyName,
  setCompanyName,
  positionTitle,
  setPositionTitle,
  jobResponsibilities,
  setJobResponsibilities,
  startWorkDate,
  setStartWorkDate,
  endWorkDate,
  setEndWorkDate,
}) {
  return (
    <div className="form-container-practical-exp">
      <h3>Practical Experience</h3>
      <form id="cv-form" action="" method="POST">
        <div className="form-field">
          <label htmlFor="compamy-name">Company Name:</label>
          <input
            type="text"
            value={companyName}
            id="company-name"
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Amazon"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="position-title">Position Title:</label>
          <input
            type="text"
            value={positionTitle}
            id="position-title"
            onChange={(e) => setPositionTitle(e.target.value)}
            placeholder="Full Stack Developer"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="job-responsibilities">Job Responsibilities:</label>
          <textarea
            type="text"
            value={jobResponsibilities}
            id="job-responsibilities"
            onChange={(e) => setJobResponsibilities(e.target.value)}
            placeholder="Debugging, software developing, etc."
          ></textarea>
        </div>

        <div className="form-field">
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            value={startWorkDate}
            id="start-date"
            onChange={(e) => setStartWorkDate(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            value={endWorkDate}
            id="end-date"
            onChange={(e) => setEndWorkDate(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}
