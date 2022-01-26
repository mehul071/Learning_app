import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { TeacherLogin } from "../../Actions/useraction";

function Teacherlogin() {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const dispatch = useDispatch();

  function login() {
    const user = {
      email: userEmail,
      password: userPassword,
      role: "teacher",
    };
    dispatch(TeacherLogin(user));
  }
  return (
    <div className="login flex justify-center text-center py-8 ">
      <div className="auth-options flex flex-col border-2 px-6 py-6 box ">
        <h1 className="heading mb-4">Teacher Sign in.</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={userEmail}
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => {
              setuserPassword(e.target.value);
            }}
          />
        </FloatingLabel>
        <Button variant="primary" onClick={login} className="mt-4">
          Sign in
        </Button>
        <p className="new_account ">
          Don't have an account?
          <a
            href="/teacherregister"
            className="redirect_register hover:underline ml-1"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Teacherlogin;
