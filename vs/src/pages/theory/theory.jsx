import React from 'react';
import { TheorySlide } from '../../components/theory-slide/theory-slide.jsx';
import { Navigate } from 'react-router-dom';

export const Theory = ({theoryData, currentSlide, nextSlideHandle}) => {
  return (
    <>
      {
        theoryData.map((item) =>
          item.id === Number(currentSlide) && (
            <TheorySlide
              key={Math.random()}
              header={item.header}
              body={item.body}
              img={item.img}
              next={item.id}
              nextSlideHandle={nextSlideHandle}
          ></TheorySlide>
          )
        )
      }
      {
        currentSlide >= theoryData.length + 1 && (
          <Navigate to={'/'}></Navigate>
        )
      }
    </>
  );
};
