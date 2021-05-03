import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
function Photo({ back, duraction, delay, name, age, price }) {
  const PhotoDiv = styled.div`
    background-image: url(${back});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    margin: 20px;
    cursor: pointer;

    .photo__info__box {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 80%;
      span {
        color: #fff;
        margin: 10px;
      }
    }
  `;
  return (
    <PhotoDiv {...useScrollFadeIn("left", duraction, delay)}>
      <div className="photo__info__box">
        <span>{name}</span>
        <span>{age}살</span>
        <span>${price}</span>
      </div>
    </PhotoDiv>
  );
}

export default Photo;
