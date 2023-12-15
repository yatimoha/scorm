import './App.css';

import React, { useEffect, useState } from 'react';
import { doneTests, doneTheory, globalCount, findAPI } from './api/scorm.js';
import { Theory } from './pages/theory/theory.jsx';
import { theoryData } from './mocks/theory.js';
import { Main } from './pages/main/main.jsx';
import { Route, Routes } from 'react-router-dom';
import { Test } from './pages/test/test.jsx';
import { testData } from './mocks/test.js';


function App() {
  const [score, setScore] = useState(globalCount);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTheoryFinished, setTheoryFinished] = useState(false);
  const [isTestFinished, setTestFinished] = useState(false);
  const [testScore, setTestScore] = useState(0)
  
  const nextSlideHandle = (slideNum) => {
    setCurrentSlide(slideNum);
    if (slideNum === theoryData.length) {
      setTheoryFinished(prevState => !prevState)
    }
  }
  const nextQuestionHandler = (qNum, localScore) => {
    setCurrentQuestion(qNum);
    setTestScore(localScore)
    
    if (qNum === testData.length) {
      setTestFinished(prevState => !prevState);
    }
  }
  
  useEffect(() => {
    console.log('newScore')
    const newScore = doneTheory(currentSlide + 1)
    setScore(newScore)
  }, [currentSlide]);
  
  useEffect(() => {
    if (isTestFinished) {
      console.log('TestFinished, send score')
      doneTests(testData.length, testScore);
    }
    
  }, [isTestFinished]);
  
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<Main
            nextSlideHandle={nextSlideHandle}
            score={testScore}
            isTheoryFinished={isTheoryFinished}
            isTestFinished={isTestFinished}
          />}
        />
        <Route
          path="/"
          element={<Main
            nextSlideHandle={nextSlideHandle}
            score={testScore}
            isTheoryFinished={isTheoryFinished}
            isTestFinished={isTestFinished}
          />}
        />
        <Route
          path="/theory-slide/"
          element={<Theory
            theoryData={theoryData}
            currentSlide={currentSlide}
            nextSlideHandle={nextSlideHandle}
          />}
        />
        <Route
          path="/test-slide/"
          element={<Test
            testData={testData}
            currentQuestion={currentQuestion}
            nextQuestionHandler={nextQuestionHandler}
          />}
        />
      </Routes>
    </>
  
  )
}

export default App;
