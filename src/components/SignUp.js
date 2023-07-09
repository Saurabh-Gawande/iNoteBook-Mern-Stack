import React, { useState } from "react";

function SignUp() {
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
    const response = await fetch("http://localhost:4500/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    
    localStorage.setItem("token", json.authToken);
    setCredential({ name: "", email: "", password: "", cpassword: "" });
  };

  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label htmlFor="name">Name</label>
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
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">Email address</label>
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
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
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
        </div>
        <div className="form-group my-2">
          <label htmlFor="cpassword">Confirm Password</label>
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
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
