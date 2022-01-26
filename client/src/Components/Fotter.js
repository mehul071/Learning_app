import React from "react";
import "./Fotter.css";
import { AiFillGithub } from "react-icons/ai";

function Fotter() {
  return (
    <div className="fotter">
      <a
        className="text-4xl text-white py-4"
        href="https://github.com/mehul071"
      >
        <AiFillGithub className="ml-2 cursor-pointer" />
      </a>
    </div>
  );
}

export default Fotter;
