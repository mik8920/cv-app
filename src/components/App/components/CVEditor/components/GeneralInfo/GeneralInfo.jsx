import "../../../../../../../styles/FormEdit.css";

export default function GeneralInfo({
  fullName,
  setFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <div className="form-container-general-info">
      <h3>General Information Preview</h3>
      <form id="cv-form" action="" method="POST">
        <div className="form-field">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            value={fullName}
            id="full-name"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Hellen Papadakis"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="helenpapadakis@mail.com"
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="phone-number">Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            id="phone-number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+306978836512"
          ></input>
        </div>
      </form>
    </div>
  );
}
