import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { getallcourse } from "../../Actions/courseaction";

function Studentscreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallcourse());
  }, []);
  const courseState = useSelector((state) => state.getcourseReducer);
  const { courses } = courseState;
  function DeleteCourse(id) {
    console.log(id);
    // dispatch(DeleteCourse());
  }

  // console.log(courses);
  return (
    <div className="mt-4">
      <div className="px-12">
        <Table hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Quiz</th>
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.map((course, i) => {
                return (
                  <tr key={courses.course_id}>
                    <td>{i + 1}</td>
                    <td>{course.course_name}</td>
                    <td>{course.description}</td>
                    <td>{course.made_by}</td>
                    <td>
                      <a href={`/studentquiz/${course.course_id}`}>Take Quiz</a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Studentscreen;
