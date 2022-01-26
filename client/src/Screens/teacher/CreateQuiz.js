import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { set } from "mongoose";
const { v4: uuidv4 } = require("uuid");

function CreateQuiz() {
  const [show, setShow] = useState(false);
  const [showquizmodal, setShowQuizModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [quizName, setQuizName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  var id = useParams();
  async function addquestion() {
    if (
      option1 === "" ||
      option2 === "" ||
      option3 === "" ||
      option4 === "" ||
      option5 === "" ||
      answer1 === ""
    ) {
      alert("Enter your options and answer correctly");
    } else {
      var question = {
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        option5: option5,
        answer1: answer1,
      };
      dispatch(addquestion(question));
    }
  }
  async function CreateQuiz() {
    try {
      var quizid = uuidv4();
      console.log(id);
      const response = await axios.post("/api/quiz/createquiz", {
        id,
        quiz_id: quizid,
        Quizname: quizName,
      });
      alert("Quiz created");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  function showquiz() {
    setShowQuizModal(true);
  }
  function closequizmodal() {
    setShowQuizModal(false);
  }
  function callfunctions() {
    CreateQuiz();
    closequizmodal();
  }
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-content-between">
        <h1>Quiz</h1>
        <Button onClick={showquiz}>Create Quiz</Button>
        <Modal
          show={showquizmodal}
          onHide={closequizmodal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add quiz</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              placeholder="Enter Quiz name"
              value={quizName}
              className="border-2"
              onChange={(e) => {
                setQuizName(e.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={callfunctions}>
              Add New Quiz
            </Button>
            <Button onClick={closequizmodal}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* ///////////////////////////////// */}
        <Button onClick={handleShow}>Add Question</Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Question</Modal.Title>
          </Modal.Header>
          <div className="flex justify-content-center text-center">
            <Modal.Body className="flex flex-col text-center justify-center px-6 py-4">
              <input
                placeholder="Enter Question"
                className="border-2 mb-2 px-2 py-1"
                value={question}
                onChange={(e) => {
                  setOption1(e.target.value);
                }}
              />
              <input
                name="option1"
                value={option1}
                className="border-2 mb-2 px-2 py-1"
                placeholder="Enter your option 1"
                onChange={(e) => {
                  setOption1(e.target.value);
                }}
              />
              <input
                name="option2"
                value={option2}
                className="border-2 mb-2 px-2 py-1"
                placeholder="Enter your option 2"
                onChange={(e) => {
                  setOption2(e.target.value);
                }}
              />
              <input
                name="option3"
                value={option3}
                className="border-2 mb-2 px-2 py-1"
                placeholder="Enter your option 3"
                onChange={(e) => {
                  setOption3(e.target.value);
                }}
              />
              <input
                name="option4"
                value={option4}
                className="border-2 mb-2 px-2 py-1"
                placeholder="Enter your option 4"
                onChange={(e) => {
                  setOption4(e.target.value);
                }}
              />
              <input
                name="option5"
                value={option5}
                className="border-2 mb-2 px-2 py-1"
                placeholder="Enter your option 5"
                onChange={(e) => {
                  setOption5(e.target.value);
                }}
              />
              <input
                name="answer1"
                value={answer1}
                className="border-2 mb-2 px-2 py-1"
                placeholder="Enter your answer"
                onChange={(e) => {
                  setAnswer1(e.target.value);
                }}
              />
            </Modal.Body>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addquestion}>
              AddQuestion
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default CreateQuiz;
