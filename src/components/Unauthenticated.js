import React from "react";

function Unauthenticated() {
  return (
    <div
      style={{
        minHeight: "93vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "32vw",
          maxHeight: "50vh",
          backgroundColor: "white",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          flexDirection: "column",
          margin: "2%",
        }}
      >
        <img
          src="./Security.svg"
          alt="Security"
          style={{ width: "80%", maxWidth: "200px", margin: "7%" }}
        />

        <h3 style={{ margin: "5%" }}>
          Please <a href="/">Login</a> to access this page, or if you are new
          here, please <a href="/signup">SignUp</a>.
        </h3>
      </div>
    </div>
  );
}

export default Unauthenticated;
