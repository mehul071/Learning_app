import React from "react";
import { useDispatch } from "react-redux";
import { logoutuser } from "../Actions/useraction";

function Navbar() {
  const dispatch = useDispatch();
  function logoutUser() {
    dispatch(logoutuser());
  }
  return (
    <div className="Navbar h-14 bg-slate-400 flex">
      <a className="mr-4 cursor-pointer">Home</a>
      <a href="/studentlogin" className="mr-4 cursor-pointer border-2">
        Student
      </a>
      <a href="/teacherlogin" className="cursor-pointer border-2">
        Teacher
      </a>
      <a className="border-2" onClick={logoutUser}>
        logout
      </a>
    </div>
  );
}

export default Navbar;
