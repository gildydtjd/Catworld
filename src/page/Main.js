import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Main(props) {
  const SectionBox = styled.div`
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    width: ${(props) => props.width};
    height: 100vh;
    margin-left: ${(props) => props.margin};
    justify-content: center;
    display: flex;
    align-items: center;
  `;

  const DivBox = styled.div`
    width: 100%;
    height: 100vh;
  `;

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.5),
    1: useScrollFadeIn("down", 1, 0.4),
    2: useScrollFadeIn("up", 1, 0.5),
  };

  return (
    <>
      <SectionBox url="/assets/img/coffee.jpg" width="100%" />
      <DivBox />
      <SectionBox
        {...animatedItem[0]}
        url="/assets/img/coffee4.jpg"
        width="100%"
      />
      <DivBox />
      <SectionBox
        {...animatedItem[2]}
        url="/assets/img/coffee5.jpg"
        width="100%"
      />
    </>
  );
}

export default Main;
