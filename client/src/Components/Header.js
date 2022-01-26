import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../Actions/useraction";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Nav as navlink, NavItem } from "react-bootstrap";

function Nav() {
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
    <div className="Navbar h-14 bg-slate-400 flex text-black ">
      <div className="Nav flex mt-4 grow ">
        <navlink.Link className="cursor-pointer" href="/home">
          Home
        </navlink.Link>
        {current_user == null ? (
          <navlink.Link
            href="/studentlogin"
            className="mr-4 cursor-pointer student-route"
          >
            Student
          </navlink.Link>
        ) : null}
        {current_user == null ? (
          <navlink.Link href="/teacherlogin" className="teacher-route">
            Teacher
          </navlink.Link>
        ) : null}

        {current_user == null ? null : (
          <navlink.Link onClick={logoutUser} className="logout">
            logout
          </navlink.Link>
        )}
        {current_user != null ? (
          <navlink.Link href="/teacherscreen" className="all-course">
            All courses
          </navlink.Link>
        ) : null}
        {teacher ? (
          <navlink.Link href="/addcourse" className="add-course">
            Add course
          </navlink.Link>
        ) : null}
        <div className="dropdown">
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
}

export default Nav;
