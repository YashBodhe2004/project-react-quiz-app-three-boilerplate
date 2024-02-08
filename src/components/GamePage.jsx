import React, { useState } from "react";
import quizQuestion from "../resources/quizQuestion.json";
import { Link, useNavigate } from "react-router-dom";

const GamePage = () => {
  const [state, setState] = useState({
    data: quizQuestion,
    num: 0,
    correctanswer: 0,
  });

  const navigate = useNavigate();

  const previous = () => {
    setState((prevState) => {
      const prevNum = prevState.num - 1;
      if (prevNum >= 0) {
        return {
          ...prevState,
          num: prevNum,
          correctanswer: prevState.correctanswer - 1,
        };
      }
      return prevState;
    });
  };

  const answerclick = (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === state.data[state.num].answer) {
      setState((prevState) => ({
        ...prevState,
        correctanswer: prevState.correctanswer + 1,
      }));
      alert("Correct");
    } else {
      alert("wrong");
    }
    next();
  };

  const next = () => {
    setState((prevState) => {
      const nextNum = prevState.num + 1;
      if (nextNum <= 14) {
        return {
          ...prevState,
          num: nextNum,
        };
      }
      return prevState;
    });
  };

  const quit = () => {
    alert("Are you sure you want to quit?");
    navigate('/')
  };

  const finishquiz = () => {
    localStorage.setItem('quizResult', JSON.stringify({
        num: state.num,
        correctanswer: state.correctanswer,
    }));
};

  return (
    <div className="second">
      <h1>Question</h1>
      <p>{state.num + 1} of 15</p>
      <h3>{state.data[state.num].question}</h3>
      <div className="questions" onClick={answerclick}>
        <div>
          <h4>{state.data[state.num].optionA}</h4>
        </div>
        <div>
          <h4>{state.data[state.num].optionB}</h4>
        </div>
        <div>
          <h4>{state.data[state.num].optionC}</h4>
        </div>
        <div>
          <h4>{state.data[state.num].optionD}</h4>
        </div>
      </div>
      <div className="buttons">
        <button className="previous" onClick={previous}>
          Previous{" "}
        </button>
        <button className="next" onClick={next}>
          Next
        </button>
        <button className="quit" onClick={quit}>
          Quit
        </button>
        <Link
          to={{
            pathname: "/result",
            state: {
              num: state.num,
              correctanswer: state.correctanswer,
            },
          }}
        >
          <button className="finish" onClick={finishquiz}>Finish</button>
        </Link>
      </div>
    </div>
  );
};

export default GamePage;