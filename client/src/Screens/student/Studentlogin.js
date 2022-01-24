import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentLogin } from "../../Actions/useraction";

function Studentlogin() {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const dispatch = useDispatch();

  function login() {
    const user = {
      email: userEmail,
      password: userPassword,
      role: "student",
    };
    dispatch(StudentLogin(user));
  }
  return (
    <div className="login flex justify-center text-center py-8">
      <div className="auth-options flex flex-col border-2 border-rose-500 px-2 py-2 px-8">
        <h1 className="heading mb-4">Student Sign in.</h1>
        <input
          type="email"
          placeholder="Email"
          className="input_email  mb-4 py-1 px-2 entry"
          value={userEmail}
          onChange={(e) => {
            setuserEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          className="input_password  mb-4 py-1 px-2 entry"
          value={userPassword}
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />

        <button
          className="signin_btn border-2 w-15 mb-4 py-1 px-2"
          onClick={login}
        >
          Sign in
        </button>

        <p className="new_account ">
          Don't have an account?
          <a
            href="/Studentregister"
            className="redirect_register hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Studentlogin;
