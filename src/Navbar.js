import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            {!sessionStorage.getItem("loginToken") ? (
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  navigate("/login");
                  sessionStorage.setItem("loginToken", "");
                }}
              >
                Logout
              </button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
