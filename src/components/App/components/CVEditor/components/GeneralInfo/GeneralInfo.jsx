/* eslint-disable react/prop-types */
import "@styles/styles/FormEdit.css";

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleEdit = (e) => {
    setGeneralInfo( {...generalInfo, [e.target.name]: e.target.value });
  };


   
  return (
    <div className="form-container-general-info">
      <h3>General Information</h3>
      <form id="cv-form" action="" method="POST">
        <div className="form-field">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            value={generalInfo.fullName}
            name={"fullName"}
            id="full-name"
            onChange={handleEdit}
            placeholder="Hellen Papadakis"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={generalInfo.email}
            name={"email"}
            id="email"
            onChange={handleEdit}
            placeholder="helenpapadakis@mail.com"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="phone-number">Phone Number:</label>
          <input
            type="tel"
            value={generalInfo.phoneNumber}
            name={"phoneNumber"}
            id="phone-number"
            onChange={handleEdit}
            placeholder="+306978836512"
          ></input>
        </div>
      </form>
    </div>
  );
}
