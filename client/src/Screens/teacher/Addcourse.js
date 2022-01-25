import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addcourse } from "../../Actions/courseaction";

function Addcourse() {
  const [course_name, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  function Addcourse() {
    if (localStorage.getItem("current_user"))
      var user = JSON.parse(localStorage.getItem("current_user"));
    var NewCourse = {
      course_name: course_name,
      description: description,
      made_by: user.email,
    };
    dispatch(addcourse(NewCourse));
  }

  return (
    <div>
      {/* <form> */}
      <div className="flex flex-col px-4">
        <h1>Add course</h1>

        <label className="mb-2">Course Name:</label>
        <input
          placeholder="Course Name"
          className="border-2"
          required
          onChange={(e) => {
            setCourseName(e.target.value);
          }}
        />
        <label className="mb-2">Course Description</label>
        <textarea
          className="border-2 "
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button onClick={Addcourse}>Add Course</button>
      </div>
      {/* </form> */}
    </div>
  );
}

export default Addcourse;
