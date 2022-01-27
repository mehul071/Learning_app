import React, { useEffect } from "react";
import axios from "axios";

function ShowQuestions({ id }) {
  useEffect(() => {
    async function getallquestions() {
      console.log("liuhlu");
      try {
        const response = await axios.post("/api/question/getallquestions", {
          id,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getallquestions();
  }, []);

  return <div></div>;
}

export default ShowQuestions;
