import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Editcoursescreen() {
  const [course_name, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  var courseId = useParams();
  console.log(courseId);
  useEffect(() => {
    async function fetchByid() {
      try {
        const response = await axios.post("/api/course/getbyid", {
          id: courseId,
        });
        // console.log(response);
        setCourseName(response.data.course_name);
        setDescription(response.data.description);
      } catch (error) {
        alert("error occured in fetching" + error);
      }
    }

    fetchByid();
  }, []);
  async function handleEdit() {
    try {
      console.log(course_name, description, courseId);
      const response = await axios.post(
        "/api/course/update",
        course_name,
        description,
        { id: courseId }
      );
      console.log(response);
    } catch (error) {
      alert("error is coming" + error);
    }
  }
  return (
    <div>
      <div className="flex flex-col px-4">
        <h1>Edit</h1>
        <label className="mb-2">Course Name:</label>
        <input
          placeholder="Course Name"
          className="border-2 px-2 py-2"
          required
          value={course_name}
          onChange={(e) => {
            setCourseName(e.target.value);
          }}
          required
        />
        <label className="mb-2">Course Description</label>
        <textarea
          className="border-2 "
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button className="border-2" onClick={handleEdit}>
          Update course
        </button>
      </div>
    </div>
  );
}

export default Editcoursescreen;
