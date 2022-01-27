import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallquestions } from "../../Actions/quizaction";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { Button, Form } from "react-bootstrap";
import Question from "../../Components/Question";

function StudentQuiz() {
  const [ans, setAns] = useState("  ");
  const [check, setCheck] = useState(false);
  var courseId = useParams();
  const dispatch = useDispatch();
  const questionsState = useSelector((state) => state.getallquestionsReducer);
  const { questions, loading } = questionsState;

  // console.log(questions);
  useEffect(() => {
    dispatch(getallquestions(courseId));
  }, []);
  return (
    <div className="">
      {loading && <Loading />}
      {questions &&
        questions.map((ques, i) => {
          return <Question ques={ques} i={i} />;
        })}
    </div>
  );
}

export default StudentQuiz;
