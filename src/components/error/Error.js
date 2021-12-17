import React from "react";


import { ErrorLayout } from "./Error.elements";
function Error({ padding, margin, errorMessage, borderRadius, variant }) {
  return (
    <ErrorLayout
      variant={variant}
      borderRadius={borderRadius}
      padding={padding}
      margin={margin}   
    >
      <p>{errorMessage}</p>
    </ErrorLayout>
  );
}

export default Error;
