import React from 'react';

export const TheorySlide = ({header, body, img, next, nextSlideHandle}) => {
 const clickHandler = () => {
   nextSlideHandle(next + 1)
 }
  
  return (
    <>
      <h1>{header}</h1>
      {
        img && (
          <img src="https://51.tigragroup.com/images/parallel.png" alt='parallel'/>
        )
      }
      {
        body.map((item) => (
          <p key={Math.random()}>{item}</p>
        ))
      }
      <button className="button" onClick={clickHandler}>
        Перейти далее
      </button>

    </>
  );
};
