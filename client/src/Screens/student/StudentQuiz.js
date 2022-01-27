import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallquestions } from "../../Actions/quizaction";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { Button, Form } from "react-bootstrap";

function StudentQuiz() {
  const [ans, setAns] = useState("  ");

  console.log(ans);
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
          return (
            <div key={ques._id} className=" text-center justify-center px-8">
              <div className="border-2 py-4 px-4 box mt-4 ">
                <div className="flex block">
                  Question {i + 1}:<p>{ques.question}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      name="option"
                      className="mr-2"
                      value={ans}
                    />
                    <Form.Check.Label>{ques.option1}</Form.Check.Label>
                  </div>
                  <div className="flex mt-2">
                    <Form.Check
                      type="radio"
                      aria-label="radio 2"
                      name="option"
                      className="mr-2"
                    />
                    <Form.Check.Label>{ques.option2}</Form.Check.Label>
                  </div>
                  <div className="flex  mt-2">
                    <Form.Check
                      type="radio"
                      aria-label="radio 3"
                      name="option"
                      className="mr-2"
                    />
                    <Form.Check.Label>{ques.option3}</Form.Check.Label>
                  </div>
                  <div className="flex items-center mt-2">
                    <Form.Check
                      type="radio"
                      aria-label="radio 4"
                      name="option"
                      className="mr-2"
                    />
                    <Form.Check.Label>{ques.option4}</Form.Check.Label>
                  </div>
                  <Button className="w-24 mt-4">Submit</Button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default StudentQuiz;
