import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StudentRegister } from "../../Actions/useraction";
import "./register.css";

function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const dispatch = useDispatch();
  function registerUser() {
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
    <div className="register flex text-center justify-center py-8">
      <div className="box flex flex-col border-2 border-rose-500 px-8">
        <h1 className="text-3xl mb-3">Student Register</h1>
        <input
          type="name"
          placeholder="Name"
          className="register_name mb-4 py-1 px-2 entry"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="register_email mb-4 py-1 px-2 entry"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="register_password mb-4 py-1 px-2 entry"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input_confirmpass mb-4 py-1 px-2 entry"
          value={confirmPass}
          onChange={(e) => {
            setconfirmPass(e.target.value);
          }}
        />
        <button className="signin_btn border" onClick={registerUser}>
          Register
        </button>
        <h1 className="mt-2 redirect_login hover:underline mb-2">
          <a href="/login">Back to Login</a>
        </h1>
      </div>
    </div>
  );
}

export default StudentRegistration;
