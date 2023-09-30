import React, { useEffect } from "react";
import brandLogo from "../assets/logo.png";
import linkIcon from "../assets/link.png";
import { AiOutlineLink } from "react-icons/ai";
import aiImage from "../assets/ai.avif";

const Intro = () => {
  return (
    <div className="hero">
      <div className="header">
        <div className="logo">
          <img
            src={brandLogo}
            style={{ height: "50px", width: "75px" }}
            alt="ailyzer-logo"
          />
          <h1>
            Sum<span style={{ color: "#29ABDF" }}>Z</span>
          </h1>
        </div>
        <a href="https://github.com/ritxsh7/" target="blank">
          Github
        </a>
      </div>
      <div className="announce">
        <center>
          <h1 className="text-3xl">Summarize articles </h1> <br />
          <h1> with OpenAI GPT-4</h1>
          <p>
            Simplify your reading with sumZ. sumZ analyses and summarizes all
            the text in an article and puts it in simpler words for you to
            understand. In this age of AI why do hardwork and scarthing your
            head when AI is there to assist you ? Explore below.
          </p>
        </center>
      </div>
    </div>
  );
};

export default Intro;
