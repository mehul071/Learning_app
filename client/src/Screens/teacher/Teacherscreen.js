import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { getallcourse } from "../../Actions/courseaction";
import { FiEdit } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";

function Teacherscreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallcourse());
  }, []);
  const courseState = useSelector((state) => state.getcourseReducer);
  const { courses } = courseState;

  return (
    <div className="mt-4">
      <div className="px-12">
        <Table hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Quiz</th>
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
                    <div className="flex items-center cursor-pointer">
                      <span className="items-center">Create</span>
                      <a href={`/quiz/${course.course_id}`}>
                        <IoCreate />
                      </a>
                    </div>

                    <td>
                      <div className="flex ">
                        <a href={`/editcourse/${course.course_id}`}>
                          <FiEdit />
                        </a>
                      </div>
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

export default Teacherscreen;
