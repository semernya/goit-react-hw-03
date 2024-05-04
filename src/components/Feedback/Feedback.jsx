// import css from "./Feedback.module.css";

export default function Feedback({ goodValue, neutralValue, badValue, feedbacksValue, positiveValue }) {

  return (
    <div>
      <p>Good: {goodValue}</p>
      <p>Neutral: {neutralValue}</p>
      <p>Bad: {badValue}</p>
      <p>Total: {feedbacksValue}</p>
      <p>Positive: {positiveValue}%</p>
    </div>
  );
}
