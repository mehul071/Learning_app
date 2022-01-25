import React from "react";
import { useDispatch } from "react-redux";
import { logoutuser } from "../Actions/useraction";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  function logoutUser() {
    dispatch(logoutuser());
  }
  // useEffect(()=>{
  //   if(localStorage.getItem("current_user"))

  // },[])
  return (
    <div className="Navbar h-14 bg-slate-400 flex text-black">
      <div className="Nav flex mt-4">
        <a className="mr-4 cursor-pointer">Home</a>
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
        <a className="cursor-pointer" href="/addcourse">
          Add course
        </a>
      </div>
    </div>
  );
}

export default Navbar;
