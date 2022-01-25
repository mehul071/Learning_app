import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../Actions/useraction";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);
  function logoutUser() {
    dispatch(logoutuser());
  }
  const UserState = useSelector((state) => state.loginUserReducer);
  const { current_user } = UserState;
  // console.log(current_user.role);
  useEffect(() => {
    if (current_user != null) {
      if (current_user.role === "student") {
        setStudent(true);
      } else if (current_user.role === "teacher") {
        setTeacher(true);
      }
    }
  });

  return (
    <div className="Navbar h-14 bg-slate-400 flex text-black">
      <div className="Nav flex mt-4">
        <a className="mr-4 cursor-pointer" href="/home">
          Home
        </a>
        <a href="/studentlogin" className="mr-4 cursor-pointer">
          Student
        </a>
        <a href="/teacherlogin" className="cursor-pointer mr-4">
          Teacher
        </a>
        <a className="cursor-pointer mr-4" onClick={logoutUser}>
          logout
        </a>
        <a className="mr-4" href="/teacherscreen">
          All courses
        </a>
        {teacher ? (
          <a className="cursor-pointer" href="/addcourse">
            Add course
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
