import React, { useEffect } from "react";
import axios from "axios";

function ShowQuestions({ id }) {
  useEffect(() => {
    async function getallquestions() {
      try {
        const response = await axios.post("/api/question/getallquestions", {
          id,
        });
        console.log(response.data);
        const result = response.data.filter((res, i) => id === res[i]);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    getallquestions();
  }, []);
  return <div>{/* <h2>thiosf</h2> */}</div>;
}

export default ShowQuestions;
