import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

function Editcoursescreen() {
  const [course_name, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  var courseId = useParams();
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
        console.log("error occured in fetching" + error);
      }
    }

    fetchByid();
  }, []);
  async function handleEdit() {
    if (course_name === "" || description === "") {
      alert("Enter the course Name and details");
    } else {
      try {
        // console.log(course_name, description, courseId);
        const response = await axios.post("/api/course/update", {
          id: courseId,
          course_name,
          description,
        });
        alert("updated");
      } catch (error) {
        console.log("error is coming" + error);
      }
    }
  }
  async function RemoveCourse() {
    try {
      const response = await axios.post("/api/course/delete", { id: courseId });
      window.location.href = "/teacherscreen";
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col px-4 justify-center text-center border-2 ">
        <h1>Edit</h1>
        <label className="mb-2">Course Name:</label>
        <input
          placeholder="Course Name"
          className="border-2 px-2 py-2"
          required
          name="course"
          value={course_name}
          onChange={(e) => {
            setCourseName(e.target.value);
          }}
          required
        />
        <label className="mb-2">Course Description</label>
        <textarea
          className="border-2 px-2 py-2 "
          value={description}
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <div className="flex">
          <Button
            className="border-2 mt-4 w-40"
            variant="info"
            onClick={handleEdit}
          >
            Update course
          </Button>
          <button onClick={RemoveCourse}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editcoursescreen;
