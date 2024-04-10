/* eslint-disable react/prop-types */
import "../../../../../../../styles/FormEdit.css";

export default function PracticalExp({ practicalExp, setPracticalExp }) {
  return (
    <div className="form-container-practical-exp">
      <h3>Practical Experience</h3>
      <form id="cv-form" action="" method="POST">
        <div className="form-field">
          <label htmlFor="compamy-name">Company Name:</label>
          <input
            type="text"
            value={practicalExp.companyName}
            id="company-name"
            onChange={(e) =>
              setPracticalExp({ ...PracticalExp, compamyName: e.target.value })
            }
            placeholder="Amazon"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="position-title">Position Title:</label>
          <input
            type="text"
            value={practicalExp.positionTitle}
            id="position-title"
            onChange={(e) =>
              setPracticalExp({
                ...PracticalExp,
                positionTitle: e.target.value,
              })
            }
            placeholder="Full Stack Developer"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="job-responsibilities">Job Responsibilities:</label>
          <textarea
            type="text"
            value={practicalExp.jobResponsibilities}
            id="job-responsibilities"
            onChange={(e) =>
              setPracticalExp({
                ...PracticalExp,
                jobResponsibilities: e.target.value,
              })
            }
            placeholder="Debugging, software developing, etc."
          ></textarea>
        </div>

        <div className="form-field">
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            value={practicalExp.startWorkDate}
            id="start-date"
            onChange={(e) =>
              setPracticalExp({
                ...PracticalExp,
                startWorkDate: e.target.value,
              })
            }
          ></input>
        </div>
        <div className="form-field">
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            value={practicalExp.endWorkDate}
            id="end-date"
            onChange={(e) =>
              setPracticalExp({ ...PracticalExp, endWorkDate: e.target.value })
            }
          ></input>
        </div>
      </form>
    </div>
  );
}
