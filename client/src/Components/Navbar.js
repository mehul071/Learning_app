import React from "react";

function Navbar() {
  return (
    <div className="Navbar h-14 bg-slate-400 flex">
      <a className="mr-4 cursor-pointer">Home</a>
      <a href="/Studentregister" className="mr-4 cursor-pointer">
        Student
      </a>
      <a href="/Teacherregister" className="cursor-pointer">
        Teacher
      </a>
    </div>
  );
}

export default Navbar;
