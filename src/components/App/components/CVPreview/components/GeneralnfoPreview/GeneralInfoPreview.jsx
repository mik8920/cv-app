import "../../../../../../../styles/FormPreview.css";

import { Fragment } from "react";

export default function GeneralInfoPreview({ fullName, email, phoneNumber }) {
  return (
    <div className="preview-container-general-info">
      <h3>General Information Preview</h3>
      <p>
        <strong>Full Name: </strong> {fullName}
      </p>

      <p>
        <strong>Email: </strong> {email}
      </p>

      <p>
        <strong>Phone Number: </strong> {phoneNumber}
      </p>
    </div>
  );
}
