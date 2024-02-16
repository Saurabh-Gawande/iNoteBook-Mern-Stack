import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

function Login() {
  const host = "http://localhost:4500";
  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    if (json.success === false) {
      alert("Invalid Credentials");
    } else {
      setCredential({ email: "", password: "" });
      sessionStorage.setItem("loginToken", json.authToken);
      navigate("/home");
    }
  };

  function onchange(e) {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div class="vh-93 vw-90" style={{ margin: "3%" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div className="login__desc">
                    <div className="inotebook">iNotebook</div>
                    <p>Secure Your Notes, Unlock Your Creativity!</p>
                    <p style={{ color: "royalblue", fontSize: "25px" }}>
                      HandCrafted with ❤️ by{" "}
                    </p>
                    <h4>Saurabh Gawande</h4>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>
                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              name="email"
                              value={credential.email}
                              onChange={onchange}
                              required
                            />
                            <label class="form-label" htmlFor="email">
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Password"
                              name="password"
                              value={credential.password}
                              onChange={onchange}
                              required
                            />
                            <label class="form-label" htmlFor="cpassword">
                              Your password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                            disabled={
                              credential.email === "" ||
                              credential.password === ""
                            }
                          >
                            Login
                          </button>
                        </div>
                        <div class="form-check d-flex justify-content-center mb-5">
                          <label class="form-check-label" for="form2Example3">
                            Don't have an account?{" "}
                            <a href="/signup">signup here</a>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
