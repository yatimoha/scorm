import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { doneTheory } from '../../api/scorm.js';

export const Main = ({nextSlideHandle, score, isTheoryFinished, isTestFinished}) => {
  const handleClick = () => {
    nextSlideHandle(1)
  }
  
  return (
    <>
      {
        !isTheoryFinished && !isTestFinished && (
          <>
            <h1>Добро пожаловать на курс по многопоточным технологиям в Веб!</h1>
            <p>Автор курса: Грязев Тимофей Андреевич, гр. 4207, ИТМО</p>
            <Link className="button" to={`/theory-slide/`} onClick={handleClick}>
              Перейти к презентации
            </Link>
          </>
        )
      }
      {
        isTheoryFinished && !isTestFinished && (
          <Navigate to="/test-slide/"></Navigate>
        )
      }
      {
        isTheoryFinished && isTestFinished && (
          <>
            <h1>
              Поздравляем с успешным прохождением курса!
              Ваш счет за тест: <b>{score}</b>
            </h1>
          </>
        )
      }
    </>
  )
};