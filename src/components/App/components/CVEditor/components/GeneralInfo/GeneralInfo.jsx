/* eslint-disable react/prop-types */
import "../../../../../../../styles/FormEdit.css";

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
  return (
    <div className="form-container-general-info">
      <h3>General Information</h3>
      <form id="cv-form" action="" method="POST">
        <div className="form-field">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            value={generalInfo.fullName}
            id="full-name"
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, fullName: e.target.value })
            }
            placeholder="Hellen Papadakis"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={generalInfo.email}
            id="email"
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, email: e.target.value })
            }
            placeholder="helenpapadakis@mail.com"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="phone-number">Phone Number:</label>
          <input
            type="tel"
            value={generalInfo.phoneNumber}
            id="phone-number"
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value })
            }
            placeholder="+306978836512"
          ></input>
        </div>
      </form>
    </div>
  );
}
