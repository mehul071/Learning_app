import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TeacherRegister } from "../../Actions/useraction";
import { Button, FloatingLabel, Form } from "react-bootstrap";

function TeacherRegisteration() {
  const [teachername, setName] = useState("");
  const [teacheremail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const dispatch = useDispatch();
  function registerUser() {
    if (password !== confirmPass) {
      alert("Password doesn't match");
    } else {
      var user = {
        name: teachername,
        email: teacheremail,
        password: password,
        role: "teacher",
      };
      console.log(user);
      dispatch(TeacherRegister(user));
    }
  }
  return (
    <div className="register flex text-center justify-center py-8">
      <div className="box flex flex-col px-12 mt-2">
        <h1 className="text-3xl mb-3 mt-4">Teacher Register</h1>
        <FloatingLabel contolId="floatingInput" label="Name">
          <Form.Control
            type="name"
            placeholder="Name"
            className="register_name mb-4 "
            value={teachername}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel contolId="floatingInput" label="Email address">
          <Form.Control
            type="email"
            placeholder="Enter Email"
            className="register_email mb-4 "
            value={teacheremail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </FloatingLabel>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          className="register_password mb-4 py-1 px-2 entry"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          className="input_confirmpass mb-4 py-1 px-2 entry"
          value={confirmPass}
          onChange={(e) => {
            setconfirmPass(e.target.value);
          }}
        />
        <button
          className="signin_btn border bg-black text-white"
          onClick={registerUser}
        >
          Register
        </button>
        <p className="mt-2 redirect_login hover:underline mb-2">
          <a href="/login">Back to Login</a>
        </p>
      </div>
    </div>
  );
}

export default TeacherRegisteration;
