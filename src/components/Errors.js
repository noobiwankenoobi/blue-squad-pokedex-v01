import React from "react";

const Errors = (props) => {
  const { errorMessage } = props;

  // Error JSX
  let errorDiv = (
    <div className="error-div">
      <h3>{errorMessage}</h3>
    </div>
  );

  return errorDiv;
};

export default Errors;
