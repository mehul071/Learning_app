import React from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

function Question({ ques, i }) {
  var courseId = useParams();
  async function checkanswer1({ option, questionId }) {
    console.log(questionId);
    try {
      const response = await axios.post("/api/question/getanswer", {
        questionId,
      });
      // console.log(response.data);
      if (option == response.data) {
        alert("correct");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function checkanswer2({ option, questionId }) {
    console.log(questionId);
    try {
      const response = await axios.post("/api/question/getanswer", {
        questionId,
      });
      // console.log(response.data);/
      if (option == response.data) {
        alert("correct");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function checkanswer3({ option, questionId }) {
    console.log(questionId);
    try {
      const response = await axios.post("/api/question/getanswer", {
        questionId,
      });
      // console.log(response.data);/
      if (option == response.data) {
        alert("correct");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function checkanswer4({ option, questionId }) {
    console.log(questionId);
    try {
      const response = await axios.post("/api/question/getanswer", {
        questionId,
      });
      // console.log(response.data);/
      if (option == response.data) {
        alert("correct");
      }
    } catch (error) {
      console.log(error);
    }
  }
  function checkSubmit() {}
  return (
    <>
      <form key={ques._id} className=" text-center justify-center px-8">
        <div className="border-2 py-4 px-4 box mt-4 ">
          <div className="flex block">
            Question {i + 1}:<p>{ques.question}</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                type="radio"
                aria-label="radio 1"
                name="option"
                className="mr-2"
                onChange={(e) => {
                  console.log(ques.questionId);
                  checkanswer1({
                    option: ques.option1,
                    questionId: ques.questionId,
                  });
                }}
              />
              <Form.Check.Label>{ques.option1}</Form.Check.Label>
            </div>
            <div className="flex mt-2 items-center">
              <input
                type="radio"
                aria-label="radio 2"
                name="option"
                className="mr-2"
                onChange={(e) => {
                  console.log(e.target.value);
                  checkanswer2({
                    option: ques.option2,
                    questionId: ques.questionId,
                  });
                }}
              />
              <Form.Check.Label>{ques.option2}</Form.Check.Label>
            </div>
            <div className="flex  mt-2 items-center">
              <input
                type="radio"
                aria-label="radio 3"
                name="option"
                className="mr-2"
                onChange={(e) => {
                  console.log(e.target.value);
                  checkanswer3({
                    option: ques.option3,
                    questionId: ques.questionId,
                  });
                }}
              />
              <Form.Check.Label>{ques.option3}</Form.Check.Label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                aria-label="radio 4"
                name="option"
                className="mr-2"
                onChange={(e) => {
                  console.log(e.target.value);
                  checkanswer4({
                    option: ques.option4,
                    questionId: ques.questionId,
                  });
                }}
              />
              <Form.Check.Label>{ques.option4}</Form.Check.Label>
            </div>
          </div>
          {/* <Button onClick={checkSubmit}>Submit</Button> */}
        </div>
      </form>
    </>
  );
}

export default Question;
