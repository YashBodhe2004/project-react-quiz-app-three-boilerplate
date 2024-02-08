import React ,{useEffect} from "react";
import { Link } from "react-router-dom";

const Resultpage = () => {
  const [result, setResult] = React.useState({ num: 0, correctanswer: 0 });

  useEffect(() => {

      const storedResult = JSON.parse(localStorage.getItem('quizResult')) || {};
      setResult(storedResult);

  }, []);
  const percentage = ((result.correctanswer / 15) * 100).toFixed(0) || 0
  const message = percentage < 50 ? "You need more practice!" : "Congratulations!";

  return (
    <div className="resultp">
      <h1>Result</h1>
      <div className="result">
        <h3>{message}</h3>
        <h2 className="yourscore">{`Your score is ${percentage}%`}</h2>

        <div className="details">
          <div className="total score">
            <h4>Total number of questions</h4>
            <h4>15</h4>
          </div>
          <div className="attempt score">
            <h4>Total number of attempts</h4>
            <h4>{result.num}</h4>
          </div>
          <div className="total score">
            <h4>Number of correct answers</h4>
            <h4>{result.correctanswer}</h4>
          </div>
          <div className="total score">
            <h4>Number of wrong answers</h4>
            <h4>{result.num - result.correctanswer}</h4>
          </div>
        </div>
      </div>
      <Link to="/game">
        <button className="play again">Play Again</button>
      </Link>
      <Link to="/">
        <button className="back again">Back to home</button>
      </Link>
    </div>
  );
};

export default Resultpage;