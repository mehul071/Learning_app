import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { getallcourse } from "../../Actions/courseaction";

function Teacherscreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallcourse());
  }, []);
  const courseState = useSelector((state) => state.getcourseReducer);
  const { courses } = courseState;

  console.log(courses);
  return (
    <div className="mt-4">
      <div className="px-6">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.map((course) => {
                return (
                  <tr key={courses.course_id}>
                    <td>{course.course_name}</td>
                    <td>{course.description}</td>
                    <td>{course.made_by}</td>
                    <td></td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Teacherscreen;
