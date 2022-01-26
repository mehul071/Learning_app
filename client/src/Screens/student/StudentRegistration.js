import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StudentRegister } from "../../Actions/useraction";
import "./register.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";

function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const dispatch = useDispatch();
  function registerUser() {
    if (name === "" || email === "") {
      alert("Enter Name and email correctly");
    }
    if (password !== confirmPass) {
      alert("Password doesn't match");
    } else {
      var user = {
        name: name,
        email: email,
        password: password,
        role: "student",
      };
      dispatch(StudentRegister(user));
    }
  }
  return (
    <div className="register flex text-center justify-center py-2 mt-4">
      <div className="box flex flex-col border-2 px-8">
        <h1 className="text-3xl mb-3">Student Register</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="name"
            placeholder="Name"
            className="register_name mb-4 entry"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FloatingLabel contolId="floatingInput" label="Name" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="register_email mb-4 py-1 px-2 entry"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              className="register_password py-1 px-2 entry"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FloatingLabel>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            className="input_confirmpass mb-4 py-1 px-2 entry"
            value={confirmPass}
            onChange={(e) => {
              setconfirmPass(e.target.value);
            }}
          />
        </FloatingLabel>
        <Button className="signin_btn border" onClick={registerUser}>
          Register
        </Button>
        <span className="mt-2 redirect_login hover:underline mb-2">
          <a href="/login">Back to Login</a>
        </span>
      </div>
    </div>
  );
}

export default StudentRegistration;
