import React, { useEffect, useState } from 'react';
import { TestSlide } from '../../components/test-slide/test-slide.jsx';
import { Navigate } from 'react-router-dom';

export const Test = ({testData, currentQuestion, nextQuestionHandler}) => {
  const [localScore, setLocalScore] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState(0);
  
  const clickBtnHandle = (id, correct) => {
    if (chosenAnswer === correct) {
      setLocalScore((prevState) => prevState + 1)
    }
    nextQuestionHandler(id + 1, localScore);
  }
  
  return (
    <>
      {
        testData.map((item) =>
          currentQuestion === item.id && (
            <TestSlide
            key={Math.random()}
            slideData={item}
            clickBtnHandle={clickBtnHandle}
            setChosenAnswer={setChosenAnswer}
          ></TestSlide>
          )
        )
      }
      {
        currentQuestion >= testData.length && (
          <Navigate to={'/'}></Navigate>
        )
      }
    </>
  );
};
