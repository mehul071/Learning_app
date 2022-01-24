import React, { useState } from "react";
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
    <div className="login flex justify-center text-center py-8">
      <div className="auth-options flex flex-col border-2 border-rose-500 px-2 py-2 px-8">
        <h1 className="heading mb-4">Teacher Sign in.</h1>
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
