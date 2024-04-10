/* eslint-disable react/prop-types */
import "../../../../../../../styles/FormPreview.css";

export default function GeneralInfoPreview({ generalInfo }) {
  return (
    <div className="preview-container-general-info">
      <h3>General Information Preview</h3>
      <p>
        <strong>Full Name: </strong> {generalInfo.fullName}
      </p>

      <p>
        <strong>Email: </strong> {generalInfo.email}
      </p>

      <p>
        <strong>Phone Number: </strong> {generalInfo.phoneNumber}
      </p>
    </div>
  );
}
