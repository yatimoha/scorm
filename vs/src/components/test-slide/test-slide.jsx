import React, { useState } from 'react';

export const TestSlide = ({slideData, clickBtnHandle, setChosenAnswer}) => {
  const {id, text, answers, correct} = slideData;
  
  return (
    <div>
      <h1>{text}</h1>
      {
        answers.map((item, index) => (
          <div key={Math.random()} style={{display: 'flex'}}>
            <input
              type="radio"
              name={index + 1}
              onChange={() => setChosenAnswer(Number(index + 1))}
            />
            <label>{item}</label>
          </div>
          
        ))
      }
      <button className="button" onClick={() => clickBtnHandle(id, correct)}>Ответить</button>
    </div>
  );
};
