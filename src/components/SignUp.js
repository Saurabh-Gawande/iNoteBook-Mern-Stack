import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const host = "http://localhost:4500";
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function onchange(e) {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    const { name, email, password } = credential;
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);

    sessionStorage.setItem("signUpToken", json.authToken);
    setCredential({ name: "", email: "", password: "", cpassword: "" });
    navigate("/");
  };

  return (
    <div>
      <div class="vh-93 vw-100" style={{ height: "93vh", padding: "5%" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              aria-describedby="emailHelp"
                              placeholder="Enter Name"
                              onChange={onchange}
                              value={credential.name}
                              required
                            />
                            <label class="form-label" htmlFor="name">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              className="form-control "
                              id="email"
                              name="email"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              onChange={onchange}
                              value={credential.email}
                              required
                            />
                            <label class="form-label" htmlFor="email">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              value={credential.password}
                              className="form-control "
                              id="password"
                              name="password"
                              placeholder="Password"
                              onChange={onchange}
                              required
                            />
                            <label class="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              className="form-control "
                              id="cpassword"
                              value={credential.cpassword}
                              name="cpassword"
                              placeholder="Password"
                              onChange={onchange}
                              required
                            />
                            <label class="form-label" htmlFor="cpassword">
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                            disabled={
                              credential.name === "" ||
                              credential.password === "" ||
                              credential.cpassword === "" ||
                              credential.email === ""
                            }
                          >
                            Register
                          </button>
                        </div>
                        <div class="form-check d-flex justify-content-center mb-5">
                          <label class="form-check-label" for="form2Example3">
                            Have already an account? <a href="/">login here</a>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
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

export default SignUp;
