import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../Actions/useraction";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  Dropdown,
  DropdownButton,
  Nav as navlink,
  NavItem,
} from "react-bootstrap";

function Nav() {
  const dispatch = useDispatch();
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);
  function logoutUser() {
    dispatch(logoutuser());
  }
  const UserState = useSelector((state) => state.loginUserReducer);
  const { current_user } = UserState;

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
    <div className="Navbar h-14 nav-color flex ">
      <div className="Nav flex mt-2 flex-1">
        <navlink.Link
          className="cursor-pointer text-white text-md "
          href="/home"
        >
          Home
        </navlink.Link>
        {current_user == null ? (
          <navlink.Link
            href="/studentlogin"
            className="cursor-pointer student-route text-white text-md"
          >
            Student
          </navlink.Link>
        ) : null}
        {current_user == null ? (
          <navlink.Link
            href="/teacherlogin"
            className="teacher-route text-white text-md"
          >
            Teacher
          </navlink.Link>
        ) : null}
        {current_user != null && teacher ? (
          <navlink.Link
            href="/teacherscreen"
            className="all-course text-white text-md"
          >
            All courses
          </navlink.Link>
        ) : null}
        {current_user != null && student ? (
          <navlink.Link
            href="/studentscreen"
            className="all-course text-white text-md"
          >
            All courses
          </navlink.Link>
        ) : null}

        {current_user != null ? (
          <DropdownButton
            id="dropdown-basic-button"
            title={current_user.name}
            align="end"
          >
            {current_user == null ? null : (
              <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
            )}
            {teacher ? (
              <Dropdown.Item href="/addcourse">Add Course</Dropdown.Item>
            ) : null}
          </DropdownButton>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
