import React, { useState, useEffect } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { getallcourse } from "../../Actions/courseaction";
import { useDispatch, useSelector } from "react-redux";
import { addquestions } from "../../Actions/quizaction";
import { useParams } from "react-router-dom";
import ShowQuestions from "../../Components/ShowQuestions";
const { v4: uuidv4 } = require("uuid");

function CreateQuiz() {
  const [show, setShow] = useState(false);
  const [showquizmodal, setShowQuizModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [marks, setMarks] = useState("");
  const [quizName, setQuizName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallcourse());
  }, []);
  const courseState = useSelector((state) => state.getcourseReducer);
  const { courses, loading, success } = courseState;
  //   console.log(courses);
  var id = useParams();
  var quiz__id;
  async function addquestion() {
    if (
      option1 === "" ||
      option2 === "" ||
      option3 === "" ||
      option4 === "" ||
      answer1 === ""
    ) {
      alert("Enter your options and answer correctly");
    } else {
      var questionId = uuidv4();
      console.log(id);
      var question = {
        question: question,
        questionId,
        quizId: quiz__id,
        marks: marks,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: answer1,
        id,
      };
      dispatch(addquestions(question));
    }
  }

  async function CreateQuiz() {
    try {
      var quizid = uuidv4();
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
  async function getquizid() {
    console.log(id);
    try {
      const response = await axios.post("/api/quiz/getquizid", { id });
      quiz__id = response.data[0].quiz_id;
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
  function callcreatequizfunctions() {
    CreateQuiz();
    closequizmodal();
  }
  async function callquestionfunctions() {
    await getquizid();
    addquestion();
  }
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-content-between">
        <h1>Quiz</h1>
        {/* {loading && <h1>Loading</h1>} */}
        <div>
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
              <Button variant="primary" onClick={callcreatequizfunctions}>
                Add New Quiz
              </Button>
              <Button onClick={closequizmodal}>Close</Button>
            </Modal.Footer>
          </Modal>
          <Button onClick={handleShow}>Add Question</Button>
        </div>

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
                  setQuestion(e.target.value);
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
                name="answer1"
                value={answer1}
                className="border-2 mb-2 px-2 py-1"
                placeholder="Enter your answer"
                onChange={(e) => {
                  setAnswer1(e.target.value);
                }}
              />
              <input
                name="marks"
                value={marks}
                className="border-2 mb-2 px-2 py-1"
                placeholder="Marks"
                onChange={(e) => {
                  setMarks(e.target.value);
                }}
              />
            </Modal.Body>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={callquestionfunctions}>
              AddQuestion
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <ShowQuestions id={id} />
    </div>
  );
}

export default CreateQuiz;
