import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import "./App.css";

export default function App() {

  const [optionsObj, setOptionsObj] = useState(() => {
    const savedOptionsObj = window.localStorage.getItem('saved-options');
    if (savedOptionsObj !== null) {
      return JSON.parse(savedOptionsObj);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const totalFeedback = optionsObj.good + optionsObj.neutral + optionsObj.bad;

  const updateFeedback = (feedbackType) => {
    setOptionsObj({
      ...optionsObj,
      [feedbackType]: optionsObj[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setOptionsObj({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const positiveFeedback = Math.round((optionsObj.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem('saved-options', JSON.stringify(optionsObj))
  }, [optionsObj]);

  return (
    <div>
      <Description />
      <Options
        feedbacksValue={totalFeedback}
        onClick={updateFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback == 0 ? (
        <Notification />
      ) : (
        <Feedback
          positiveValue={positiveFeedback}
          feedbacksValue={totalFeedback}
          goodValue={optionsObj.good}
          neutralValue={optionsObj.neutral}
          badValue={optionsObj.bad}
        />
      )}
    </div>
  );
}
