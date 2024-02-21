import React from "react";
import NotFoundImg from "../Style/NotFound.svg";

function NotFound() {
  return (
    <div>
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
            src={NotFoundImg}
            alt="Security"
            style={{ width: "80%", maxWidth: "200px", margin: "7%" }}
          />

          <h3 style={{ margin: "5%" }}>
            Page Not Found. Please return to the <a href="/home">Home</a> Page.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
