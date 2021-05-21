import React from "react";
import styled from "styled-components";

function AboutBox({ name, about, img }) {
  const AboutBoxDiv = styled.div`
    width: 100%;
    height: 90%;
    background-color: #c9c9c9;
    display: flex;
    justify-content: center;
    align-items: center;
    .aboutBox__info {
      width: 80%;
      height: 80%;
      background-color: #fff;
      display: flex;
      .aboutBox__info__img {
        width: 40%;
        height: 100%;
      }
      .aboutBox__info__Information {
        width: 60%;
        height: 100%;
        background-color: green;
      }
    }
  `;

  return (
    <AboutBoxDiv>
      <div className="aboutBox__info">
        <img className="aboutBox__info__img" src={img} alt=""></img>
        <div className="aboutBox__info__Information"></div>
      </div>
    </AboutBoxDiv>
  );
}

export default AboutBox;
