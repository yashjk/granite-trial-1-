import React from "react";

function Errors({ errors, message }) {
  return (
    <React.Fragment>
      <div className={`alert alert-${message}`}>
        {errors.map((error , i) => (
          <li key={i}>{error}</li>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Errors;
