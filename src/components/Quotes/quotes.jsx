import React, { Component } from "react";
import { Quote } from "./quotes.style";

export default class Quotes extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <Quote>
          "Good interpersonal communication skills, can work with others and
          initiate communications with co-workers"
        </Quote>
        - Jimmy Xu (Mentor at OIT)
        <Quote>
          "Excellent attitude on learning new concepts. Daniel is willing to
          pick up nodeJs which he knew nothing about before coming to work here.
          He was willing to spend time to add unit test.. ..He had come to me
          with great questions. "
        </Quote>
        - Jimmy Xu (Mentor at OIT)
      </div>
    );
  }
}
