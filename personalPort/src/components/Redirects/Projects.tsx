import React from "react";
import { Link } from "react-router-dom";

function Second() {
  return (
    <div
      style={{
        textAlign: "left", // Ensure text starts from left
        padding: "20px", // Optional padding for aesthetics
      }}
    >
      <header>
        <Link to="/">Go back</Link>
      </header>
    </div>
  );
}

export default Second;
