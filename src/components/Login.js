import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

function Login() {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4500/api/auth/login", {
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
    console.log(json);
    if (json.success === false) {
      alert("Invalid Credentials");
    } else {
      setCredential({ email: "", password: "" });
      sessionStorage.setItem("loginToken", json.authToken);
      navigate("/");
    }
  };

  function onchange(e) {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img src="./iNotebook.svg" alt="iNotebook" />
        </div>
        <div className="login__desc">
          <p>Secure Your Notes, Unlock Your Creativity</p>
          <p style={{ color: "royalblue", fontSize: "25px" }}>
            HandCrafted with ❤️ by{" "}
          </p>
          <h3>Saurabh Gawande</h3>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p
              // onClick={signIn}
              >
                Continue With Google
              </p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://th.bing.com/th/id/OIP.YBdpYxDSg6AtMUKXHme2MQHaHa?rs=1&pid=ImgDetMain"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
            <div className="login__authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                iNotebook's{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
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
              </div>
              <div className="login__inputField">
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
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSubmit}>Login</button>
            </div>
            <label style={{ padding: 10 }}>
              Don't have an account? <a href="/signup">SignUp here</a>
            </label>
          </div>
        </div>
        <div className="login__lang">
          <p>हिन्दी</p>
          {/* <ArrowForwardIos fontSize="small" /> */}
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; iNotebook Fake Inc. 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
